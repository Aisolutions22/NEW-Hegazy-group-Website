import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FinalCta } from "@/components/home/final-cta";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { getResourceCards } from "@/lib/resources/content";
import { useLanguage } from "@/lib/i18n/language-context";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title: "Resources — Hegazy Group | Catalog, Specs & Guides" },
      {
        name: "description",
        content:
          "Technical information, catalogs, and guides to support aluminum material selection and specification.",
      },
      { property: "og:title", content: "Resources — Hegazy Group" },
      {
        property: "og:description",
        content:
          "Catalog, technical specifications, selection guides, and FAQ for aluminum sourcing and fabrication.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Resources — Hegazy Group" },
      {
        name: "twitter:description",
        content:
          "Catalog, technical specifications, selection guides, and FAQ for aluminum sourcing and fabrication.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const { t } = useLanguage();
  const cards = getResourceCards(t);
  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs items={[{ label: t.nav.resources }]} />
        <Section as="header" className="bg-graphite-900 text-white" aria-label={t.resourcesPage.eyebrow}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                {t.resourcesPage.eyebrow}
              </div>
              <h1 className="text-5xl leading-tight text-white">{t.resourcesPage.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {t.resourcesPage.lead}
              </p>
            </div>
          </Grid>
        </Section>

        <Section aria-label={t.resourcesPage.eyebrow}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-8">
              <p className="max-w-[65ch] text-lg leading-relaxed text-steel-600">
                {t.resourcesLibrary.intro}
              </p>
            </div>
          </Grid>

          <Grid className="mt-12">
            {cards.map((c, i) => (
              <div
                key={c.key}
                className="group col-span-4 sm:col-span-4 lg:col-span-3 flex flex-col rounded-md border border-steel-200 bg-white p-8 transition-colors hover:border-graphite-900"
              >
                <div className="font-mono text-micro uppercase tracking-caps text-steel-400" data-spec>
                  0{i + 1}
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-graphite-900">
                  {c.title}
                </h2>
                <p className="mt-3 text-meta leading-relaxed text-steel-600">
                  {c.body}
                </p>

                <div className="mt-6 border-t border-steel-200 pt-6">
                  <div className="font-mono text-micro uppercase tracking-caps text-steel-400">
                    {c.listHeading}
                  </div>
                  <div className="mt-4 flex-1 space-y-4">
                    {c.groups.map((g, gi) => (
                      <div key={g.label ?? gi}>
                        {g.label && (
                          <div className="mb-1.5 text-meta font-semibold text-graphite-900">
                            {g.label}
                          </div>
                        )}
                        <ul className="space-y-1.5">
                          {g.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-meta leading-relaxed text-steel-600"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel-400"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  {c.meta && (
                    <div className="font-mono text-micro uppercase tracking-caps text-steel-400">
                      {c.meta}
                    </div>
                  )}
                  <Link
                    to={c.href}
                    className="mt-4 inline-flex items-center gap-2 text-meta font-semibold text-accent-700 hover:text-accent-600"
                  >
                    {c.cta}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </Grid>
        </Section>

        <FinalCta />
      </main>
      <MobileStickyQuoteBar />
      <SiteFooter />
    </>
  );
}
