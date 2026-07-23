import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
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

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.billets} intro={t.products.billetsDesc}>
      <GalleryPlaceholder />
    </CategoryPageLayout>
  );
}
