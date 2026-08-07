import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
import { RelatedIndustries } from "@/components/products/related-industries";
import { SpecTable } from "@/components/products/spec-table";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/profiles-bars")({
  head: () => ({
    meta: [
      { title: "Aluminum Profiles & Bars — Hegazy Group" },
      { name: "description", content: "Extruded aluminum profiles, round bars, square bars, and hex rods." },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.productDetail.profilesBars.title} intro={t.productDetail.profilesBars.intro}>
      <div className="grid gap-12 lg:grid-cols-2">
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
        <GalleryPlaceholder />
      </div>
      <RelatedIndustries slug="profiles-bars" />
    </CategoryPageLayout>
  );
}
