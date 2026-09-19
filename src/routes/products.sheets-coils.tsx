import { createFileRoute } from "@tanstack/react-router";
import { RelatedIndustries } from "@/components/products/related-industries";
import { CategoryPageLayout } from "@/components/products/category-page-layout";
import { SpecMatrix } from "@/components/products/spec-table";
import { PRODUCT_DETAIL_IMAGES } from "@/lib/catalog/product-detail-images";
import { useLanguage } from "@/lib/i18n/language-context";
import embossedAsset from "@/assets/product-subcategories/embossed.jpeg.asset.json";
import diamondAsset from "@/assets/product-subcategories/diamond.jpeg.asset.json";
import fiveBarAsset from "@/assets/product-subcategories/5-bar.jpeg.asset.json";

export const Route = createFileRoute("/products/sheets-coils")({
  head: () => ({
    meta: [
      { title: "Aluminum Sheets & Coils — Hegazy Group" },
      { name: "description", content: "Aluminum sheets and coils in mill, coated, and embossed finishes." },
          { property: "og:url", content: "https://hegazy-group.lovable.app/products/sheets-coils" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/products/sheets-coils" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Aluminum Sheets & Coils", "description": "Mill-finish and finished aluminum sheets, plates and coils, including embossed and tread patterns, for construction, HVAC and industry.", "url": "https://hegazy-group.lovable.app/products/sheets-coils", "category": "Aluminum products", "brand": {"@type": "Brand", "name": "Hegazy Group"}, "material": "Aluminum", "additionalProperty": [{"@type": "PropertyValue", "name": "Alloys", "value": "1xxx, 3xxx, 5xxx, 8xxx"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useLanguage();
  const s = t.productDetail.sheetsCoils;
  const image = PRODUCT_DETAIL_IMAGES["sheets-coils"];

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

  const subCategories = [
    {
      label: "Embossed",
      image: embossedAsset.url,
      width: 750,
      height: 750,
      alt: "Embossed aluminum sheet pattern",
    },
    {
      label: "Diamond",
      image: diamondAsset.url,
      width: 750,
      height: 500,
      alt: "Diamond pattern aluminum sheet",
    },
    {
      label: "5-bar",
      image: fiveBarAsset.url,
      width: 1108,
      height: 960,
      alt: "5-bar pattern aluminum sheet",
    },
  ];

  return (
    <CategoryPageLayout
      title={s.title}
      intro={s.intro}
      image={image.src}
      imageAlt={image.alt}
      imageWidth={image.width}
      imageHeight={image.height}
    >
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
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {subCategories.map((item) => (
              <li key={item.label} className="overflow-hidden rounded-md border border-steel-200 bg-offwhite-50">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-contain"
                />
                <div className="border-t border-steel-200 px-4 py-3 text-small font-semibold text-graphite-900">
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <RelatedIndustries slug="sheets-coils" />
    </CategoryPageLayout>
  );
}
