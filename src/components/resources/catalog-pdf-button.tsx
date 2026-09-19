import { useState } from "react";

/**
 * Client-side product catalog PDF. Content is intentionally hard-coded here
 * (not pulled from live page data) so the generated document is stable and
 * exactly matches the approved catalog copy.
 */

const LOGO_URL = "/hegazy-mark.png";

type Product = { title: string; body: string; specs: string[] };

const PRODUCTS: Product[] = [
  {
    title: "1. Aluminum Pipes",
    body: "High-quality aluminum pipes for industrial, construction, and specialized manufacturing applications. Available in multiple alloys and tempers to meet exact requirements.",
    specs: [
      "Inner Diameter: 10–34 mm",
      "Outer Diameter: 16–51 mm",
      "Wall Thickness: 3–11.5 mm",
      "Alloys: 1xxx, 3xxx, 6xxx, 7xxx",
      "Temper: H111, H112, T4, T5, T6",
    ],
  },
  {
    title: "2. Sheets & Coils",
    body: "Hot rolled and cold rolled aluminum products from certified factories. Available as plates, sheets, coils, embossed, and tread plates.",
    specs: [
      "Alloys: 1xxx, 3xxx, 4xxx, 5xxx, 8xxx",
      "Max Width: 1,650 mm",
      "Max Length: 6,000 mm",
    ],
  },
  {
    title: "3. Aluminum Discs",
    body: "Premium aluminum circles ideal for cookware, rice cookers, lamps, and traffic signs.",
    specs: [
      "Thickness: 0.8–3.5 mm",
      "Diameter: 170–540 mm",
      "Alloys: 1xxx, 3xxx, 5xxx",
      "Temper: O, H1x, H2x",
      "Surface: Mill, Polished, Anodized",
    ],
  },
  {
    title: "4. Aluminum Ingots",
    body: "Primary aluminum ingots and T-bars from certified cast houses.",
    specs: [
      "Ingots 99.7%/99.8%: 18–22 kg, 44/bundle, 1 ton max",
      "T-Bars: 280×810 mm, up to 1 m, ~1,000 kg",
      "Alloys: 99.7%, 99.8%, 99.7 EC, SR/SB modified",
    ],
  },
  {
    title: "5. Aluminum Billets",
    body: "Air Slip cast billets for extrusion and forging applications.",
    specs: [
      "Diameters: 127, 178, 203, 228, 254 mm",
      "Tolerance: +1 mm",
      "Max Length: 6 m (+10 mm)",
      "Alloys: 6063, 6061, 6062",
    ],
  },
  {
    title: "6. Profiles & Bars",
    body: "6xxx and 7xxx series profiles and bars for construction, transport, and industrial machinery.",
    specs: [
      "Alloys: 6060, 6061, 6063, 7xxx",
      "Temper: T5, T6",
      "Applications: Construction, transport, industrial",
    ],
  },
  {
    title: "7. Aluminum Wire Rods",
    body: "High-conductivity 1xxx series wire rods for cable and conductor manufacturing.",
    specs: [
      "Rod Diameter: 9.0 mm (+0.3) / 9.5 mm (+0.5)",
      "Coil Weight: ~1,500/2,000 kg",
      "Alloy: 1xxx series",
      "Temper: H12, H14",
    ],
  },
];

const ABOUT_PARAGRAPHS = [
  "Hegazy Group is an aluminum supply and distribution company serving construction, manufacturing, transport, and industry across Egypt and the region. We combine certified mill sources, technical expertise, and regional logistics to deliver reliable aluminum solutions.",
  "Our team supports customers with alloy selection, dimensional tolerances, finish options, and downstream fabrication guidance. With multi-hub fulfillment and export-ready documentation, we align supply with project schedules and production plans.",
  "We supply aluminum pipes, sheets & coils, discs, ingots, billets, profiles & bars, and wire rods to industries including metal manufacturing, construction, automotive, electrical, and more.",
];

const CONTACT: [string, string][] = [
  ["Phone", "+20 3 552 3190"],
  ["WhatsApp", "+20 122 924 5676"],
  ["Email", "company@grouphegazy.com"],
  [
    "Address",
    "Alexandria, Miami, Gamal Abdel Nasser Street, Spinning and Weaving Tower, beside Orange Services Company, Egypt",
  ],
  ["LinkedIn", "https://www.linkedin.com/company/hegazy-international-group/"],
  ["Facebook", "https://www.facebook.com/share/1DG3gbSUhK/?mibextid=wwXIfr"],
];

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 18;
const CONTENT_W = PAGE_W - MARGIN * 2;

async function loadLogo(): Promise<{ data: string; w: number; h: number } | null> {
  try {
    const res = await fetch(LOGO_URL);
    if (!res.ok) return null;
    const blob = await res.blob();
    const data = await new Promise<string>((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(String(r.result));
      r.onerror = reject;
      r.readAsDataURL(blob);
    });
    const size = await new Promise<{ w: number; h: number }>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
      img.onerror = reject;
      img.src = data;
    });
    return { data, ...size };
  } catch {
    return null;
  }
}

export function CatalogPdfButton({ label }: { label: string }) {
  const [busy, setBusy] = useState(false);

  async function handleClick() {
    setBusy(true);
    console.log("catalog-pdf: start");
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
      const logo = await loadLogo();

      // --- Cover ---
      let y = 70;
      if (logo) {
        const w = 38;
        const h = (logo.h / logo.w) * w;
        doc.addImage(logo.data, "PNG", (PAGE_W - w) / 2, y, w, h);
        y += h + 22;
      } else {
        y += 30;
      }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(17);
      doc.setTextColor(26, 29, 33);
      const titleLines = doc.splitTextToSize(
        "Hegazy Group \u2014 Aluminum Supply & Distribution",
        CONTENT_W,
      ) as string[];
      titleLines.forEach((line) => {
        doc.text(line, PAGE_W / 2, y, { align: "center" });
        y += 9;
      });
      doc.setFont("helvetica", "normal");
      doc.setFontSize(13);
      doc.setTextColor(74, 85, 96);
      doc.text("Product Catalog", PAGE_W / 2, y + 4, { align: "center" });

      // --- About ---
      doc.addPage();
      doc.setTextColor(26, 29, 33);
      y = MARGIN + 6;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("About Hegazy Group", MARGIN, y);
      y += 12;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      ABOUT_PARAGRAPHS.forEach((p) => {
        const lines = doc.splitTextToSize(p, CONTENT_W) as string[];
        lines.forEach((line) => {
          doc.text(line, MARGIN, y);
          y += 5.8;
        });
        y += 5;
      });

      // --- Products ---
      doc.addPage();
      y = MARGIN + 6;
      PRODUCTS.forEach((product) => {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        const bodyLines = doc.splitTextToSize(product.body, CONTENT_W) as string[];
        const specLines = product.specs.flatMap(
          (s) => doc.splitTextToSize(s, CONTENT_W - 6) as string[],
        );
        const blockH = 10 + bodyLines.length * 5.8 + 3 + specLines.length * 5.6 + 10;
        if (y + blockH > PAGE_H - MARGIN) {
          doc.addPage();
          y = MARGIN + 6;
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        doc.setTextColor(26, 29, 33);
        doc.text(product.title, MARGIN, y);
        y += 8;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        bodyLines.forEach((line) => {
          doc.text(line, MARGIN, y);
          y += 5.8;
        });
        y += 3;
        doc.setTextColor(60, 68, 77);
        specLines.forEach((line) => {
          doc.text(line, MARGIN + 6, y);
          y += 5.6;
        });
        doc.setTextColor(26, 29, 33);
        y += 4;
        doc.setDrawColor(216, 220, 224);
        doc.line(MARGIN, y, PAGE_W - MARGIN, y);
        y += 8;
      });

      // --- Contact ---
      doc.addPage();
      y = MARGIN + 6;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text("Get in Touch", MARGIN, y);
      y += 12;
      doc.setFontSize(11);
      CONTACT.forEach(([key, value]) => {
        doc.setFont("helvetica", "bold");
        doc.text(key, MARGIN, y);
        doc.setFont("helvetica", "normal");
        const lines = doc.splitTextToSize(value, CONTENT_W - 30) as string[];
        lines.forEach((line, i) => {
          doc.text(line, MARGIN + 30, y + i * 5.6);
        });
        y += Math.max(1, lines.length) * 5.6 + 4;
      });

      console.log("catalog-pdf: saving");
      doc.save("Hegazy-Group-Product-Catalog.pdf");
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={busy}
      className="inline-flex h-11 items-center justify-center rounded-md bg-graphite-900 px-5 text-meta font-medium text-white hover:bg-graphite-800 disabled:opacity-60"
    >
      {label}
    </button>
  );
}
