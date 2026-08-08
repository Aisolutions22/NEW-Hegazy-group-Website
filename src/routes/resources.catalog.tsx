import { createFileRoute } from "@tanstack/react-router";
import { ResourceDetailPage } from "@/components/resources/resource-detail";

export const Route = createFileRoute("/resources/catalog")({
  head: () => ({
    meta: [
      { title: "Catalog — Hegazy Group" },
      {
        name: "description",
        content:
          "Aluminum product catalog: full product range, alloys, tempers, dimensions, tolerances, and applicable standards.",
      },
      { property: "og:title", content: "Catalog — Hegazy Group" },
      {
        property: "og:description",
        content:
          "Product catalog contents: alloys, formats, tolerances, and standards coverage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ResourceDetailPage resourceKey="catalog" />,
});
