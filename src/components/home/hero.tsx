import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";
import { ArrowRight } from "lucide-react";
import heroJpg from "@/assets/hero-warehouse.jpg";
import heroWebp1280 from "@/assets/hero-warehouse-1280.webp";
import heroWebp1920 from "@/assets/hero-warehouse-1920.webp";
import heroAvif1280 from "@/assets/hero-warehouse-1280.avif";
import heroAvif1920 from "@/assets/hero-warehouse-1920.avif";
import { Section } from "@/components/layout/section";

/**
 * Single-column, full-width hero. Background photograph remains for atmosphere;
 * the right-side card was removed in favor of a centered content stack.
 */
export function HomeHero() {
  const { t } = useLanguage();
  return (
    <section
      className="relative isolate -mt-[calc(2.5rem+5rem)] flex w-full items-center overflow-hidden bg-graphite-900 text-white"
      style={{ minHeight: "min(100svh, 820px)" }}
    >
      <picture>
        <source type="image/avif" srcSet={`${heroAvif1280} 1280w, ${heroAvif1920} 1920w`} sizes="100vw" />
        <source type="image/webp" srcSet={`${heroWebp1280} 1280w, ${heroWebp1920} 1920w`} sizes="100vw" />
        <img
          src={heroJpg}
          alt="Aluminum sheets, coils, and profiles stacked in a bonded distribution warehouse."
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-10 h-full w-full object-cover [object-position:50%_55%]"
          data-hero-img
        />
      </picture>

      {/* Even scrim for centered text readability across the full width. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,24,28,0.78) 0%, rgba(20,24,28,0.72) 55%, rgba(20,24,28,0.85) 100%)",
        }}
      />

      <Section
        as="div"
        flush
        className="w-full"
        style={{
          paddingBlockStart: "calc(2.5rem + 5rem)",
          paddingBlockEnd: "clamp(24px, 4vw, 48px)",
        }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-3 font-mono text-caption uppercase tracking-caps text-white/75">
            <span className="inline-block h-px w-8 bg-white/50" aria-hidden="true" />
            {t.hero.eyebrow}
            <span className="inline-block h-px w-8 bg-white/50" aria-hidden="true" />
          </div>
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href="/quote" className="inline-flex items-center gap-2">
                {t.requestQuote}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href="/products">{t.exploreProducts}</a>
            </Button>
          </div>
        </div>
      </Section>
    </section>
  );
}

export { heroAvif1920 as heroLcpPreloadHref };
