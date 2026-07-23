import { createFileRoute } from "@tanstack/react-router";
import { CategoryPageLayout, GalleryPlaceholder } from "@/components/products/category-page-layout";
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

function Page() {
  const { t } = useLanguage();
  return (
    <CategoryPageLayout title={t.products.profilesBars} intro={t.products.profilesBarsDesc}>
      <GalleryPlaceholder />
    </CategoryPageLayout>
  );
}
