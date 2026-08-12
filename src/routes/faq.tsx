import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/i18n/language-context";

const SITE_URL = "https://hegazy-group.lovable.app";

type QA = { q: string; a: string };
type FAQSection = { id: string; heading: string; items: QA[] };

const SECTIONS: FAQSection[] = [
  {
    id: "general",
    heading: "General Questions",
    items: [
      {
        q: "What aluminum products do you supply?",
        a: "We supply a range of aluminum products, including sheets, plates, coils, pipes, tubes, profiles, bars, rods, billets, ingots, discs, and wire rods, subject to availability and project requirements.",
      },
      {
        q: "Which aluminum alloys do you supply?",
        a: "Available alloy grades depend on the product form, temper, dimensions, quantity, and supplier availability. Please contact us with your requirements so we can confirm suitable options.",
      },
      {
        q: "Which industries do you serve?",
        a: "We support customers across construction, HVAC, automotive, electrical, food processing, manufacturing, and other industrial applications.",
      },
    ],
  },
  {
    id: "products-specs",
    heading: "Products & Specifications",
    items: [
      {
        q: "What is the difference between an alloy and a temper?",
        a: "The alloy identifies the chemical composition of the aluminum, while the temper describes its mechanical condition and treatment, such as hardness, strength, or heat treatment.",
      },
      {
        q: "Can you supply custom sizes?",
        a: "Custom sizes may be available depending on the product type, alloy, dimensions, quantity, and supplier capabilities. Send us your required specifications for review.",
      },
      {
        q: "Can you provide technical data sheets?",
        a: "Technical information and product documentation may be provided based on the selected product, supplier documentation, and order requirements.",
      },
      {
        q: "What information do you need to prepare a quotation?",
        a: "Please provide the product form, alloy or grade, temper, dimensions, quantity, required finish, delivery location, target delivery date, and target price if required.",
      },
    ],
  },
  {
    id: "quality-docs",
    heading: "Quality & Documentation",
    items: [
      {
        q: "Can you provide mill test certificates?",
        a: "Mill test certificates and other quality documents may be available depending on the product and supplier. Please confirm your documentation requirements when requesting a quotation.",
      },
      {
        q: "Do you support product traceability?",
        a: "Traceability documentation may be available depending on the product source and documentation supplied with the order.",
      },
      {
        q: "Can you support third-party inspection?",
        a: "Third-party inspection can be discussed based on the project requirements, inspection scope, location, and order conditions.",
      },
    ],
  },
  {
    id: "orders-logistics",
    heading: "Orders & Logistics",
    items: [
      {
        q: "What are your typical lead times?",
        a: "Lead times depend on product availability, alloy, dimensions, quantity, documentation requirements, and delivery destination. We confirm the expected lead time with each quotation.",
      },
      {
        q: "Which regions do you serve?",
        a: "Our delivery coverage depends on the product, quantity, destination, shipping terms, and logistics requirements. Contact us with your delivery location for confirmation.",
      },
      {
        q: "Do you support partial shipments?",
        a: "Partial shipments or consolidated shipments may be arranged depending on the order structure, product availability, and logistics plan.",
      },
    ],
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SECTIONS.flatMap((s) =>
    s.items.map((qa) => ({
      "@type": "Question",
      name: qa.q,
      acceptedAnswer: { "@type": "Answer", text: qa.a },
    })),
  ),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Hegazy Group | Aluminum Supply, Specs, Documentation" },
      {
        name: "description",
        content:
          "Frequently asked questions on aluminum products, alloys, specifications, mill test certificates, lead times, and delivery coverage from Hegazy Group.",
      },
      {
        property: "og:title",
        content: "FAQ — Hegazy Group",
      },
      {
        property: "og:description",
        content:
          "Answers on aluminum supply, specifications, quality documentation, and logistics from Hegazy Group.",
      },
      { property: "og:url", content: `${SITE_URL}/faq` },
      { name: "twitter:title", content: "FAQ — Hegazy Group" },
      {
        name: "twitter:description",
        content:
          "Answers on aluminum supply, specifications, quality documentation, and logistics from Hegazy Group.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_JSONLD),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  const { t } = useLanguage();
  const totalQuestions = SECTIONS.reduce((n, s) => n + s.items.length, 0);

  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs items={[{ label: t.footer.resources.faq }]} />
        <Section
          as="header"
          className="bg-graphite-900 text-white"
          aria-label="Frequently Asked Questions"
        >
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                {t.footer.resources.faq}
              </div>
              <h1 className="text-5xl leading-tight text-white">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Answers to the questions we hear most often from buyers —
                covering products, alloys, specifications, documentation, and
                logistics. {totalQuestions} questions across four topics.
              </p>
            </div>
          </Grid>
        </Section>

        {/* Quick-jump section index */}
        <Section className="border-b border-steel-200" aria-label="FAQ topics">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12 flex flex-wrap gap-3">
              {SECTIONS.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-steel-200 bg-white px-4 py-2 text-meta font-medium text-graphite-900 transition-colors hover:border-graphite-900"
                >
                  <span className="font-mono text-micro text-steel-400" data-spec>
                    0{i + 1}
                  </span>
                  {s.heading}
                </a>
              ))}
            </div>
          </Grid>
        </Section>

        {/* FAQ sections */}
        {SECTIONS.map((s, idx) => (
          <Section
            key={s.id}
            id={s.id}
            aria-label={s.heading}
            className={idx % 2 === 1 ? "bg-offwhite-50" : undefined}
          >
            <Grid>
              <div className="col-span-4 sm:col-span-8 lg:col-span-4">
                <div className="sticky top-28">
                  <div
                    className="font-mono text-micro uppercase tracking-caps text-steel-400"
                    data-spec
                  >
                    0{idx + 1}
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold text-graphite-900">
                    {s.heading}
                  </h2>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-8 lg:col-span-8">
                <Accordion type="single" collapsible className="w-full">
                  {s.items.map((qa, i) => (
                    <AccordionItem
                      key={i}
                      value={`q-${idx}-${i}`}
                      className="border-steel-200"
                    >
                      <AccordionTrigger className="text-left text-base font-semibold text-graphite-900 hover:no-underline">
                        {qa.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-meta leading-relaxed text-steel-600">
                        {qa.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Grid>
          </Section>
        ))}

        {/* Closing CTA */}
        <Section
          className="bg-graphite-900 text-white"
          aria-label="Still have questions?"
        >
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-8 lg:col-start-3 text-center">
              <h2 className="text-3xl font-semibold text-white">
                Still have questions?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
                Our team is ready to help with product selection, technical
                specifications, documentation, and quotation requests.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-accent-700 px-6 text-meta font-semibold text-white hover:bg-accent-600"
                >
                  Contact Us
                </Link>
                <Link
                  to="/quote"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-white/30 bg-transparent px-6 text-meta font-semibold text-white hover:bg-white/10"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </Grid>
        </Section>
      </main>
      <MobileStickyQuoteBar />
      <SiteFooter />
    </>
  );
}
