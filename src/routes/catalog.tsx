import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { CatalogPdfButton } from "@/components/resources/catalog-pdf-button";
import { useLanguage } from "@/lib/i18n/language-context";

const SITE_URL = "https://hegazy-group.lovable.app";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Catalog — Hegazy Group" },
      { name: "description", content: "Consolidated aluminum product catalog." },
      { property: "og:title", content: "Catalog — Hegazy Group" },
      { property: "og:description", content: "Consolidated aluminum product catalog." },
      { name: "twitter:title", content: "Catalog — Hegazy Group" },
      { name: "twitter:description", content: "Consolidated aluminum product catalog." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: `${SITE_URL}/catalog` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/catalog` }],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Section as="header" className="bg-graphite-900 text-white" aria-label={t.products.catalog}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                {t.products.catalog}
              </div>
              <h1 className="text-5xl leading-tight text-white">
                {t.resourcesPage.catalog.title}
              </h1>
            </div>
          </Grid>
        </Section>

        <Section aria-label={t.resourcesLibrary.download}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-8">
              <p className="text-lg leading-relaxed text-steel-600">
                {t.resourcesPage.catalog.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CatalogPdfButton label={t.resourcesLibrary.downloadCatalog} />
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-steel-200 bg-white px-5 text-meta font-medium text-graphite-900 hover:border-graphite-900"
                >
                  {t.common.contactUs}
                </Link>
              </div>
            </div>
          </Grid>
        </Section>
      </main>
      <MobileStickyQuoteBar />
      <SiteFooter />
    </>
  );
}
