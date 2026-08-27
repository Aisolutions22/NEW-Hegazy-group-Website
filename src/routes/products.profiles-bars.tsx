import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout } from "@/components/products/category-page-layout";
import { RelatedIndustries } from "@/components/products/related-industries";
import { SpecTable } from "@/components/products/spec-table";
import { getProductCategory } from "@/lib/catalog/categories";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/profiles-bars")({
  head: () => ({
    meta: [
      { title: "Aluminum Profiles & Bars — Hegazy Group" },
      { name: "description", content: "Extruded aluminum profiles, round bars, square bars, and hex rods." },
          { property: "og:url", content: "https://hegazy-group.lovable.app/products/profiles-bars" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/products/profiles-bars" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Aluminum Profiles & Bars", "description": "Extruded aluminum profiles, flat, round and square bars in mill, anodized and powder-coated finishes.", "url": "https://hegazy-group.lovable.app/products/profiles-bars", "category": "Aluminum products", "brand": {"@type": "Brand", "name": "Hegazy Group"}, "material": "Aluminum", "additionalProperty": [{"@type": "PropertyValue", "name": "Alloys", "value": "6060, 6061, 6063, 6082"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout
      title={t.productDetail.profilesBars.title}
      intro={t.productDetail.profilesBars.intro}
      image={getProductCategory("profiles-bars")?.image}
      imageAlt={t.productDetail.profilesBars.title}
    >
      <div className="grid gap-12">
        <SpecTable
          caption={t.categoryPage.specifications}
          rows={[
            { label: t.productDetail.profilesBars.alloys, value: "6060, 6061, 6063, 7xxx" },
            { label: t.productDetail.profilesBars.temper, value: "T5, T6" },
            { label: t.productDetail.profilesBars.profileTypes, value: "Extrusion, flat, round, square" },
            { label: t.productDetail.profilesBars.applications, value: "Construction, transport, industrial" },
            { label: t.productDetail.profilesBars.surface, value: "Mill, anodized, powder coated" },
          ]}
        />
      </div>
      <RelatedIndustries slug="profiles-bars" />
    </CategoryPageLayout>
  );
}
