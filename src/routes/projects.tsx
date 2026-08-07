import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Section, Grid } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/language-context";
import { MobileStickyQuoteBar } from "@/components/layout/mobile-nav";

type LinkRef = { label: string; to: string };

type Project = {
  id: string;
  title: string;
  industry: LinkRef;
  products: LinkRef[];
  alloys: string;
  application: string;
  scope: string;
  keyPoints: string[];
};

const PROJECTS: Project[] = [
  {
    id: "facade-cladding",
    title: "Facade & Cladding Supply",
    industry: { label: "Construction & Architectural", to: "/industries/construction" },
    products: [
      { label: "Sheets & Coils", to: "/products/sheets-coils" },
      { label: "Profiles & Bars", to: "/products/profiles-bars" },
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
    title: "HVAC Coil Stock Supply",
    industry: { label: "HVAC & Heat Transfer", to: "/industries/hvac-heat-transfer" },
    products: [{ label: "Sheets & Coils", to: "/products/sheets-coils" }],
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
    title: "Cookware Disc Supply",
    industry: { label: "Cookware & Disc Buyers", to: "/industries/cookware-disc-buyers" },
    products: [{ label: "Aluminum Discs", to: "/products/discs" }],
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
    title: "Electrical Conductor Rod Supply",
    industry: { label: "Electrical Components", to: "/industries/electrical-components" },
    products: [{ label: "Aluminum Wire Rods", to: "/products/wire-rods" }],
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
    title: "Billet Supply for Extrusion Lines",
    industry: { label: "Metal Manufacturing", to: "/industries/metal-manufacturing" },
    products: [{ label: "Aluminum Billets", to: "/products/billets" }],
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

const TITLE = "Projects";
const SUBHEAD = "Selected supply references and applications across industries.";
const INTRO =
  "This section highlights representative applications and supply references for Hegazy Group aluminum products. We support industrial, architectural, and manufacturing projects across Egypt and the region with reliable aluminum supply, technical guidance, and consistent quality.";
const NOTE =
  "Detailed case studies with project names and client references are available upon request. For specific project inquiries, please contact our sales team.";

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

        <Section as="header" className="bg-graphite-900 text-white" aria-label={TITLE}>
          <Grid>
            <div className="col-span-4 sm:col-span-8 lg:col-span-9">
              <div className="mb-4 font-mono text-micro uppercase tracking-caps text-white/60">
                {t.projectsPage.eyebrow}
              </div>
              <h1 className="text-5xl leading-tight text-white">{TITLE}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                {SUBHEAD}
              </p>
            </div>
          </Grid>
        </Section>

        <Section aria-label={TITLE}>
          <Grid>
            <p className="col-span-4 sm:col-span-8 lg:col-span-8 text-base leading-relaxed text-steel-600">
              {INTRO}
            </p>
          </Grid>

          <div className="mt-12 flex flex-col gap-6">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i + 1} />
            ))}
          </div>

          <p className="mt-12 max-w-3xl text-meta leading-relaxed text-steel-600">
            {NOTE}
          </p>
        </Section>

        <section
          className="w-full bg-graphite-900 text-white"
          style={{ paddingBlock: "var(--section-py)" }}
        >
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl leading-tight text-white">
                Have a project in mind?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Share your specifications and requirements — our team will confirm
                availability and provide a written quotation.
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
                  Request a Quote
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
  return (
    <article className="rounded-md border border-steel-200 bg-white p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to={project.industry.to}
          className="inline-flex items-center rounded-sm bg-graphite-900/5 px-2 py-1 font-mono text-micro uppercase tracking-caps text-graphite-800 hover:bg-graphite-900/10"
        >
          {project.industry.label}
        </Link>
        <span className="font-mono text-micro text-steel-400" data-spec>
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h2 className="mt-4 text-xl font-semibold text-graphite-900">{project.title}</h2>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <dl className="divide-y divide-steel-200 border-t border-steel-200">
          <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <dt className="text-caption text-steel-400">Products supplied</dt>
            <dd className="flex flex-wrap gap-x-2 gap-y-1">
              {project.products.map((prod, i) => (
                <span key={prod.to} className="font-mono text-micro uppercase tracking-caps">
                  <Link to={prod.to} className="text-graphite-900 underline underline-offset-4 hover:text-steel-600">
                    {prod.label}
                  </Link>
                  {i < project.products.length - 1 ? "," : ""}
                </span>
              ))}
            </dd>
          </div>
          <div className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <dt className="text-caption text-steel-400">Alloys</dt>
            <dd className="font-mono text-micro uppercase tracking-caps text-graphite-900" data-spec>
              {project.alloys}
            </dd>
          </div>
          <div className="flex flex-col gap-1 py-3">
            <dt className="text-caption text-steel-400">Application</dt>
            <dd className="text-meta leading-relaxed text-graphite-800">{project.application}</dd>
          </div>
          <div className="flex flex-col gap-1 py-3">
            <dt className="text-caption text-steel-400">Scope</dt>
            <dd className="text-meta leading-relaxed text-graphite-800">{project.scope}</dd>
          </div>
        </dl>

        <div>
          <div className="font-mono text-micro uppercase tracking-caps text-steel-400">
            Key points
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
