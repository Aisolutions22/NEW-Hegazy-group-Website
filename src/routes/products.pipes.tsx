import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
import { RelatedIndustries } from "@/components/products/related-industries";
import { SpecTable } from "@/components/products/spec-table";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/pipes")({
  head: () => ({
    meta: [
      { title: "Aluminum Pipes — Hegazy Group" },
      { name: "description", content: "Aluminum pipes for HVAC, heat transfer, and industrial applications." },
    ],
  }),
  component: PipesPage,
});

const INTRO =
  "High-quality aluminum pipes designed for industrial, construction, and specialized manufacturing applications. Available in multiple alloys and tempers to meet exact requirements.";

function PipesPage() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.pipes} intro={INTRO}>
      <div className="grid gap-12 lg:grid-cols-2">
        <SpecTable
          caption="Specifications"
          rows={[
            { label: "Inner Diameter", value: "10 mm – 34 mm" },
            { label: "Outer Diameter", value: "16 mm – 51 mm" },
            { label: "Wall Thickness", value: "3 mm – 11.5 mm" },
            { label: "Alloys", value: "1xxx, 3xxx, 6xxx, 7xxx" },
            { label: "Temper", value: "H111, H112, T4, T5, T6" },
          ]}
        />
        <GalleryPlaceholder />
      </div>
      <RelatedIndustries slug="pipes" />
    </CategoryPageLayout>
  );
}
