import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
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

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.wireRods} intro={t.products.wireRodsDesc}>
      <GalleryPlaceholder />
    </CategoryPageLayout>
  );
}
