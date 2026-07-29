import { Section } from "@/components/layout/section";
import { useLanguage } from "@/lib/i18n/language-context";

export function StatsBar() {
  const { t } = useLanguage();
  return (
    <Section
      as="section"
      className="bg-white border-y border-steel-200"
      aria-label={t.stats.heading}
      py="clamp(48px, 6vw, 80px)"
    >
      <ul className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0 md:divide-x md:divide-steel-200 rtl:md:divide-x-reverse">
        {t.stats.items.map((s) => (
          <li
            key={s.label}
            className="flex flex-col items-center text-center md:px-6"
          >
            <div className="text-5xl font-semibold tracking-tight text-graphite-900 md:text-6xl" data-spec>
              {s.value}
            </div>
            <div className="mt-3 font-mono text-micro uppercase tracking-caps text-steel-600">
              {s.label}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
