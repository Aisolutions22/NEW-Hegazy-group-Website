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
    ],
  }),
  component: Page,
});

const INTRO =
  "Air Slip cast billets, produced with advanced casting technology for superior surface quality and consistent metallurgical structure. Suitable for extrusion and forging applications.";

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.billets} intro={INTRO}>
      <div className="grid gap-12 lg:grid-cols-2">
        <SpecTable
          caption="Specifications"
          rows={[
            { label: "Diameters", value: "127, 178, 203, 228, 254 mm" },
            { label: "Tolerance", value: "+1 mm" },
            { label: "Max Length", value: "6 metres (+10 mm)" },
            { label: "Curvature", value: "2 mm / metre" },
            { label: "Casting", value: "Air Slip" },
            { label: "Alloys", value: "6063, 6061, 6062" },
          ]}
        />
        <GalleryPlaceholder />
      </div>
      <RelatedIndustries slug="billets" />
    </CategoryPageLayout>
  );
}
