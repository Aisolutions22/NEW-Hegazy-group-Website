import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
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

function PipesPage() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.pipes} intro={t.products.pipesDesc}>
      <GalleryPlaceholder />
    </CategoryPageLayout>
  );
}
