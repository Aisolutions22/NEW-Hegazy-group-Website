import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import {
  ScrollTable,
  DownloadPdfButton,
  ResourceCtas,
  DataLink,
  type Column,
} from "@/components/resources/data-table";
import {
  ALLOY_SELECTION,
  ALLOY_TRADEOFF_SUMMARY,
  APPLICATION_FOOTNOTE,
  APPLICATION_MATCHING,
  FORM_SELECTION,
  type AlloySelectionRow,
  type ApplicationMatchRow,
  type FormSelectionRow,
} from "@/lib/resources/selection-guides-data";

const URL = "https://hegazy-group.lovable.app/resources/selection-guides";
const PDF_HREF = "/contact";
const TITLE = "Selection Guides — Hegazy Group";
const DESCRIPTION =
  "Practical aluminum guides: alloy series selection, product form selection, and application matching by industry with example specifications.";

export const Route = createFileRoute("/resources/selection-guides")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: SelectionGuidesPage,
});

const INCLUDED = [
  "Alloy Selection Guide — how to choose between 1xxx, 3xxx, 5xxx, 6xxx, and 7xxx series based on application.",
  "Form Selection Guide — when to use sheets, coils, plates, pipes, profiles, billets, ingots, discs, or wire rods.",
  "Application Matching — recommended alloys and forms by industry, with example specifications.",
];

const alloyColumns: Column<AlloySelectionRow>[] = [
  {
    key: "alloySeries",
    label: "Alloy Series",
    render: (r) => <DataLink to={r.href}>{r.alloySeries}</DataLink>,
  },
  { key: "keyCharacteristic", label: "Key Characteristic" },
  { key: "strength", label: "Strength" },
  { key: "corrosionResistance", label: "Corrosion Resistance" },
  { key: "formabilityWeldability", label: "Formability / Weldability" },
  { key: "heatTreatable", label: "Heat-Treatable" },
  { key: "typicalUseCase", label: "Typical Use Case" },
];

const formColumns: Column<FormSelectionRow>[] = [
  {
    key: "productForm",
    label: "Product Form",
    render: (r) => <DataLink to={r.href}>{r.productForm}</DataLink>,
  },
  { key: "fabricationRoute", label: "Typical Fabrication Route" },
  { key: "bestSuitedFor", label: "Best Suited For" },
];

const applicationColumns: Column<ApplicationMatchRow>[] = [
  {
    key: "industry",
    label: "Industry",
    render: (r) =>
      r.industryHref ? <DataLink to={r.industryHref}>{r.industry}</DataLink> : r.industry,
  },
  { key: "alloySeries", label: "Recommended Alloy Series" },
  { key: "forms", label: "Recommended Form(s)" },
  { key: "exampleSpecification", label: "Example Specification" },
];

function SelectionGuidesPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs
          items={[{ label: "Resources", href: "/resources" }, { label: "Selection Guides" }]}
        />

        <Section as="header" className="bg-graphite-900 text-white" aria-label="Selection Guides">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                Resources
              </div>
              <h1 className="text-5xl leading-tight text-white">Selection Guides</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Practical guides for alloy selection, form choice, and application matching.
              </p>
              <div className="mt-8">
                <DownloadPdfButton href={PDF_HREF} label="Request PDF" downloadable={false} tone="light" />
              </div>
            </div>
          </Grid>
        </Section>

        <Section aria-label="What's included">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-8">
              <h2 className="text-2xl font-semibold text-graphite-900">What's included</h2>
              <ul className="mt-6 space-y-2">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-meta leading-relaxed text-steel-600">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Section>

        <Section className="bg-offwhite-50" aria-label="Alloy selection guide">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="font-mono text-micro uppercase tracking-caps text-steel-400">01</div>
              <h2 className="mt-3 text-3xl font-semibold text-graphite-900">
                Alloy Selection Guide
              </h2>
              <div className="mt-8">
                <ScrollTable columns={alloyColumns} rows={ALLOY_SELECTION} />
              </div>
              <p className="mt-6 max-w-[75ch] text-meta leading-relaxed text-steel-600">
                {ALLOY_TRADEOFF_SUMMARY}
              </p>
            </div>
          </Grid>
        </Section>

        <Section aria-label="Form selection guide">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="font-mono text-micro uppercase tracking-caps text-steel-400">02</div>
              <h2 className="mt-3 text-3xl font-semibold text-graphite-900">
                Form Selection Guide
              </h2>
              <div className="mt-8">
                <ScrollTable columns={formColumns} rows={FORM_SELECTION} />
              </div>
            </div>
          </Grid>
        </Section>

        <Section className="bg-offwhite-50" aria-label="Application matching">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="font-mono text-micro uppercase tracking-caps text-steel-400">03</div>
              <h2 className="mt-3 text-3xl font-semibold text-graphite-900">
                Application Matching
              </h2>
              <div className="mt-8">
                <ScrollTable
                  columns={applicationColumns}
                  rows={APPLICATION_MATCHING}
                  footnote={APPLICATION_FOOTNOTE}
                />
              </div>
            </div>
          </Grid>
        </Section>

        <Section as="section" className="bg-graphite-900 text-white" aria-label="Next steps">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <h2 className="text-3xl font-semibold text-white">
                Not sure which alloy or form fits?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
                Share your application, load case, and finish requirements — our technical team
                will recommend an alloy, temper, and form combination and confirm availability.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <DownloadPdfButton href={PDF_HREF} label="Request PDF" downloadable={false} tone="light" />
              </div>
              <div className="mt-4">
                <ResourceCtas />
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
