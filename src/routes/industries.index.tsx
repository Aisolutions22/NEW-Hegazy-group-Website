import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FinalCta } from "@/components/home/final-cta";
import { useLanguage } from "@/lib/i18n/language-context";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { INDUSTRIES } from "@/lib/catalog/categories";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries — Hegazy Group | Aluminum Supply & Distribution" },
      {
        name: "description",
        content:
          "Aluminum supply across nine sectors: metal manufacturing, HVAC, construction, electrical, heavy industry, automotive, food, insulation, and cookware.",
      },
      { property: "og:title", content: "Industries — Hegazy Group" },
      {
        property: "og:description",
        content:
          "Sector-matched alloys, forms, and finishes for contractors, fabricators, and OEMs.",
      },
          { property: "og:url", content: "https://hegazy-group.lovable.app/industries/" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/industries/" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs items={[{ label: t.nav.industries }]} />
        <Section
          as="header"
          className="bg-graphite-900 text-white"
          aria-label={t.industriesPage.eyebrow}
        >
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                {t.industriesPage.eyebrow}
              </div>
              <h1 className="text-5xl leading-tight text-white">
                {t.industriesPage.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {t.industriesPage.lead}
              </p>
            </div>
          </Grid>
        </Section>

        <Section aria-label={t.industriesPage.title}>
          <Grid>
            {INDUSTRIES.map((ind, i) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}` as string}
                className="group col-span-4 flex flex-col justify-between rounded-md border border-steel-200 bg-white p-6 transition-colors hover:border-graphite-900 sm:col-span-4 lg:col-span-4"
              >
                <div>
                  <span
                    className="font-mono text-micro text-steel-400"
                    data-spec
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-6 text-2xl leading-tight text-graphite-900">
                    {t.industries[ind.titleKey]}
                  </h2>
                  <p className="mt-3 text-small leading-relaxed text-steel-600">
                    {t.industries[ind.descKey]}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-legal font-semibold text-accent-700 group-hover:text-accent-600">
                  {t.industriesPage.viewIndustry}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
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
