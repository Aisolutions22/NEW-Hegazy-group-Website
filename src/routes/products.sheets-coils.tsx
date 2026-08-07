import { createFileRoute } from "@tanstack/react-router";
import { RelatedIndustries } from "@/components/products/related-industries";
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

function Page() {
  const { t } = useLanguage();
  const s = t.productDetail.sheetsCoils;

  const columns = [
    { key: "type", label: s.colType },
    { key: "thickness", label: s.colThickness },
    { key: "width", label: s.colWidth },
    { key: "length", label: s.colLength },
    { key: "temper", label: s.colTemper },
  ];

  const hotRolled = [
    { type: s.rowPlates, thickness: "10 – 50", width: "1000 – 1650", length: "2000 – 6000", temper: "O, H111" },
    { type: s.rowSheets, thickness: "4 – 8", width: "1000 – 1650", length: "2000 – 6000", temper: "F" },
    { type: s.rowCoils, thickness: "4 – 8", width: "1000 – 1650", length: "up to 2000 (I.D./O.D. 600)", temper: "F" },
  ];

  const coldRolled = [
    { type: s.rowCoils, thickness: "0.25 – 2.8", width: "1000 – 1600", length: "up to 1800", temper: "O, H1x, H2x, H3x" },
    { type: s.rowTreadPlates, thickness: "1 – 5", width: "1000 – 1500", length: "2000 – 6000", temper: "H1xx" },
    { type: s.rowEmbossed, thickness: "0.5 – 1", width: "1000 – 1500", length: "2000 – 6000", temper: "H1x, H2x" },
    { type: s.rowSheets, thickness: "0.5 – 8", width: "800 – 1600", length: "2000 – 6000", temper: "O, H1x, H2x, H3x" },
    { type: s.rowDiscs, thickness: "0.8 – 3.5", width: "170 – 540 (diameter)", length: "—", temper: "O, H1x, H2x" },
    { type: s.rowSquares, thickness: "1.0 – 2.5", width: "300 – 800", length: "300 – 1300", temper: "O, H1x, H2x" },
  ];

  const subCategories = [s.subMill, s.subEmbossed, s.subCoils];

  return (
    <CategoryPageLayout title={s.title} intro={s.intro}>
      <div className="grid gap-12">
        <SpecMatrix caption={s.hotRolled} columns={columns} rows={hotRolled} />
        <SpecMatrix caption={s.coldRolled} columns={columns} rows={coldRolled} />

        <p className="border-t border-steel-200 pt-6 text-meta text-steel-600">
          {s.summary}
        </p>

        <div>
          <h3 className="mb-4 font-mono text-micro uppercase tracking-caps text-steel-400">
            {t.categoryPage.featuredHeading}
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {subCategories.map((label) => (
              <GalleryPlaceholder key={label} label={label} />
            ))}
          </div>
        </div>
      </div>
      <RelatedIndustries slug="sheets-coils" />
    </CategoryPageLayout>
  );
}
