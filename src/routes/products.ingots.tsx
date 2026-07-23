import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
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

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.ingots} intro={t.products.ingotsDesc}>
      <GalleryPlaceholder />
    </CategoryPageLayout>
  );
}
