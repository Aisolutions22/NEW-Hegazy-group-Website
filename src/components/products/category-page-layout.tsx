import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { FinalCta } from "@/components/home/final-cta";
import { useLanguage } from "@/lib/i18n/language-context";

export function CategoryPageLayout({
  title,
  intro,
  image,
  imageAlt,
  children,
}: {
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
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

        <Section
          as="header"
          py="56px"
          className="bg-graphite-900 text-white"
          aria-label={title}
        >
          <Grid className="items-center">
            <div className={image ? "col-span-4 sm:col-span-8 lg:col-span-7" : "col-span-4 sm:col-span-8 lg:col-span-9"}>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-legal text-white/70 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                {t.categoryPage.back}
              </Link>
              <div className="mt-6 font-mono text-micro uppercase tracking-caps text-white/60">
                {t.productsPage.eyebrow}
              </div>
              <h1 className="mt-3 text-5xl leading-tight text-white">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
                {intro}
              </p>
            </div>

            {image && (
              <div className="col-span-4 sm:col-span-8 lg:col-span-5">
                <div className="overflow-hidden rounded-md border border-white/10 bg-graphite-800">
                  <img
                    src={image}
                    alt={imageAlt ?? title}
                    width={800}
                    height={436}
                    loading="eager"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            )}
          </Grid>
        </Section>

        <Section py="56px" aria-label={t.categoryPage.specifications}>
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
