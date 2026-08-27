import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout } from "@/components/products/category-page-layout";
import { RelatedIndustries } from "@/components/products/related-industries";
import { SpecTable } from "@/components/products/spec-table";
import { getProductCategory } from "@/lib/catalog/categories";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/discs")({
  head: () => ({
    meta: [
      { title: "Aluminum Discs — Hegazy Group" },
      { name: "description", content: "Aluminum discs for cookware, lighting, and deep-draw applications." },
          { property: "og:url", content: "https://hegazy-group.lovable.app/products/discs" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/products/discs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Aluminum Discs (Circles)", "description": "Deep-draw aluminum circles in mill, polished and anodized finishes for cookware, utensils and lighting.", "url": "https://hegazy-group.lovable.app/products/discs", "category": "Aluminum products", "brand": {"@type": "Brand", "name": "Hegazy Group"}, "material": "Aluminum", "additionalProperty": [{"@type": "PropertyValue", "name": "Alloys", "value": "1050, 1100, 3003, 5052"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout
      title={t.productDetail.discs.title}
      intro={t.productDetail.discs.intro}
      image={getProductCategory("discs")?.image}
      imageAlt={t.productDetail.discs.title}
    >
      <div className="grid gap-12">
        <SpecTable
          caption={t.categoryPage.specifications}
          rows={[
            { label: t.productDetail.discs.thickness, value: "0.8 – 3.5 mm" },
            { label: t.productDetail.discs.diameterRange, value: "170 – 540 mm" },
            { label: t.productDetail.discs.alloys, value: "1xxx, 3xxx, 5xxx" },
            { label: t.productDetail.discs.temper, value: "O, H1x, H2x" },
            { label: t.productDetail.discs.surface, value: "Mill, Polished, Anodized" },
          ]}
        />
      </div>
      <RelatedIndustries slug="discs" />
    </CategoryPageLayout>
  );
}
