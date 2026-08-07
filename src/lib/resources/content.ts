/**
 * Final resource-library copy. English-only for now (Arabic pending), kept as
 * literals here so /resources and its detail pages share one source of truth.
 */

export type ResourceGroup = { label?: string; items: string[] };

export type ResourceCard = {
  key: string;
  title: string;
  body: string;
  listHeading: string;
  groups: ResourceGroup[];
  meta?: string;
  cta: string;
  href: string;
};

export const RESOURCE_CARDS: ResourceCard[] = [
  {
    key: "catalog",
    title: "Catalog",
    body: "Download our product catalog with available alloys, formats, and typical specifications.",
    listHeading: "What's Included",
    groups: [
      {
        items: [
          "Full product range: pipes, sheets & coils, discs, ingots, billets, profiles & bars, wire rods.",
          "Common alloys and tempers by product family.",
          "Typical dimensions, tolerances, and finish options.",
          "Overview of applicable standards (ASTM, EN, ISO, AA).",
        ],
      },
    ],
    meta: "Format: PDF (downloadable)",
    cta: "View Catalog",
    href: "/resources/catalog",
  },
  {
    key: "specs",
    title: "Technical Specs",
    body: "Detailed specifications for aluminum products, including chemical composition, mechanical properties, and tolerances.",
    listHeading: "What's Included",
    groups: [
      {
        items: [
          "Chemical composition ranges for common alloys (1xxx, 3xxx, 5xxx, 6xxx, 7xxx, 8xxx series).",
          "Mechanical properties: tensile strength, yield strength, elongation, hardness by temper.",
          "Dimensional tolerances for sheets, plates, coils, pipes, profiles, and bars.",
          "Temper designations and heat treatment conditions.",
          "Cross-reference between ASTM, EN, ISO, and AA designations.",
        ],
      },
    ],
    meta: "Format: Web pages + downloadable PDFs per product family.",
    cta: "View Specs",
    href: "/resources/technical-specs",
  },
  {
    key: "guides",
    title: "Selection Guides",
    body: "Practical guides for alloy selection, form choice, and application matching.",
    listHeading: "What's Included",
    groups: [
      {
        label: "Alloy Selection Guide",
        items: [
          "How to choose between 1xxx, 3xxx, 5xxx, 6xxx, 7xxx series based on application.",
          "Formability vs. strength vs. corrosion resistance trade-offs.",
        ],
      },
      {
        label: "Form Selection Guide",
        items: [
          "When to use sheets, coils, plates, pipes, profiles, billets, ingots, discs, or wire rods.",
          "Typical fabrication routes: extrusion, rolling, forging, casting, drawing.",
        ],
      },
      {
        label: "Application Matching",
        items: [
          "Recommended alloys and forms for construction, HVAC, automotive, electrical, food industry, and general manufacturing.",
          "Example specifications by industry.",
        ],
      },
    ],
    meta: "Format: Web pages + downloadable PDFs.",
    cta: "View Guides",
    href: "/resources/guides",
  },
  {
    key: "faq",
    title: "FAQ",
    body: "Common questions about aluminum supply, standards, lead times, and documentation.",
    listHeading: "Sample Questions",
    groups: [
      {
        label: "General",
        items: [
          "What aluminum alloys do you supply?",
          "Which standards do your products conform to?",
          "Can you provide mill test certificates and traceability documents?",
        ],
      },
      {
        label: "Products & Specifications",
        items: [
          "What is the difference between 1050, 1100, 3003, and 5052?",
          "What tempers are available for sheets and profiles?",
          "Can you supply custom sizes or cut-to-length?",
        ],
      },
      {
        label: "Lead Times & Logistics",
        items: [
          "What are typical lead times for standard and non-standard items?",
          "Do you support partial shipments and consolidated loads?",
          "Which regions do you serve?",
        ],
      },
      {
        label: "Quality & Documentation",
        items: [
          "What quality certifications do you hold?",
          "How do you handle non-conformance or claims?",
          "Can you support third-party inspection?",
        ],
      },
    ],
    cta: "View FAQ",
    href: "/faq",
  },
];

export const RESOURCES_INTRO =
  "Access technical data, product catalogs, selection guides, and FAQs to support your aluminum sourcing and fabrication needs. All documents are provided for reference; for project-specific requirements, please contact our technical team.";
