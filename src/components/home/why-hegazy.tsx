import { Section } from "@/components/layout/section";
import { useLanguage } from "@/lib/i18n/language-context";

export function WhyHegazy() {
  const { t } = useLanguage();
  return (
    <Section aria-label={t.why.heading}>
      <div className="mb-12 max-w-2xl">
        <div className="mb-3 font-mono text-micro uppercase tracking-caps text-steel-400">
          {t.why.heading}
        </div>
        <h2 className="text-3xl leading-tight">
          {t.why.subheading}
        </h2>
      </div>

      {/* 3-2 asymmetric layout on desktop: 3 cards on row 1, 2 cards on row 2.
          Using 6-column grid so 3 items span 2 cols (=6) and 2 items span 3
          cols (=6) with a natural centering. Collapses to 2 on tablet, 1 on
          mobile. */}
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
        {t.why.items.map((item, i) => {
          const isSecondRow = i >= 3;
          return (
            <li
              key={item.title}
              className={
                "border-t border-graphite-900 pt-6 " +
                (isSecondRow ? "lg:col-span-3" : "lg:col-span-2")
              }
            >
              <div className="text-caption text-steel-400" data-spec>
                0{i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-graphite-900">{item.title}</h3>
              <p className="mt-3 text-meta leading-relaxed text-steel-600">{item.body}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
