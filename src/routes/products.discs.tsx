import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
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

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.discs} intro={t.products.discsDesc}>
      <GalleryPlaceholder />
    </CategoryPageLayout>
  );
}
