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
    keyCharacteristic: "Commercially pure aluminum (≥99% Al)",
    strength: "Low",
    corrosionResistance: "Excellent",
    formabilityWeldability: "Excellent formability, excellent weldability",
    heatTreatable: "No",
    typicalUseCase:
      "Electrical conductors, heat exchangers, chemical/food equipment",
    href: "/products/sheets-coils",
  },
  {
    alloySeries: "3xxx",
    keyCharacteristic: "Aluminum-Manganese",
    strength: "Low–Medium",
    corrosionResistance: "Very good",
    formabilityWeldability: "Excellent formability, good weldability",
    heatTreatable: "No",
    typicalUseCase:
      "Roofing and cladding, HVAC coils, food and beverage containers, general sheet metal work",
    href: "/products/sheets-coils",
  },
  {
    alloySeries: "5xxx",
    keyCharacteristic: "Aluminum-Magnesium",
    strength: "Medium–High",
    corrosionResistance: "Excellent, especially in marine/saltwater environments",
    formabilityWeldability: "Good formability, excellent weldability",
    heatTreatable: "No",
    typicalUseCase:
      "Marine and shipbuilding, tanks and pressure vessels, structural panels, automotive body sheet",
    href: "/products/sheets-coils",
  },
  {
    alloySeries: "6xxx",
    keyCharacteristic: "Aluminum-Magnesium-Silicon",
    strength: "Medium",
    corrosionResistance: "Good",
    formabilityWeldability: "Excellent extrudability, good weldability",
    heatTreatable: "Yes",
    typicalUseCase:
      "Architectural and structural profiles, window/door frames, automotive and industrial structural parts",
    href: "/products/profiles-bars",
  },
  {
    alloySeries: "7xxx",
    keyCharacteristic: "Aluminum-Zinc",
    strength: "Highest",
    corrosionResistance: "Lower — often needs surface protection",
    formabilityWeldability:
      "Lower formability, generally not recommended for welding without special process control",
    heatTreatable: "Yes",
    typicalUseCase:
      "High-stress structural and load-bearing applications, aerospace-grade components",
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
    fabricationRoute: "Rolling (hot then cold rolled, coiled)",
    bestSuitedFor:
      "High-volume flat products: cladding, roofing, HVAC fin stock, general fabrication, further slitting/cutting",
    href: "/products/sheets-coils",
  },
  {
    productForm: "Plates",
    fabricationRoute: "Rolling (thicker gauge, supplied flat)",
    bestSuitedFor:
      "Structural and heavy-duty flat components, tooling, machined parts",
    href: "/products/sheets-coils",
  },
  {
    productForm: "Discs",
    fabricationRoute: "Rolling + circle blanking",
    bestSuitedFor:
      "Deep-drawn products — cookware, lighting reflectors, pressure cookers",
    href: "/products/discs",
  },
  {
    productForm: "Pipes / Tubes",
    fabricationRoute: "Extrusion or welding + drawing",
    bestSuitedFor: "Fluid and gas conveyance, structural tube, railings",
    href: "/products/pipes",
  },
  {
    productForm: "Profiles",
    fabricationRoute: "Extrusion",
    bestSuitedFor:
      "Architectural sections, window/door frames, structural framing, custom cross-sections",
    href: "/products/profiles-bars",
  },
  {
    productForm: "Bars / Rods",
    fabricationRoute: "Extrusion or drawing",
    bestSuitedFor: "Machining stock, structural bar, fasteners",
    href: "/products/profiles-bars",
  },
  {
    productForm: "Billets",
    fabricationRoute: "Cast (as extrusion feedstock)",
    bestSuitedFor:
      "Input material for profile/bar extrusion — not typically an end-use product",
    href: "/products/billets",
  },
  {
    productForm: "Ingots",
    fabricationRoute: "Cast (as rolling/casting feedstock)",
    bestSuitedFor:
      "Input material for sheet/plate rolling or foundry casting — not typically an end-use product",
    href: "/products/ingots",
  },
  {
    productForm: "Wire Rod",
    fabricationRoute: "Extrusion or continuous casting + drawing",
    bestSuitedFor: "Feedstock for wire drawing — cable, rivets, welding wire",
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
    forms: "Sheets, coils, profiles, plates",
    exampleSpecification:
      "5083 sheet/coil for cladding and structural panels; 6082/6063 extruded profiles for framing",
  },
  {
    industry: "HVAC / Heat Transfer",
    industryHref: "/industries/hvac-heat-transfer",
    alloySeries: "1xxx, 3xxx",
    forms: "Coils, fin stock, tube",
    exampleSpecification:
      "1050 or 3003 coil for fin stock and heat exchanger components",
  },
  {
    industry: "Automotive",
    industryHref: "/industries/automotive",
    alloySeries: "5xxx, 6xxx",
    forms: "Sheets, coils, profiles, bar",
    exampleSpecification:
      "5083 for body/structural panels; 6061/6082 for structural and chassis components",
  },
  {
    industry: "Electrical",
    industryHref: "/industries/electrical-components",
    alloySeries: "1xxx",
    forms: "Coil, wire rod, bar",
    exampleSpecification:
      "1050 for busbars and conductors, given high conductivity and corrosion resistance",
  },
  {
    industry: "Food Industry",
    industryHref: "/industries/food-industry",
    alloySeries: "1xxx, 3xxx",
    forms: "Sheets, coils, discs",
    exampleSpecification:
      "1050 or 3003 sheet/coil for food-contact equipment and containers; discs for cookware",
  },
  {
    industry: "General Manufacturing",
    industryHref: "",
    alloySeries: "3xxx, 5xxx, 6xxx",
    forms: "Sheets, coils, plates, bar, profiles",
    exampleSpecification:
      "Alloy and form selected per application — contact our technical team for a specific recommendation",
  },
];

export const APPLICATION_FOOTNOTE =
  "These are general starting points based on standard industry practice — confirm the exact alloy, temper, and form against your project's engineering specification before ordering.";
