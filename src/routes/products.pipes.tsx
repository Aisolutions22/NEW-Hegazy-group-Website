import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout } from "@/components/products/category-page-layout";
import { RelatedIndustries } from "@/components/products/related-industries";
import { SpecTable } from "@/components/products/spec-table";
import { useLanguage } from "@/lib/i18n/language-context";
import { getProductCategory } from "@/lib/catalog/categories";

export const Route = createFileRoute("/products/pipes")({
  head: () => ({
    meta: [
      { title: "Aluminum Pipes — Hegazy Group" },
      { name: "description", content: "Aluminum pipes for HVAC, heat transfer, and industrial applications." },
      { property: "og:url", content: "https://hegazy-group.lovable.app/products/pipes" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/products/pipes" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Aluminum Pipes", "description": "Round and shaped aluminum pipes and tubes in 1xxx, 3xxx, 6xxx and 7xxx series for construction and industry.", "url": "https://hegazy-group.lovable.app/products/pipes", "category": "Aluminum products", "brand": {"@type": "Brand", "name": "Hegazy Group"}, "material": "Aluminum", "additionalProperty": [{"@type": "PropertyValue", "name": "Alloys", "value": "1xxx, 3xxx, 6xxx, 7xxx"}]}),
      },
    ],
  }),
  component: PipesPage,
});

function PipesPage() {
  const { t } = useLanguage();
  const image = getProductCategory("pipes")?.image;

  return (
    <CategoryPageLayout
      title={t.productDetail.pipes.title}
      intro={t.productDetail.pipes.intro}
      image={image}
      imageAlt={t.productDetail.pipes.title}
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <SpecTable
          caption={t.categoryPage.specifications}
          rows={[
            { label: t.productDetail.pipes.innerDiameter, value: "10 mm – 34 mm" },
            { label: t.productDetail.pipes.outerDiameter, value: "16 mm – 51 mm" },
            { label: t.productDetail.pipes.wallThickness, value: "3 mm – 11.5 mm" },
            { label: t.productDetail.pipes.alloys, value: "1xxx, 3xxx, 6xxx, 7xxx" },
            { label: t.productDetail.pipes.temper, value: "H111, H112, T4, T5, T6" },
          ]}
        />
      </div>
      <RelatedIndustries slug="pipes" />
    </CategoryPageLayout>
  );
}
