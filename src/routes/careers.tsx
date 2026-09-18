import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { useLanguage } from "@/lib/i18n/language-context";

const SITE_URL = "https://hegazy-group.lovable.app";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Hegazy Group" },
      {
        name: "description",
        content:
          "Careers at Hegazy Group — join our aluminum supply, sales, logistics, and technical teams serving industry across Egypt and the region.",
      },
      { property: "og:title", content: "Careers — Hegazy Group" },
      {
        property: "og:description",
        content:
          "We're always looking for talented people to join our team. Get in touch to learn about current opportunities or to send us your CV.",
      },
      { property: "og:url", content: `${SITE_URL}/careers` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/careers` }],
  }),
  component: CareersPage,
});

function CareersPage() {
  const { t } = useLanguage();
  const c = t.careers;

  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Section
          as="header"
          className="bg-graphite-900 text-white"
          aria-label={c.eyebrow}
        >
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                {c.eyebrow}
              </div>
              <h1 className="text-5xl leading-tight text-white">{c.title}</h1>
            </div>
          </Grid>
        </Section>

        <Section aria-label={c.eyebrow}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-8">
              <p className="text-lg leading-relaxed text-steel-600">{c.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-graphite-900 px-5 text-meta font-medium text-white hover:bg-graphite-800"
                >
                  {c.contact}
                </Link>
                <Link
                  to="/"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-steel-200 bg-white px-5 text-meta font-medium text-graphite-900 hover:border-graphite-900"
                >
                  {t.common.backHome}
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
