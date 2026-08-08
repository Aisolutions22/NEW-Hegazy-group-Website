import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
import { RelatedIndustries } from "@/components/products/related-industries";
import { SpecTable } from "@/components/products/spec-table";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/ingots")({
  head: () => ({
    meta: [
      { title: "Aluminum Ingots — Hegazy Group" },
      { name: "description", content: "Primary and secondary aluminum ingots for foundries and remelt operations." },
          { property: "og:url", content: "https://hegazy-group.lovable.app/products/ingots" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/products/ingots" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.productDetail.ingots.title} intro={t.productDetail.ingots.intro}>
      <div className="grid gap-12 lg:grid-cols-2">
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
        <GalleryPlaceholder />
      </div>
      <RelatedIndustries slug="ingots" />
    </CategoryPageLayout>
  );
}
