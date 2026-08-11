import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ScrollTable,
  DownloadPdfButton,
  ResourceCtas,
  DataLink,
  type Column,
} from "@/components/resources/data-table";
import {
  ALLOY_SERIES_LINK,
  CHEMICAL_COMPOSITION,
  CHEMICAL_COMPOSITION_FOOTNOTE,
  MECHANICAL_PROPERTIES,
  STANDARDS_CROSS_REFERENCE,
  STANDARDS_FOOTNOTE,
  TEMPER_DESIGNATIONS,
  TEMPER_FOOTNOTE,
  THICKNESS_TOLERANCES,
  THICKNESS_TOLERANCE_FOOTNOTE,
  THICKNESS_TOLERANCE_WIDTH_BANDS,
  TOLERANCE_TABS,
  type ChemicalCompositionRow,
  type MechanicalPropertyRow,
  type StandardsCrossRefRow,
  type TemperRow,
  type ThicknessToleranceRow,
} from "@/lib/resources/technical-specs-data";

const URL = "https://hegazy-group.lovable.app/resources/technical-specifications";
const PDF_HREF = "/resources/files/technical-specifications.pdf";
const TITLE = "Technical Specifications — Hegazy Group";
const DESCRIPTION =
  "Aluminum chemical composition, mechanical properties, dimensional tolerances, temper designations, and ASTM/EN/ISO/AA cross-reference.";

export const Route = createFileRoute("/resources/technical-specifications")({
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
  component: TechnicalSpecificationsPage,
});

function SeriesLink({ series }: { series: string }) {
  const href = ALLOY_SERIES_LINK[series];
  if (!href) return <>{series}</>;
  return <DataLink to={href}>{series}</DataLink>;
}

const INCLUDED = [
  "Chemical composition ranges for common alloys (1xxx, 3xxx, 5xxx, 6xxx, 7xxx, 8xxx series).",
  "Mechanical properties: tensile strength, yield strength, elongation, hardness by temper.",
  "Dimensional tolerances for sheets, plates, coils, pipes, profiles, and bars.",
  "Temper designations and heat treatment conditions.",
  "Cross-reference between ASTM, EN, ISO, and AA designations.",
];

const chemicalColumns: Column<ChemicalCompositionRow>[] = [
  {
    key: "alloySeries",
    label: "Alloy Series",
    render: (r) => <SeriesLink series={r.alloySeries} />,
  },
  { key: "alloyGrade", label: "Common Alloy Grades" },
  { key: "si", label: "Si (%)" },
  { key: "fe", label: "Fe (%)" },
  { key: "cu", label: "Cu (%)" },
  { key: "mn", label: "Mn (%)" },
  { key: "mg", label: "Mg (%)" },
  { key: "zn", label: "Zn (%)" },
  { key: "other", label: "Other Elements" },
  {
    key: "standard",
    label: "Applicable Standard",
    render: (r) => (
      <>
        {r.standard}
        {r.footnote ? <sup className="ms-0.5">*</sup> : null}
      </>
    ),
  },
];

const mechanicalColumns: Column<MechanicalPropertyRow>[] = [
  {
    key: "alloy",
    label: "Alloy",
    render: (r) =>
      ALLOY_SERIES_LINK[r.alloySeries] ? (
        <DataLink to={ALLOY_SERIES_LINK[r.alloySeries]}>{r.alloy}</DataLink>
      ) : (
        r.alloy
      ),
  },
  { key: "temper", label: "Temper" },
  { key: "productForm", label: "Product Form" },
  { key: "tensileStrength", label: "Tensile Strength (Rm)" },
  { key: "yieldStrength", label: "Yield Strength (Rp0.2)" },
  { key: "elongation", label: "Elongation (A%)" },
  { key: "hardness", label: "Hardness" },
  { key: "standard", label: "Applicable Standard" },
];

const toleranceColumns: Column<ThicknessToleranceRow>[] = [
  { key: "thicknessBand", label: "Thickness (mm)" },
  ...THICKNESS_TOLERANCE_WIDTH_BANDS.flatMap((b) => [
    {
      key: `${b.key}_I`,
      label: `${b.label} · Gr. I`,
      render: (r: ThicknessToleranceRow) => r.values[`${b.key}_I`],
    },
    {
      key: `${b.key}_II`,
      label: `${b.label} · Gr. II`,
      render: (r: ThicknessToleranceRow) => r.values[`${b.key}_II`],
    },
  ]),
];

const temperColumns: Column<TemperRow>[] = [
  { key: "temper", label: "Temper Designation" },
  { key: "meaning", label: "General Meaning" },
  { key: "effect", label: "Typical Effect on Properties" },
  { key: "productForms", label: "Common Product Forms" },
];

const standardsColumns: Column<StandardsCrossRefRow>[] = [
  {
    key: "alloy",
    label: "Aluminum Alloy",
    render: (r) =>
      ALLOY_SERIES_LINK[r.alloySeries] ? (
        <DataLink to={ALLOY_SERIES_LINK[r.alloySeries]}>{r.alloy}</DataLink>
      ) : (
        r.alloy
      ),
  },
  { key: "aa", label: "AA Designation" },
  { key: "astm", label: "ASTM Reference" },
  { key: "en", label: "EN Reference" },
  { key: "iso", label: "ISO Reference" },
  { key: "productForm", label: "Product Form" },
  { key: "notes", label: "Notes" },
];

function TechnicalSpecificationsPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs
          items={[
            { label: "Resources", href: "/resources" },
            { label: "Technical Specifications" },
          ]}
        />

        <Section as="header" className="bg-graphite-900 text-white" aria-label="Technical Specifications">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                Resources
              </div>
              <h1 className="text-5xl leading-tight text-white">Technical Specifications</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                Detailed specifications for aluminum products, including chemical composition,
                mechanical properties, and tolerances.
              </p>
              <div className="mt-8">
                <DownloadPdfButton href={PDF_HREF} tone="light" />
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

        <Section className="bg-offwhite-50" aria-label="Chemical composition">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="font-mono text-micro uppercase tracking-caps text-steel-400">01</div>
              <h2 className="mt-3 text-3xl font-semibold text-graphite-900">
                Chemical Composition
              </h2>
              <div className="mt-8">
                <ScrollTable
                  columns={chemicalColumns}
                  rows={CHEMICAL_COMPOSITION}
                  footnote={<>* {CHEMICAL_COMPOSITION_FOOTNOTE}</>}
                />
              </div>
            </div>
          </Grid>
        </Section>

        <Section aria-label="Mechanical properties">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="font-mono text-micro uppercase tracking-caps text-steel-400">02</div>
              <h2 className="mt-3 text-3xl font-semibold text-graphite-900">
                Mechanical Properties
              </h2>
              <div className="mt-8">
                <ScrollTable columns={mechanicalColumns} rows={MECHANICAL_PROPERTIES} />
              </div>
            </div>
          </Grid>
        </Section>

        <Section className="bg-offwhite-50" aria-label="Dimensional tolerances">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="font-mono text-micro uppercase tracking-caps text-steel-400">03</div>
              <h2 className="mt-3 text-3xl font-semibold text-graphite-900">
                Dimensional Tolerances
              </h2>

              <Tabs defaultValue={TOLERANCE_TABS[0].key} className="mt-8">
                <TabsList className="flex h-auto w-full flex-wrap justify-start gap-1 bg-white p-1">
                  {TOLERANCE_TABS.map((tab) => (
                    <TabsTrigger key={tab.key} value={tab.key} className="text-meta">
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {TOLERANCE_TABS.map((tab) => (
                  <TabsContent key={tab.key} value={tab.key} className="mt-8">
                    {tab.standard ? (
                      <div className="mb-6 font-mono text-micro uppercase tracking-caps text-steel-400">
                        Standard: {tab.standard}
                      </div>
                    ) : null}

                    {tab.showThicknessMatrix ? (
                      <ScrollTable
                        caption="Thickness tolerance by width band (mm)"
                        columns={toleranceColumns}
                        rows={THICKNESS_TOLERANCES}
                        footnote={THICKNESS_TOLERANCE_FOOTNOTE}
                      />
                    ) : null}

                    <dl className="mt-8 grid gap-3">
                      {tab.attributes.map((a) => (
                        <div
                          key={a.label}
                          className="rounded-md border border-steel-200 bg-white p-4 sm:flex sm:gap-6"
                        >
                          <dt className="font-mono text-micro uppercase tracking-caps text-steel-400 sm:w-40 sm:shrink-0">
                            {a.label}
                          </dt>
                          <dd className="mt-1 text-meta leading-relaxed text-steel-600 sm:mt-0">
                            {a.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </Grid>
        </Section>

        <Section aria-label="Temper designations and heat treatment">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="font-mono text-micro uppercase tracking-caps text-steel-400">04</div>
              <h2 className="mt-3 text-3xl font-semibold text-graphite-900">
                Temper Designations &amp; Heat Treatment
              </h2>
              <div className="mt-8">
                <ScrollTable
                  columns={temperColumns}
                  rows={TEMPER_DESIGNATIONS}
                  footnote={TEMPER_FOOTNOTE}
                />
              </div>
            </div>
          </Grid>
        </Section>

        <Section className="bg-offwhite-50" aria-label="Standards cross-reference">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-12">
              <div className="font-mono text-micro uppercase tracking-caps text-steel-400">05</div>
              <h2 className="mt-3 text-3xl font-semibold text-graphite-900">
                Standards Cross-Reference
              </h2>
              <div className="mt-8">
                <ScrollTable
                  columns={standardsColumns}
                  rows={STANDARDS_CROSS_REFERENCE}
                  footnote={STANDARDS_FOOTNOTE}
                />
              </div>
            </div>
          </Grid>
        </Section>

        <Section as="section" className="bg-graphite-900 text-white" aria-label="Next steps">
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <h2 className="text-3xl font-semibold text-white">
                Need this against your specification?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
                Send us your alloy, temper, form, and dimensions and our technical team will
                confirm availability, tolerances, and applicable standards.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <DownloadPdfButton href={PDF_HREF} tone="light" />
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
