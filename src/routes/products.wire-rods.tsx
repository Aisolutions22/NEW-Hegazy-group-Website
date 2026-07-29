import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
import { SpecTable } from "@/components/products/spec-table";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/wire-rods")({
  head: () => ({
    meta: [
      { title: "Aluminum Wire Rods — Hegazy Group" },
      { name: "description", content: "Aluminum wire rods for electrical conductor and mechanical wire drawing." },
    ],
  }),
  component: Page,
});

const INTRO =
  "Electrical and industrial grade wire rods. High-conductivity 1xxx series alloy in 9mm and 9.5mm diameters, supplied in coils for cable and conductor manufacturing.";

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.wireRods} intro={INTRO}>
      <div className="grid gap-12 lg:grid-cols-2">
        <SpecTable
          caption="Specifications"
          rows={[
            { label: "Rod Diameter", value: "9.0 mm (+0.3) / 9.5 mm (+0.5)" },
            { label: "Coil Outer Dia.", value: "1,250 / 1,350 mm max" },
            { label: "Coil Inner Dia.", value: "750 / 540 mm (+50 mm)" },
            { label: "Coil Height", value: "900 / 850 mm" },
            { label: "Coil Weight", value: "1,500 / 2,000 kg approx." },
            { label: "Alloy", value: "1xxx series" },
            { label: "Temper", value: "H12, H14" },
          ]}
        />
        <GalleryPlaceholder />
      </div>
    </CategoryPageLayout>
  );
}
