import { Link } from "@tanstack/react-router";
import { Section, Grid } from "@/components/layout/section";
import { useLanguage } from "@/lib/i18n/language-context";
import { PRODUCT_CATEGORIES } from "@/lib/catalog/categories";
import { ArrowRight } from "lucide-react";

export function ProductCategoryGrid() {
  const { t } = useLanguage();

  return (
    <Section aria-label={t.categories.heading} py="48px">
      <div className="mb-8 max-w-2xl">
        <h2 className="mb-3 font-mono text-micro uppercase tracking-caps text-steel-400">
          {t.categories.heading}
        </h2>
        <h2 className="text-3xl leading-tight">{t.categories.subheading}</h2>
      </div>

      <Grid className="overflow-hidden rounded-md border border-steel-200 bg-steel-200 !gap-px">
        {PRODUCT_CATEGORIES.map((c, i) => {
          const hasImage = Boolean(c.image);
          return (
            <Link
              key={c.slug}
              to={`/products/${c.slug}` as string}
              className={`group card-product relative col-span-4 flex flex-col justify-between overflow-hidden p-6 transition-colors sm:col-span-4 lg:col-span-3 ${
                hasImage
                  ? "bg-graphite-900 text-white"
                  : "bg-white text-graphite-900 hover:bg-offwhite-50"
              }`}
            >
              {c.image && (
                <>
                  <img
                    src={c.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/70 to-graphite-900/25"
                  />
                </>
              )}

              <div className="relative z-10">
                <div
                  className={`text-caption ${hasImage ? "text-white/65" : "text-steel-400"}`}
                  data-spec
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className={`mt-4 text-xl font-semibold ${
                    hasImage ? "text-white" : "text-graphite-900"
                  }`}
                >
                  {t.products[c.titleKey]}
                </h3>
                <p
                  className={`mt-3 text-small leading-relaxed ${
                    hasImage ? "text-white/80" : "text-steel-600"
                  }`}
                >
                  {t.products[c.descKey]}
                </p>
              </div>

              <div
                className={`relative z-10 mt-6 inline-flex items-center gap-2 text-legal font-semibold ${
                  hasImage
                    ? "text-white group-hover:text-white/85"
                    : "text-accent-700 group-hover:text-accent-600"
                }`}
              >
                {t.categories.explore}
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </Link>
          );
        })}
      </Grid>
    </Section>
  );
}
