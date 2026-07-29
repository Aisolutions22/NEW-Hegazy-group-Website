import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
import { SpecMatrix } from "@/components/products/spec-table";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/sheets-coils")({
  head: () => ({
    meta: [
      { title: "Aluminum Sheets & Coils — Hegazy Group" },
      { name: "description", content: "Aluminum sheets and coils in mill, coated, and embossed finishes." },
    ],
  }),
  component: Page,
});

const INTRO =
  "Hot rolled and cold rolled aluminum products from certified factories. Available as plates, sheets, coils, embossed, and tread plates — covering the full range of industrial, construction, and decorative applications.";

const COLUMNS = [
  { key: "type", label: "Product Type" },
  { key: "thickness", label: "Thickness (mm)" },
  { key: "width", label: "Width (mm)" },
  { key: "length", label: "Length (mm)" },
  { key: "temper", label: "Temper" },
];

const HOT_ROLLED = [
  { type: "Plates", thickness: "10 – 50", width: "1000 – 1650", length: "2000 – 6000", temper: "O, H111" },
  { type: "Sheets", thickness: "4 – 8", width: "1000 – 1650", length: "2000 – 6000", temper: "F" },
  { type: "Coils", thickness: "4 – 8", width: "1000 – 1650", length: "up to 2000 (I.D./O.D. 600)", temper: "F" },
];

const COLD_ROLLED = [
  { type: "Coils", thickness: "0.25 – 2.8", width: "1000 – 1600", length: "up to 1800", temper: "O, H1x, H2x, H3x" },
  { type: "Tread Plates", thickness: "1 – 5", width: "1000 – 1500", length: "2000 – 6000", temper: "H1xx" },
  { type: "Embossed", thickness: "0.5 – 1", width: "1000 – 1500", length: "2000 – 6000", temper: "H1x, H2x" },
  { type: "Sheets", thickness: "0.5 – 8", width: "800 – 1600", length: "2000 – 6000", temper: "O, H1x, H2x, H3x" },
  { type: "Discs", thickness: "0.8 – 3.5", width: "170 – 540 (diameter)", length: "—", temper: "O, H1x, H2x" },
  { type: "Squares", thickness: "1.0 – 2.5", width: "300 – 800", length: "300 – 1300", temper: "O, H1x, H2x" },
];

const SUB_CATEGORIES = ["Mill Finished Sheets", "Embossed Sheets", "Aluminum Coils"];

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.sheetsCoils} intro={INTRO}>
      <div className="grid gap-12">
        <SpecMatrix caption="Hot Rolled Products" columns={COLUMNS} rows={HOT_ROLLED} />
        <SpecMatrix caption="Cold Rolled Products" columns={COLUMNS} rows={COLD_ROLLED} />

        <p className="border-t border-steel-200 pt-6 text-meta text-steel-600">
          <span className="font-semibold text-graphite-900">Alloys:</span> 1xxx, 3xxx, 4xxx, 5xxx, 8xxx
          <span className="mx-3 text-steel-300">|</span>
          <span className="font-semibold text-graphite-900">Max Width:</span> up to 1,650 mm
          <span className="mx-3 text-steel-300">|</span>
          <span className="font-semibold text-graphite-900">Max Length:</span> up to 6,000 mm
        </p>

        <div>
          <h3 className="mb-4 font-mono text-micro uppercase tracking-caps text-steel-400">
            Featured Sub-categories
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {SUB_CATEGORIES.map((label) => (
              <GalleryPlaceholder key={label} label={label} />
            ))}
          </div>
        </div>
      </div>
    </CategoryPageLayout>
  );
}
