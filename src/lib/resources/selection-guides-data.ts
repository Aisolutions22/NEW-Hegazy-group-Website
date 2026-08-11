/**
 * Structured data for /resources/selection-guides.
 *
 * Same contract as technical-specs-data.ts: typed row arrays with stable field
 * keys so a later filter UI (product family / alloy series / industry) can be
 * layered on without re-entering any content.
 */

export type AlloySelectionRow = {
  alloySeries: string;
  keyCharacteristic: string;
  strength: string;
  corrosionResistance: string;
  formabilityWeldability: string;
  heatTreatable: string;
  typicalUseCase: string;
  /** Product page for the inline cross-link on the series name. */
  href: string;
};

export const ALLOY_SELECTION: AlloySelectionRow[] = [
  {
    alloySeries: "1xxx",
    keyCharacteristic: "Commercially pure aluminum (≥ 99% Al)",
    strength: "Low",
    corrosionResistance: "Excellent",
    formabilityWeldability: "Excellent",
    heatTreatable: "No",
    typicalUseCase: "Foil, cladding, electrical and thermal conduction, deep-drawn parts",
    href: "/products/sheets-coils",
  },
  {
    alloySeries: "3xxx",
    keyCharacteristic: "Manganese alloyed — general purpose",
    strength: "Low to moderate",
    corrosionResistance: "Very good",
    formabilityWeldability: "Very good",
    heatTreatable: "No",
    typicalUseCase: "HVAC fin and tube stock, roofing, cookware, general sheet work",
    href: "/products/sheets-coils",
  },
  {
    alloySeries: "5xxx",
    keyCharacteristic: "Magnesium alloyed — marine and structural sheet",
    strength: "Moderate to high",
    corrosionResistance: "Excellent, including marine exposure",
    formabilityWeldability: "Very good weldability",
    heatTreatable: "No",
    typicalUseCase: "Marine structures, tanks, architectural panels, transport bodies",
    href: "/products/sheets-coils",
  },
  {
    alloySeries: "6xxx",
    keyCharacteristic: "Magnesium + silicon — the extrusion family",
    strength: "Moderate to high",
    corrosionResistance: "Good",
    formabilityWeldability: "Good; readily extruded and anodised",
    heatTreatable: "Yes",
    typicalUseCase: "Facades, curtain walls, frames, structural profiles, bars and pipes",
    href: "/products/profiles-bars",
  },
  {
    alloySeries: "7xxx",
    keyCharacteristic: "Zinc alloyed — highest strength",
    strength: "Very high",
    corrosionResistance: "Moderate",
    formabilityWeldability: "Limited; generally not fusion welded",
    heatTreatable: "Yes",
    typicalUseCase: "High-load machined components, tooling plate, aerospace-grade parts",
    href: "/products/profiles-bars",
  },
];

export const ALLOY_TRADEOFF_SUMMARY =
  "As strength increases from 1xxx → 7xxx, corrosion resistance and ease of forming/welding generally decrease — 5xxx sits at the practical balance point for weldable, corrosion-resistant structural work, while 6xxx is preferred where extrusion and moderate strength are both needed.";

export type FormSelectionRow = {
  productForm: string;
  fabricationRoute: string;
  bestSuitedFor: string;
  href: string;
};

export const FORM_SELECTION: FormSelectionRow[] = [
  {
    productForm: "Coils / Sheets",
    fabricationRoute: "Hot rolling then cold rolling to gauge",
    bestSuitedFor: "Cladding, roofing, HVAC stock, panels, and any high-volume flat blanking or forming line",
    href: "/products/sheets-coils",
  },
  {
    productForm: "Plates",
    fabricationRoute: "Hot rolling to heavy gauge, stress relieved",
    bestSuitedFor: "Structural bases, machined components, tanks, and load-bearing fabrications",
    href: "/products/sheets-coils",
  },
  {
    productForm: "Discs",
    fabricationRoute: "Blanked from coil or sheet",
    bestSuitedFor: "Deep-drawn and spun parts: cookware bodies, lighting reflectors, pressure vessel ends",
    href: "/products/discs",
  },
  {
    productForm: "Pipes / Tubes",
    fabricationRoute: "Extrusion (seamless or porthole die)",
    bestSuitedFor: "Fluid and gas transfer, scaffolding, heat exchange circuits, structural tubing",
    href: "/products/pipes",
  },
  {
    productForm: "Profiles",
    fabricationRoute: "Extrusion through a custom or standard die",
    bestSuitedFor: "Facades, window and door systems, framing, solar mounting, machine enclosures",
    href: "/products/profiles-bars",
  },
  {
    productForm: "Bars / Rods",
    fabricationRoute: "Extrusion, optionally drawn to finish tolerance",
    bestSuitedFor: "Machined components, fasteners, shafts, and general workshop stock",
    href: "/products/profiles-bars",
  },
  {
    productForm: "Billets",
    fabricationRoute: "DC casting, homogenised and cut to length",
    bestSuitedFor: "Feedstock for extrusion presses and forging operations",
    href: "/products/billets",
  },
  {
    productForm: "Ingots",
    fabricationRoute: "Primary or remelt casting",
    bestSuitedFor: "Foundry and remelt feedstock for casting and alloying operations",
    href: "/products/ingots",
  },
  {
    productForm: "Wire Rod",
    fabricationRoute: "Continuous casting and rolling",
    bestSuitedFor: "Drawn conductor wire, cable stranding, welding wire, and mechanical wire products",
    href: "/products/wire-rods",
  },
];

export type ApplicationMatchRow = {
  industry: string;
  industryHref: string;
  alloySeries: string;
  forms: string;
  exampleSpecification: string;
};

export const APPLICATION_MATCHING: ApplicationMatchRow[] = [
  {
    industry: "Construction",
    industryHref: "/industries/construction",
    alloySeries: "5xxx, 6xxx",
    forms: "Sheets, coils, profiles, bars",
    exampleSpecification: "6063-T66 architectural profile, mill or anodised finish, EN 755-2",
  },
  {
    industry: "HVAC / Heat Transfer",
    industryHref: "/industries/hvac-heat-transfer",
    alloySeries: "1xxx, 3xxx",
    forms: "Coils, sheets, tubes",
    exampleSpecification: "3003-H14 coil, 0.20 – 0.50 mm, mill finish, EN 485-2",
  },
  {
    industry: "Automotive",
    industryHref: "/industries/automotive",
    alloySeries: "5xxx, 6xxx",
    forms: "Sheets, profiles, bars",
    exampleSpecification: "6082-T6 extruded section for crash and chassis components, EN 755-2",
  },
  {
    industry: "Electrical",
    industryHref: "/industries/electrical-components",
    alloySeries: "1xxx",
    forms: "Wire rod, bars",
    exampleSpecification: "1350 / EC-grade wire rod, 9.5 mm, ≥ 61% IACS conductivity",
  },
  {
    industry: "Food Industry",
    industryHref: "/industries/food-industry",
    alloySeries: "1xxx, 3xxx",
    forms: "Sheets, coils, discs",
    exampleSpecification: "1050-O disc, 2.0 – 5.0 mm, deep-drawing quality for cookware bodies",
  },
  {
    industry: "General Manufacturing",
    industryHref: "",
    alloySeries: "3xxx, 5xxx, 6xxx",
    forms: "Sheets, plates, bars, profiles",
    exampleSpecification: "6061-T6 bar and plate for machined fixtures and assemblies, ASTM B221",
  },
];

export const APPLICATION_FOOTNOTE =
  "These are general starting points based on standard industry practice — confirm the exact alloy, temper, and form against your project's engineering specification before ordering.";
