import { createFileRoute } from "@tanstack/react-router";
import { stubRouteOptions } from "@/lib/routes/stub-route";

export const Route = createFileRoute("/locations")(
  stubRouteOptions({
    path: "/locations",
    metaTitle: "Locations — Hegazy Group",
    metaDescription: "Head office in Alexandria, Egypt. Fulfillment regions: Cairo and Alexandria.",
    copy: (t) => ({
      eyebrow: t.footer.company.locations,
      title: t.contactPage.locations.title,
      body: t.contactPage.locations.body,
    }),
  }),
);
