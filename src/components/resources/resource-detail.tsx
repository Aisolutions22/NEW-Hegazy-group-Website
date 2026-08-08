import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FinalCta } from "@/components/home/final-cta";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { getResourceCard, type ResourceKey } from "@/lib/resources/content";
import { useLanguage } from "@/lib/i18n/language-context";

/**
 * Detail page for a single resource entry. Real PDFs are pending from the
 * client, so the download slot renders a notice instead of a dead file link.
 */
export function ResourceDetailPage({ resourceKey }: { resourceKey: ResourceKey }) {
  const { t } = useLanguage();
  const card = getResourceCard(t, resourceKey);
  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs
          items={[{ label: t.nav.resources, href: "/resources" }, { label: card.title }]}
        />
        <Section as="header" className="bg-graphite-900 text-white" aria-label={card.title}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                {t.resourcesPage.eyebrow}
              </div>
              <h1 className="text-5xl leading-tight text-white">{card.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {card.body}
              </p>
            </div>
          </Grid>
        </Section>

        <Section aria-label={card.listHeading}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-8">
              <h2 className="text-2xl font-semibold text-graphite-900">
                {card.listHeading}
              </h2>
              <div className="mt-6 space-y-6">
                {card.groups.map((g, i) => (
                  <div key={g.label ?? i}>
                    {g.label && (
                      <div className="mb-2 text-meta font-semibold text-graphite-900">
                        {g.label}
                      </div>
                    )}
                    <ul className="space-y-2">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-meta leading-relaxed text-steel-600"
                        >
                          <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-md border border-steel-200 bg-offwhite-50 p-6">
                <div className="font-mono text-micro uppercase tracking-caps text-steel-400">
                  {t.resourcesLibrary.download}
                </div>
                <p className="mt-2 text-meta leading-relaxed text-steel-600">
                  {t.resourcesLibrary.downloadPending}
                  {card.meta ? ` ${card.meta}` : ""}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    to="/quote"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-graphite-900 px-5 text-meta font-medium text-white hover:bg-graphite-800"
                  >
                    {t.resourcesLibrary.quote}
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-steel-200 bg-white px-5 text-meta font-medium text-graphite-900 hover:border-graphite-900"
                  >
                    {t.resourcesLibrary.contact}
                  </Link>
                </div>
              </div>
            </div>
          </Grid>
        </Section>

        <FinalCta />
      </main>
      <MobileStickyQuoteBar />
      <SiteFooter />
    </>
  );
}
