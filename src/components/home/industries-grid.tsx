import { Link } from "@tanstack/react-router";
import { Section, Grid } from "@/components/layout/section";
import { useLanguage } from "@/lib/i18n/language-context";
import { INDUSTRIES } from "@/lib/catalog/categories";

export function IndustriesGrid() {
  const { t } = useLanguage();

  return (
    <Section
      className="bg-white border-y border-steel-200"
      aria-label={t.industriesSection.heading}
    >
      <div className="mb-12 max-w-2xl">
        <h2 className="mb-3 font-mono text-micro uppercase tracking-caps text-steel-400">
          {t.industriesSection.heading}
        </h2>
        <p className="text-lg leading-relaxed text-steel-600">
          {t.industriesSection.subheading}
        </p>
      </div>

      <Grid>
        {INDUSTRIES.map((ind, i) => (
          <Link
            key={ind.slug}
            to={`/industries/${ind.slug}` as string}
            className="group card-industry col-span-4 flex flex-col justify-between rounded-md border border-steel-200 bg-offwhite-50 p-6 transition-colors hover:border-graphite-900 sm:col-span-4 lg:col-span-4"
          >
            <div className="flex items-start justify-between text-graphite-800">
              <span
                className="font-mono text-micro text-steel-400"
                data-spec
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-graphite-900">
                {t.industries[ind.titleKey]}
              </h3>
              <p className="mt-2 text-small leading-relaxed text-steel-600">
                {t.industries[ind.descKey]}
              </p>
            </div>
          </Link>
        ))}
      </Grid>
    </Section>
  );
}
