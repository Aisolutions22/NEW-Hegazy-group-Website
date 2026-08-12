import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { useLanguage } from "@/lib/i18n/language-context";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import {
  MAPS_URL,
  MAPS_EMBED_URL,
  ADDRESS_FULL,
  LEGAL_NAME,
} from "@/lib/site/contact";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Hegazy Group | Alexandria & Cairo, Egypt" },
      {
        name: "description",
        content:
          "Head office in Alexandria, Egypt. Fulfillment regions: Cairo and Alexandria. Find us on the map and get directions.",
      },
      { property: "og:title", content: "Locations — Hegazy Group" },
      {
        property: "og:description",
        content:
          "Head office in Alexandria, Egypt. Fulfillment regions: Cairo and Alexandria.",
      },
      { property: "og:url", content: "https://hegazy-group.lovable.app/locations" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/locations" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Hegazy Group",
          legalName: LEGAL_NAME,
          url: "https://hegazy-group.lovable.app/locations",
          hasMap: MAPS_URL,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Alexandria",
            addressCountry: "EG",
          },
          areaServed: [
            { "@type": "Country", name: "Egypt" },
            { "@type": "Place", name: "Middle East" },
          ],
        }),
      },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  const { t } = useLanguage();
  const l = t.locationsPage;

  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs items={[{ label: t.footer.company.locations }]} />
        <Section
          as="header"
          className="bg-graphite-900 text-white"
          aria-label={l.eyebrow}
        >
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                {l.eyebrow}
              </div>
              <h1 className="text-5xl leading-tight text-white">{l.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {l.lead}
              </p>
            </div>
          </Grid>
        </Section>

        {/* Address + hours */}
        <Section aria-label={l.eyebrow}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-8 flex items-start gap-4 border-t border-graphite-900 pt-6">
              <span className="text-graphite-800">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block text-caption text-steel-400" data-spec>
                  {l.headOfficeLabel}
                </span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-meta leading-relaxed text-graphite-900 underline-offset-4 hover:text-accent-700 hover:underline"
                >
                  {ADDRESS_FULL}
                </a>
              </span>
            </div>
            <div className="col-span-4 sm:col-span-4 lg:col-span-4 flex items-start gap-4 border-t border-graphite-900 pt-6">
              <span className="text-graphite-800">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block text-caption text-steel-400" data-spec>
                  {l.hoursLabel}
                </span>
                <span className="mt-1 block text-meta leading-relaxed text-graphite-900">
                  {l.hours}
                </span>
              </span>
            </div>
          </Grid>

          {/* Fulfillment regions */}
          <Grid className="mt-10">
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="mb-3 font-mono text-micro uppercase tracking-caps text-steel-400">
                {l.fulfillmentLabel}
              </div>
              <p className="text-meta leading-relaxed text-graphite-900">
                {l.fulfillmentBody}
              </p>
            </div>
          </Grid>

          {/* Embedded map */}
          <Grid className="mt-10">
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="overflow-hidden rounded-md border border-steel-200 bg-white">
                <iframe
                  src={MAPS_EMBED_URL}
                  title={l.addressLabel}
                  width="100%"
                  height="400"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-graphite-900 px-5 text-meta font-medium text-white hover:bg-graphite-800"
                >
                  {l.directions}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-steel-200 bg-white px-5 text-meta font-medium text-graphite-900 hover:border-graphite-900"
                >
                  {l.viewContact}
                </a>
              </div>
            </div>
          </Grid>
        </Section>
      </main>
      <MobileStickyQuoteBar variant="contact" />
      <SiteFooter />
    </>
  );
}
