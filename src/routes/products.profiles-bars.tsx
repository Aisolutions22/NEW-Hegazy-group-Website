import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
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

const INTRO =
  "6xxx and 7xxx series profiles and bars. Ideal for construction (windows, doors, curtain walls), transport (automotive, rail, marine), industrial machinery, and consumer applications.";

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.profilesBars} intro={INTRO}>
      <div className="grid gap-12 lg:grid-cols-2">
        <SpecTable
          caption="Specifications"
          rows={[
            { label: "Alloys", value: "6060, 6061, 6063, 7xxx" },
            { label: "Temper", value: "T5, T6" },
            { label: "Profile Types", value: "Extrusion, flat, round, square" },
            { label: "Applications", value: "Construction, transport, industrial" },
            { label: "Surface", value: "Mill, anodized, powder coated" },
          ]}
        />
        <GalleryPlaceholder />
      </div>
    </CategoryPageLayout>
  );
}
