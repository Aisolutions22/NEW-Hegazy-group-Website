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

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function buildMarkup() {
  const products = PRODUCTS.map(
    (p) => `
      <section class="product">
        <h2>${escape(p.title)}</h2>
        <p>${escape(p.body)}</p>
        <ul>${p.specs.map((s) => `<li>${escape(s)}</li>`).join("")}</ul>
      </section>`,
  ).join("");

  const contact = CONTACT.map(
    ([k, v]) =>
      `<tr><th>${escape(k)}</th><td>${escape(v)}</td></tr>`,
  ).join("");

  return `
    <style>
      .pdf-root { font-family: Helvetica, Arial, sans-serif; color: #1a1d21; font-size: 12pt; line-height: 1.55; }
      .pdf-root .page-break { page-break-before: always; }
      .pdf-root h1 { font-size: 22pt; margin: 0 0 8pt; }
      .pdf-root h2 { font-size: 15pt; margin: 0 0 6pt; }
      .pdf-root p { margin: 0 0 10pt; }
      .pdf-root ul { margin: 0; padding-left: 16pt; }
      .pdf-root li { margin-bottom: 4pt; }
      .pdf-root .product { page-break-inside: avoid; break-inside: avoid; margin-bottom: 20pt;
        border-bottom: 1px solid #d8dce0; padding-bottom: 14pt; }
      .pdf-root .cover { text-align: center; padding-top: 140pt; }
      .pdf-root .cover img { width: 130px; height: auto; margin: 0 auto 30pt; display: block; }
      .pdf-root .cover .sub { font-size: 16pt; color: #4a5560; }
      .pdf-root table { width: 100%; border-collapse: collapse; }
      .pdf-root th { text-align: left; width: 90pt; vertical-align: top; padding: 5pt 8pt 5pt 0; }
      .pdf-root td { padding: 5pt 0; word-break: break-word; }
    </style>
    <div class="pdf-root">
      <div class="cover">
        <img src="${LOGO_URL}" alt="Hegazy Group logo" />
        <h1>Hegazy Group — Aluminum Supply &amp; Distribution</h1>
        <div class="sub">Product Catalog</div>
      </div>

      <div class="page-break">
        <h1>About Hegazy Group</h1>
        ${ABOUT_PARAGRAPHS.map((p) => `<p>${escape(p)}</p>`).join("")}
      </div>

      <div class="page-break">
        ${products}
      </div>

      <div class="page-break">
        <h1>Get in Touch</h1>
        <table><tbody>${contact}</tbody></table>
      </div>
    </div>`;
}

export function CatalogPdfButton({ label }: { label: string }) {
  const [busy, setBusy] = useState(false);

  async function handleClick() {
    setBusy(true);
    try {
      const mod = await import("html2pdf.js");
      const html2pdf = (mod as { default: unknown }).default ?? mod;
      const container = document.createElement("div");
      container.style.cssText =
        "width:794px;max-width:794px;box-sizing:border-box;overflow:hidden;background:#ffffff;";
      container.innerHTML = buildMarkup();
      document.body.appendChild(container);
      try {
        await (html2pdf as (...a: unknown[]) => {
          set: (o: unknown) => { from: (e: unknown) => { save: () => Promise<void> } };
        })()
          .set({
            margin: [14, 14, 16, 14],
            filename: "Hegazy-Group-Product-Catalog.pdf",
            image: { type: "jpeg", quality: 0.95 },
            html2canvas: { scale: 2, useCORS: true, windowWidth: 794 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
            pagebreak: { mode: ["css", "legacy"], avoid: ".product" },
          })
          .from(container)
          .save();
      } finally {
        container.remove();
      }
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
