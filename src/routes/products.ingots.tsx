import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
import { SpecTable } from "@/components/products/spec-table";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/ingots")({
  head: () => ({
    meta: [
      { title: "Aluminum Ingots — Hegazy Group" },
      { name: "description", content: "Primary and secondary aluminum ingots for foundries and remelt operations." },
    ],
  }),
  component: Page,
});

const INTRO =
  "Primary aluminum ingots and T-bars from certified cast houses. Available in high-purity grades and foundry alloys, bundled for efficient handling and transport.";

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.ingots} intro={INTRO}>
      <div className="grid gap-12 lg:grid-cols-2">
        <SpecTable
          caption="Specifications"
          rows={[
            { label: "Ingots 99.7% & 99.8%", value: "18 – 22 kg, 44/bundle, 1 ton max" },
            { label: "Foundry Ingots", value: "8 – 10 kg, 89/bundle, 1 ton max" },
            { label: "T-Bars", value: "280 × 810 mm, up to 1 m, ~1,000 kg" },
            { label: "Alloys", value: "99.7%, 99.8%, 99.7 EC, SR/SB modified" },
            { label: "Packaging", value: "Bundled / Palletized" },
          ]}
        />
        <GalleryPlaceholder />
      </div>
    </CategoryPageLayout>
  );
}
