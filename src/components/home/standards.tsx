import { Section } from "@/components/layout/section";
import { useLanguage } from "@/lib/i18n/language-context";

export function StandardsCompliance() {
  const { t } = useLanguage();
  return (
    <Section as="section" className="bg-offwhite-50" aria-label={t.standards.heading}>
      <div className="mb-12 max-w-2xl">
        <h2 className="mb-3 font-mono text-micro uppercase tracking-caps text-steel-400">
          {t.standards.eyebrow}
        </h2>
        <h2 className="text-3xl leading-tight text-graphite-900">
          {t.standards.heading}
        </h2>
        <p className="mt-4 text-meta leading-relaxed text-steel-600">
          {t.standards.body}
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.standards.items.map((item) => (
          <li
            key={item.acronym}
            className="flex flex-col rounded-md border border-steel-200 bg-white p-6"
          >
            <div className="font-mono text-4xl font-bold tracking-tight text-graphite-900">
              {item.acronym}
            </div>
            <div className="mt-2 text-small font-medium text-graphite-900">
              {item.name}
            </div>
            <p className="mt-3 text-meta leading-relaxed text-steel-600">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
