import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
import { SpecTable } from "@/components/products/spec-table";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/discs")({
  head: () => ({
    meta: [
      { title: "Aluminum Discs — Hegazy Group" },
      { name: "description", content: "Aluminum discs for cookware, lighting, and deep-draw applications." },
    ],
  }),
  component: Page,
});

const INTRO =
  "Premium aluminum circles ideal for cookware, rice cookers, lamps, and traffic signs. Custom specifications available for diameter, thickness, and alloy to fit any application.";

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.discs} intro={INTRO}>
      <div className="grid gap-12 lg:grid-cols-2">
        <SpecTable
          caption="Specifications"
          rows={[
            { label: "Thickness", value: "0.8 – 3.5 mm" },
            { label: "Diameter Range", value: "170 – 540 mm" },
            { label: "Alloys", value: "1xxx, 3xxx, 5xxx" },
            { label: "Temper", value: "O, H1x, H2x" },
            { label: "Surface", value: "Mill, Polished, Anodized" },
          ]}
        />
        <GalleryPlaceholder />
      </div>
    </CategoryPageLayout>
  );
}
