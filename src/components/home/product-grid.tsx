import { Link } from "@tanstack/react-router";
import { Section, Grid } from "@/components/layout/section";
import { useLanguage } from "@/lib/i18n/language-context";
import { PRODUCT_CATEGORIES } from "@/lib/catalog/categories";
import { ArrowRight } from "lucide-react";

export function ProductCategoryGrid() {
  const { t } = useLanguage();

  return (
    <Section aria-label={t.categories.heading}>
      <div className="mb-12 max-w-2xl">
        <h2 className="mb-3 font-mono text-micro uppercase tracking-caps text-steel-400">
          {t.categories.heading}
        </h2>
        <h2 className="text-3xl leading-tight">{t.categories.subheading}</h2>
      </div>

      <Grid className="overflow-hidden rounded-md border border-steel-200 bg-steel-200 !gap-px">
        {PRODUCT_CATEGORIES.map((c, i) => (
          <Link
            key={c.slug}
            to={`/products/${c.slug}` as string}
            className="group card-product col-span-4 flex flex-col justify-between bg-white p-6 transition-colors hover:bg-offwhite-50 sm:col-span-4 lg:col-span-3"
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
              {t.categories.explore}
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
            </div>
          </Link>
        ))}
      </Grid>
    </Section>
  );
}
