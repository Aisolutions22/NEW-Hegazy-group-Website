import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FinalCta } from "@/components/home/final-cta";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { useLanguage } from "@/lib/i18n/language-context";
import { INDUSTRIES, slugToIndustryKey, type IndustryKey } from "@/lib/catalog/categories";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/industries/$sector")({
  loader: ({ params }) => {
    const key = slugToIndustryKey(params.sector);
    if (!key) throw notFound();
    return { key, slug: params.sector };
  },
  head: ({ params }) => ({
    meta: [
      { title: `${cap(params.sector)} — Industries | Hegazy Group` },
      {
        name: "description",
        content: `Aluminum supply for the ${params.sector.replace(/-/g, " ")} sector — alloys, forms, and applications.`,
      },
    ],
  }),
  component: SectorPage,
  errorComponent: () => <SectorNotFound />,
  notFoundComponent: () => <SectorNotFound />,
});

function cap(s: string) {
  return s.split("-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
}

function SectorPage() {
  const { key } = Route.useLoaderData() as { key: IndustryKey; slug: string };
  const { t } = useLanguage();
  const data = t.industriesPage[key];
  const title = t.industries[key];
  const desc = t.industries[`${key}Desc` as keyof typeof t.industries];

  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs
          items={[
            { label: t.nav.industries, href: "/industries" },
            { label: title },
          ]}
        />
        <Section
          as="header"
          className="bg-graphite-900 text-white"
          aria-label={title}
        >
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 text-legal text-white/70 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                {t.sectorPage.back}
              </Link>
              <h1 className="mt-6 text-5xl leading-tight text-white">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {desc}
              </p>
            </div>
          </Grid>
        </Section>

        <Section aria-label={title}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-6">
              <div className="mb-3 font-mono text-micro uppercase tracking-caps text-steel-400">
                {t.industriesPage.applications}
              </div>
              <ul className="divide-y divide-steel-200 border-t border-graphite-900">
                {data.applications.map((a: string) => (
                  <li key={a} className="py-4 text-meta text-graphite-900">
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-4 sm:col-span-4 lg:col-span-3">
              <div className="mb-3 font-mono text-micro uppercase tracking-caps text-steel-400">
                {t.industriesPage.commonForms}
              </div>
              <ul className="space-y-2 border-t border-graphite-900 pt-4">
                {data.forms.map((f: string) => (
                  <li key={f} className="text-meta text-graphite-900">
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-4 sm:col-span-4 lg:col-span-3">
              <div className="mb-3 font-mono text-micro uppercase tracking-caps text-steel-400">
                {t.industriesPage.commonAlloys}
              </div>
              <ul className="flex flex-wrap gap-2 border-t border-graphite-900 pt-4">
                {data.alloys.map((a: string) => (
                  <li
                    key={a}
                    className="rounded-md border border-steel-200 bg-white px-2 py-1 font-mono text-micro text-graphite-900"
                    data-spec
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Grid>

          <div className="mt-16">
            <div className="mb-4 font-mono text-micro uppercase tracking-caps text-steel-400">
              {t.industriesPage.relevantProducts}
            </div>
            <ul className="flex flex-wrap gap-2 border-t border-graphite-900 pt-6">
              {INDUSTRY_PRODUCTS[key].map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="inline-flex items-center gap-2 rounded-md border border-steel-200 bg-white px-3 py-2 text-meta text-graphite-900 transition-colors hover:border-graphite-900"
                  >
                    {p.label}
                    <ArrowRight className="h-3.5 w-3.5 text-steel-400 rtl:rotate-180" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>


        <FinalCta />
      </main>
      <MobileStickyQuoteBar />
      <SiteFooter />
    </>
  );
}

function SectorNotFound() {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Section aria-label={t.sectorPage.notFound}>
          <h1 className="text-3xl text-graphite-900">{t.sectorPage.notFound}</h1>
          <Link
            to="/industries"
            className="mt-6 inline-flex items-center gap-2 text-meta font-semibold text-accent-700"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            {t.sectorPage.back}
          </Link>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}

// Ensure all industries have data present (compile-time exhaustiveness check)
const _exhaustive: Record<IndustryKey, true> = {
  metalManufacturing: true,
  hvacHeatTransfer: true,
  construction: true,
  electricalComponents: true,
  heavyIndustry: true,
  automotive: true,
  foodIndustry: true,
  embossedSheetsInsulation: true,
  cookwareDiscBuyers: true,
};
void _exhaustive;
void INDUSTRIES;
