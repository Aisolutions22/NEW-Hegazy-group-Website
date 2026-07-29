import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export function FinalCta() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-graphite-900 text-white" style={{ paddingBlock: "var(--section-py)" }}>
      <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl leading-tight text-white">
            {t.finalCta.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            {t.finalCta.body}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button asChild size="lg" variant="secondary" className="bg-white text-graphite-900 hover:bg-white/90">
            <a href="/quote" className="inline-flex items-center justify-center gap-2">
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
            <a href="tel:+000000000" className="inline-flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {t.phone}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a
              href="https://wa.me/000000000"
              className="inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {t.whatsapp}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
