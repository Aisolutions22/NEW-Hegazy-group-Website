import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
import { useLanguage } from "@/lib/i18n/language-context";

export const Route = createFileRoute("/products/sheets-coils")({
  head: () => ({
    meta: [
      { title: "Aluminum Sheets & Coils — Hegazy Group" },
      { name: "description", content: "Aluminum sheets and coils in mill, coated, and embossed finishes." },
    ],
  }),
  component: Page,
});

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.sheetsCoils} intro={t.products.sheetsCoilsDesc}>
      <GalleryPlaceholder />
    </CategoryPageLayout>
  );
}
