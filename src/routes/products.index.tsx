import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { useLanguage } from "@/lib/i18n/language-context";
import { PRODUCT_CATEGORIES } from "@/lib/catalog/categories";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Hegazy Group | Aluminum Catalog" },
      {
        name: "description",
        content:
          "Seven aluminum product families: pipes, sheets & coils, discs, ingots, billets, profiles & bars, and wire rods — stocked and available on release.",
      },
      { property: "og:title", content: "Products — Hegazy Group" },
      {
        property: "og:description",
        content:
          "Full aluminum catalog: pipes, sheets & coils, discs, ingots, billets, profiles & bars, wire rods.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t } = useLanguage();
  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs items={[{ label: t.nav.products }]} />
        <Section
          as="header"
          className="bg-graphite-900 text-white"
          aria-label={t.productsPage.eyebrow}
        >
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                {t.productsPage.eyebrow}
              </div>
              <h1 className="text-5xl leading-tight text-white">
                {t.productsPage.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {t.productsPage.lead}
              </p>
            </div>
          </Grid>
        </Section>

        <Section aria-label={t.productsPage.title}>
          <h2 className="sr-only">{t.productsPage.title}</h2>
          <Grid className="overflow-hidden rounded-md border border-steel-200 bg-steel-200 !gap-px">
            {PRODUCT_CATEGORIES.map((c, i) => (
              <Link
                key={c.slug}
                to={`/products/${c.slug}` as string}
                className="group col-span-4 flex flex-col justify-between bg-white p-6 transition-colors hover:bg-offwhite-50 sm:col-span-4 lg:col-span-3"
              >
                <div>
                  <div className="text-caption text-steel-400" data-spec>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-graphite-900">
                    {t.products[c.titleKey]}
                  </h3>
                  <p className="mt-3 text-small leading-relaxed text-steel-600">
                    {t.products[c.descKey]}
                  </p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-legal font-semibold text-accent-700 group-hover:text-accent-600">
                  {t.productsPage.viewProduct}
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </Grid>
        </Section>
      </main>
      <MobileStickyQuoteBar />
      <SiteFooter />
    </>
  );
}
