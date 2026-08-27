import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout } from "@/components/products/category-page-layout";
import { RelatedIndustries } from "@/components/products/related-industries";
import { SpecTable } from "@/components/products/spec-table";
import { getProductCategory } from "@/lib/catalog/categories";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/ingots")({
  head: () => ({
    meta: [
      { title: "Aluminum Ingots — Hegazy Group" },
      { name: "description", content: "Primary and secondary aluminum ingots for foundries and remelt operations." },
          { property: "og:url", content: "https://hegazy-group.lovable.app/products/ingots" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/products/ingots" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Aluminum Ingots", "description": "Primary and alloyed aluminum ingots (SB, SR, EC grades) for foundries and metal manufacturing.", "url": "https://hegazy-group.lovable.app/products/ingots", "category": "Aluminum products", "brand": {"@type": "Brand", "name": "Hegazy Group"}, "material": "Aluminum", "additionalProperty": [{"@type": "PropertyValue", "name": "Alloys", "value": "EC, SB, SR"}]}),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout
      title={t.productDetail.ingots.title}
      intro={t.productDetail.ingots.intro}
      image={getProductCategory("ingots")?.image}
      imageAlt={t.productDetail.ingots.title}
    >
      <div className="grid gap-12">
        <SpecTable
          caption={t.categoryPage.specifications}
          rows={[
            { label: t.productDetail.ingots.ingotsGrades, value: "18 – 22 kg, 44/bundle, 1 ton max" },
            { label: t.productDetail.ingots.foundryIngots, value: "8 – 10 kg, 89/bundle, 1 ton max" },
            { label: t.productDetail.ingots.tBars, value: "280 × 810 mm, up to 1 m, ~1,000 kg" },
            { label: t.productDetail.ingots.alloys, value: "99.7%, 99.8%, 99.7 EC, SR/SB modified" },
            { label: t.productDetail.ingots.packaging, value: "Bundled / Palletized" },
          ]}
        />
      </div>
      <RelatedIndustries slug="ingots" />
    </CategoryPageLayout>
  );
}
