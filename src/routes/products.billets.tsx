import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
import { RelatedIndustries } from "@/components/products/related-industries";
import { SpecTable } from "@/components/products/spec-table";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/billets")({
  head: () => ({
    meta: [
      { title: "Aluminum Billets — Hegazy Group" },
      { name: "description", content: "Extrusion billets in 6xxx and 6063 series for profile manufacturers." },
          { property: "og:url", content: "https://hegazy-group.lovable.app/products/billets" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/products/billets" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Aluminum Billets", "description": "Extrusion billets in 6xxx series (6063, 6061, 6062), Air Slip cast, diameters 127-254 mm, up to 6 m length.", "url": "https://hegazy-group.lovable.app/products/billets", "category": "Aluminum products", "brand": {"@type": "Brand", "name": "Hegazy Group"}, "material": "Aluminum", "additionalProperty": [{"@type": "PropertyValue", "name": "Alloys", "value": "6063, 6061, 6062"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.productDetail.billets.title} intro={t.productDetail.billets.intro}>
      <div className="grid gap-12 lg:grid-cols-2">
        <SpecTable
          caption={t.categoryPage.specifications}
          rows={[
            { label: t.productDetail.billets.diameters, value: "127, 178, 203, 228, 254 mm" },
            { label: t.productDetail.billets.tolerance, value: "+1 mm" },
            { label: t.productDetail.billets.maxLength, value: "6 metres (+10 mm)" },
            { label: t.productDetail.billets.curvature, value: "2 mm / metre" },
            { label: t.productDetail.billets.casting, value: "Air Slip" },
            { label: t.productDetail.billets.alloys, value: "6063, 6061, 6062" },
          ]}
        />
        <GalleryPlaceholder />
      </div>
      <RelatedIndustries slug="billets" />
    </CategoryPageLayout>
  );
}
