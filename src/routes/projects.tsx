import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";
import type { IndustryKey } from "@/lib/catalog/categories";

type Project = {
  id: keyof typeof PROJECT_TITLE_KEYS;
  industryKey: IndustryKey;
  industryTo: string;
  products: { key: string; to: string }[];
  alloys: string;
  application: string;
  scope: string;
  keyPoints: string[];
};

const PROJECTS: Project[] = [
  {
    id: "facade-cladding",
    industryKey: "construction",
    industryTo: "/industries/construction",
    products: [
      { key: "sheetsCoils", to: "/products/sheets-coils" },
      { key: "profilesBars", to: "/products/profiles-bars" },
    ],
    alloys: "5xxx, 6xxx series",
    application:
      "Curtain wall panels, cladding sheets, and structural profiles for commercial buildings.",
    scope:
      "Continuous supply of coated and mill-finish aluminum sheets and extruded profiles for facade fabrication.",
    keyPoints: [
      "Consistent surface quality for architectural finishes.",
      "Dimensional tolerances aligned with system requirements.",
      "Coordinated delivery schedules to match installation timelines.",
    ],
  },
  {
    id: "hvac-coil-stock",
    industryKey: "hvacHeatTransfer",
    industryTo: "/industries/hvac-heat-transfer",
    products: [{ key: "sheetsCoils", to: "/products/sheets-coils" }],
    alloys: "1xxx, 3xxx, 8xxx series",
    application:
      "Heat exchanger fins and HVAC coil stock for air conditioning and refrigeration units.",
    scope:
      "Supply of precision-rolled aluminum coil stock in specified tempers for coil forming and fin stamping.",
    keyPoints: [
      "Uniform thickness and flatness for efficient heat transfer.",
      "Surface quality suitable for high-speed forming.",
      "Traceability and mill certificates for quality assurance.",
    ],
  },
  {
    id: "cookware-discs",
    industryKey: "cookwareDiscBuyers",
    industryTo: "/industries/cookware-disc-buyers",
    products: [{ key: "discs", to: "/products/discs" }],
    alloys: "1050, 1100, 3003, 5052",
    application:
      "Blanks for cookware, rice cooker bodies, utensils, and lighting reflectors.",
    scope:
      "Regular supply of aluminum circles in standard diameters and tempers for deep drawing and spinning.",
    keyPoints: [
      "Optimized for deep-draw performance with minimal edge cracking.",
      "Consistent mechanical properties batch-to-batch.",
      "Packaging and handling to preserve surface quality.",
    ],
  },
  {
    id: "conductor-rod",
    industryKey: "electricalComponents",
    industryTo: "/industries/electrical-components",
    products: [{ key: "wireRods", to: "/products/wire-rods" }],
    alloys: "1350, 1050, 1070",
    application: "Busbars, power cables, and conductors for electrical distribution.",
    scope: "Supply of high-conductivity aluminum rod for wire drawing and stranding.",
    keyPoints: [
      "High electrical conductivity and consistent chemistry.",
      "Suitable for continuous casting and rolling processes.",
      "Supported by mill test reports and traceability documentation.",
    ],
  },
  {
    id: "billet-extrusion",
    industryKey: "metalManufacturing",
    industryTo: "/industries/metal-manufacturing",
    products: [{ key: "billets", to: "/products/billets" }],
    alloys: "6060, 6061, 6063, 6082",
    application: "Extrusion of architectural and industrial profiles.",
    scope: "Supply of air slip cast billets optimized for extrusion and surface quality.",
    keyPoints: [
      "Homogeneous structure for stable extrusion.",
      "Low defect rates and good surface finish on extruded profiles.",
      "Flexible sizing to match press capabilities and profile complexity.",
    ],
  },
];

const PROJECT_TITLE_KEYS = {
  "facade-cladding": "facadeCladding",
  "hvac-coil-stock": "hvacCoilStock",
  "cookware-discs": "cookwareDiscs",
  "conductor-rod": "conductorRod",
  "billet-extrusion": "billetExtrusion",
} as const;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Hegazy Group | Aluminum Supply References" },
      {
        name: "description",
        content:
          "Representative aluminum supply references across construction, HVAC, cookware, electrical, and metal manufacturing applications.",
      },
      { property: "og:title", content: "Projects — Hegazy Group" },
      {
        property: "og:description",
        content:
          "Selected supply references and applications across industries served by Hegazy Group.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <>
      <SiteHeader variant="solid" />
      <main id="main-content">
        <Breadcrumbs items={[{ label: t.nav.projects }]} />

        <Section as="header" className="bg-graphite-900 text-white" aria-label={t.projectsList.title}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                {t.projectsPage.eyebrow}
              </div>
              <h1 className="text-5xl leading-tight text-white">{t.projectsList.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {t.projectsList.subhead}
              </p>
            </div>
          </Grid>
        </Section>

        <Section aria-label={t.projectsList.title}>
          <Grid>
            <p className="col-span-4 sm:col-span-8 lg:col-span-8 text-base leading-relaxed text-steel-600">
              {t.projectsList.intro}
            </p>
          </Grid>

          <div className="mt-12 flex flex-col gap-6">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i + 1} />
            ))}
          </div>

          <p className="mt-12 max-w-3xl text-meta leading-relaxed text-steel-600">
            {t.projectsList.note}
          </p>
        </Section>

        <section
          className="w-full bg-graphite-900 text-white"
          style={{ paddingBlock: "var(--section-py)" }}
        >
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl leading-tight text-white">
                {t.projectsList.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
{t.projectsList.ctaBody}
              </p>
            </div>
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-graphite-900 hover:bg-white/90"
              >
                <Link to="/quote" className="inline-flex items-center justify-center gap-2">
                  {t.projectsList.ctaButton}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <MobileStickyQuoteBar />
      <SiteFooter />
    </>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLanguage();
  return (
    <article className="rounded-md border border-steel-200 bg-white p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to={project.industryTo}
          className="inline-flex items-center rounded-sm bg-graphite-900/5 px-2 py-1 font-mono text-micro uppercase tracking-caps text-graphite-800 hover:bg-graphite-900/10"
        >
          {t.industries[project.industryKey]}
        </Link>
        <span className="font-mono text-micro text-steel-400" data-spec>
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h2 className="mt-4 text-xl font-semibold text-graphite-900">{t.projectsList.items[PROJECT_TITLE_KEYS[project.id]]}</h2>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <dl className="divide-y divide-steel-200 border-t border-steel-200">
          <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <dt className="text-caption text-steel-400">{t.projectsList.fields.products}</dt>
            <dd className="flex flex-wrap gap-x-2 gap-y-1">
              {project.products.map((prod, i) => (
                <span key={prod.to} className="font-mono text-micro uppercase tracking-caps">
                  <Link to={prod.to} className="text-graphite-900 underline underline-offset-4 hover:text-steel-600">
                    {t.products[prod.key as keyof typeof t.products]}
                  </Link>
                  {i < project.products.length - 1 ? "," : ""}
                </span>
              ))}
            </dd>
          </div>
          <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <dt className="text-caption text-steel-400">{t.projectsList.fields.alloys}</dt>
            <dd className="font-mono text-micro uppercase tracking-caps text-graphite-900" data-spec>
              {project.alloys}
            </dd>
          </div>
          <div className="flex flex-col gap-1 py-3">
            <dt className="text-caption text-steel-400">{t.projectsList.fields.application}</dt>
            <dd className="text-meta leading-relaxed text-graphite-800">{project.application}</dd>
          </div>
          <div className="flex flex-col gap-1 py-3">
            <dt className="text-caption text-steel-400">{t.projectsList.fields.scope}</dt>
            <dd className="text-meta leading-relaxed text-graphite-800">{project.scope}</dd>
          </div>
        </dl>

        <div>
          <div className="font-mono text-micro uppercase tracking-caps text-steel-400">
            {t.projectsList.fields.keyPoints}
          </div>
          <ul className="mt-4 space-y-3">
            {project.keyPoints.map((point) => (
              <li key={point} className="flex gap-3 text-meta leading-relaxed text-steel-600">
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-graphite-900" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
