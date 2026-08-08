import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
import { RelatedIndustries } from "@/components/products/related-industries";
import { SpecTable } from "@/components/products/spec-table";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/wire-rods")({
  head: () => ({
    meta: [
      { title: "Aluminum Wire Rods — Hegazy Group" },
      { name: "description", content: "Aluminum wire rods for electrical conductor and mechanical wire drawing." },
          { property: "og:url", content: "https://hegazy-group.lovable.app/products/wire-rods" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/products/wire-rods" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Aluminum Wire Rods", "description": "High-conductivity aluminum wire rod for drawing, stranding and electrical conductors.", "url": "https://hegazy-group.lovable.app/products/wire-rods", "category": "Aluminum products", "brand": {"@type": "Brand", "name": "Hegazy Group"}, "material": "Aluminum", "additionalProperty": [{"@type": "PropertyValue", "name": "Alloys", "value": "1350, 1050, 1070"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.productDetail.wireRods.title} intro={t.productDetail.wireRods.intro}>
      <div className="grid gap-12 lg:grid-cols-2">
        <SpecTable
          caption={t.categoryPage.specifications}
          rows={[
            { label: t.productDetail.wireRods.rodDiameter, value: "9.0 mm (+0.3) / 9.5 mm (+0.5)" },
            { label: t.productDetail.wireRods.coilOuter, value: "1,250 / 1,350 mm max" },
            { label: t.productDetail.wireRods.coilInner, value: "750 / 540 mm (+50 mm)" },
            { label: t.productDetail.wireRods.coilHeight, value: "900 / 850 mm" },
            { label: t.productDetail.wireRods.coilWeight, value: "1,500 / 2,000 kg approx." },
            { label: t.productDetail.wireRods.alloy, value: "1xxx series" },
            { label: t.productDetail.wireRods.temper, value: "H12, H14" },
          ]}
        />
        <GalleryPlaceholder />
      </div>
      <RelatedIndustries slug="wire-rods" />
    </CategoryPageLayout>
  );
}
