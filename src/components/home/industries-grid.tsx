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
            className="group card-industry relative col-span-4 flex flex-col justify-end overflow-hidden rounded-md border border-steel-200 bg-graphite-900 p-6 transition-colors hover:border-graphite-900 sm:col-span-4 lg:col-span-4"
            style={{ aspectRatio: "4 / 3" }}
          >
            <img
              src={ind.image}
              alt={`${t.industries[ind.titleKey]} — aluminum applications`}
              loading="lazy"
              decoding="async"
              width={1200}
              height={900}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/65 to-graphite-900/10"
            />

            <div className="relative z-10">
              <span className="font-mono text-micro text-white/60" data-spec>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {t.industries[ind.titleKey]}
              </h3>
              <p className="mt-2 text-small leading-relaxed text-white/80">
                {t.industries[ind.descKey]}
              </p>
            </div>
          </Link>
        ))}
      </Grid>
    </Section>
  );
}
