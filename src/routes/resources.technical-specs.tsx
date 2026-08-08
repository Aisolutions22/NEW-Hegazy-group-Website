import { createFileRoute } from "@tanstack/react-router";
import { ResourceDetailPage } from "@/components/resources/resource-detail";

export const Route = createFileRoute("/resources/technical-specs")({
  head: () => ({
    meta: [
      { title: "Technical Specs — Hegazy Group" },
      {
        name: "description",
        content:
          "Aluminum technical specifications: chemical composition, mechanical properties, tolerances, tempers, and standards cross-reference.",
      },
      { property: "og:title", content: "Technical Specs — Hegazy Group" },
      {
        property: "og:description",
        content:
          "Composition ranges, mechanical properties, tolerances, and ASTM/EN/ISO/AA cross-reference.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
          { property: "og:url", content: "https://hegazy-group.lovable.app/resources/technical-specs" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/resources/technical-specs" }],
  }),
  component: () => <ResourceDetailPage resourceKey="specs" />,
});
