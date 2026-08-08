import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
import { RelatedIndustries } from "@/components/products/related-industries";
import { SpecTable } from "@/components/products/spec-table";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/discs")({
  head: () => ({
    meta: [
      { title: "Aluminum Discs — Hegazy Group" },
      { name: "description", content: "Aluminum discs for cookware, lighting, and deep-draw applications." },
          { property: "og:url", content: "https://hegazy-group.lovable.app/products/discs" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/products/discs" }],
  }),
  component: Page,
});

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.productDetail.discs.title} intro={t.productDetail.discs.intro}>
      <div className="grid gap-12 lg:grid-cols-2">
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
        <GalleryPlaceholder />
      </div>
      <RelatedIndustries slug="discs" />
    </CategoryPageLayout>
  );
}
