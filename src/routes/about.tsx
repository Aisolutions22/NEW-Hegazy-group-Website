import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { useLanguage } from "@/lib/i18n/language-context";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PRODUCT_LINKS = [
  { label: "aluminum pipes", href: "/products/pipes" },
  { label: "sheets & coils", href: "/products/sheets-coils" },
  { label: "discs", href: "/products/discs" },
  { label: "ingots", href: "/products/ingots" },
  { label: "billets", href: "/products/billets" },
  { label: "profiles & bars", href: "/products/profiles-bars" },
  { label: "wire rods", href: "/products/wire-rods" },
] as const;

const INDUSTRY_LINKS = [
  { label: "metal manufacturing", href: "/industries/metal-manufacturing" },
  { label: "construction", href: "/industries/construction" },
  { label: "automotive", href: "/industries/automotive" },
  { label: "electrical", href: "/industries/electrical-components" },
] as const;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hegazy Group | Aluminum Supply & Distribution" },
      {
        name: "description",
        content:
          "Hegazy Group distributes aluminum pipes, sheets, coils, discs, ingots, billets, profiles, bars, and wire rods across Egypt and the region.",
      },
      { property: "og:title", content: "About — Hegazy Group" },
      {
        property: "og:description",
        content:
          "A specialist aluminum distributor: sourcing, stocking, technical support, and regional logistics for construction, manufacturing, transport, and industry.",
      },
          { property: "og:url", content: "https://hegazy-group.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://hegazy-group.lovable.app/about" }],
  }),
  component: AboutPage,
});

function InlineProductLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      to={href}
      className="border-b border-steel-400 text-graphite-900 transition-colors hover:border-graphite-900 hover:text-steel-600"
    >
      {label}
    </Link>
  );
}

function MainTextParagraphs() {
  const { t } = useLanguage();
  const mt = t.about.mainText;
  const productRegex = /(aluminum pipes|sheets & coils|discs|ingots|billets|profiles & bars|wire rods)/;
  const industryRegex = /(metal manufacturing|construction|automotive|electrical)/;
  return (
    <div className="max-w-[65ch] text-lg leading-relaxed text-steel-600">
      <p>{mt.p1}</p>
      <p className="mt-6">{mt.p2}</p>
      <p className="mt-6">
        {mt.p3.split(new RegExp(`${productRegex.source}|${industryRegex.source}`)).map((part, i) => {
          const productMatch = PRODUCT_LINKS.find((p) => p.label === part);
          const industryMatch = INDUSTRY_LINKS.find((ind) => ind.label === part);
          if (productMatch) return <InlineProductLink key={i} {...productMatch} />;
          if (industryMatch) return <InlineProductLink key={i} {...industryMatch} />;
          return <span key={i}>{part}</span>;
        })}
      </p>
    </div>
  );
}

function WhyWorkWithUs() {
  const { t } = useLanguage();
  return (
    <Section className="bg-offwhite-50 border-y border-steel-200" aria-label={t.about.whyHeading}>
      <div className="mb-10 max-w-2xl">
        <div className="mb-3 font-mono text-micro uppercase tracking-caps text-steel-400">
          {t.about.whyHeading}
        </div>
        <h2 className="text-3xl leading-tight text-graphite-900">{t.about.whyHeading}</h2>
      </div>
      <ul className="grid grid-cols-1 gap-0 divide-y divide-steel-200 border-t border-graphite-900 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
        {t.about.why.map((item, i) => (
          <li
            key={item.title}
            className="flex flex-col gap-3 py-6 sm:px-4 lg:py-0 lg:px-6 lg:first:pl-0 lg:last:pr-0"
          >
            <div className="text-caption font-mono text-steel-400">0{i + 1}</div>
            <div>
              <h3 className="text-lg font-semibold text-graphite-900">{item.title}</h3>
              <p className="mt-1 text-meta leading-relaxed text-steel-600">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function AboutCta() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-graphite-900 text-white" style={{ paddingBlock: "var(--section-py)" }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl leading-tight text-white">{t.about.cta.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">{t.about.cta.body}</p>
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button asChild size="lg" variant="secondary" className="bg-white text-graphite-900 hover:bg-white/90">
            <Link to="/quote" className="inline-flex items-center justify-center gap-2">
              {t.about.cta.quote}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/contact" className="inline-flex items-center justify-center gap-2">
              {t.about.cta.contact}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs items={[{ label: t.nav.about }]} />
        {/* Page hero */}
        <Section as="header" className="bg-graphite-900 text-white" aria-label={t.about.eyebrow}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                {t.about.eyebrow}
              </div>
              <h1 className="text-5xl leading-tight text-white">{t.about.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {t.about.lead}
              </p>
            </div>
          </Grid>
        </Section>

        {/* Main text */}
        <Section aria-label={t.about.eyebrow}>
          <MainTextParagraphs />
        </Section>

        <WhyWorkWithUs />
        <AboutCta />
      </main>
      <MobileStickyQuoteBar />
      <SiteFooter />
    </>
  );
}
