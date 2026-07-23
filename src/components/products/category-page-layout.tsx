import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { FinalCta } from "@/components/home/final-cta";
import { useLanguage } from "@/lib/i18n/language-context";

/**
 * Shared layout for the seven product-family pages. Individual routes pass in
 * the title, intro, and body content (spec tables, sub-category strip, etc.)
 * so the chrome stays consistent while content varies.
 */
export function CategoryPageLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs
          items={[{ label: t.nav.products, href: "/products" }, { label: title }]}
        />

        {/* Page hero */}
        <Section
          as="header"
          className="bg-graphite-900 text-white"
          aria-label={title}
        >
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-legal text-white/70 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                {t.categoryPage.back}
              </Link>
              <div className="mt-8 font-mono text-micro uppercase tracking-caps text-white/60">
                {t.productsPage.eyebrow}
              </div>
              <h1 className="mt-3 text-5xl leading-tight text-white">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {intro}
              </p>
            </div>
          </Grid>
        </Section>

        {/* Body: spec tables, sub-categories, gallery placeholder */}
        <Section aria-label={t.categoryPage.specifications}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              {children}
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

/**
 * A neutral placeholder for the product image / gallery area. Real photography
 * pending from client — until then, show a labelled tile rather than a raw
 * broken-image box.
 */
export function GalleryPlaceholder({ label }: { label?: string }) {
  const { t } = useLanguage();
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-md border border-dashed border-steel-200 bg-offwhite-50 text-center">
      <div className="px-4">
        <div className="font-mono text-micro uppercase tracking-caps text-steel-400">
          {label ?? t.categoryPage.galleryPending}
        </div>
      </div>
    </div>
  );
}
