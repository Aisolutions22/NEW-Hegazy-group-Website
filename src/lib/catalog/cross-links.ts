import type { IndustryKey } from "./categories";

/**
 * Cross-navigation between industry pages and product pages.
 * Paths are literal so TanStack Router's typed <Link to=...> accepts them.
 */
export const INDUSTRY_PRODUCTS = {
  metalManufacturing: [
    { label: "Aluminum Billets", to: "/products/billets" },
    { label: "Aluminum Ingots", to: "/products/ingots" },
    { label: "Profiles & Bars", to: "/products/profiles-bars" },
  ],
  hvacHeatTransfer: [{ label: "Sheets & Coils", to: "/products/sheets-coils" }],
  construction: [
    { label: "Sheets & Coils", to: "/products/sheets-coils" },
    { label: "Profiles & Bars", to: "/products/profiles-bars" },
  ],
  electricalComponents: [{ label: "Aluminum Wire Rods", to: "/products/wire-rods" }],
  heavyIndustry: [
    { label: "Aluminum Pipes", to: "/products/pipes" },
    { label: "Aluminum Billets", to: "/products/billets" },
    { label: "Profiles & Bars", to: "/products/profiles-bars" },
  ],
  automotive: [
    { label: "Profiles & Bars", to: "/products/profiles-bars" },
    { label: "Sheets & Coils", to: "/products/sheets-coils" },
  ],
  foodIndustry: [
    { label: "Sheets & Coils", to: "/products/sheets-coils" },
    { label: "Aluminum Discs", to: "/products/discs" },
  ],
  embossedSheetsInsulation: [{ label: "Sheets & Coils", to: "/products/sheets-coils" }],
  cookwareDiscBuyers: [{ label: "Aluminum Discs", to: "/products/discs" }],
} as const satisfies Record<IndustryKey, ReadonlyArray<{ label: string; to: string }>>;

export type ProductSlug =
  | "pipes"
  | "sheets-coils"
  | "discs"
  | "ingots"
  | "billets"
  | "profiles-bars"
  | "wire-rods";

export const PRODUCT_INDUSTRIES = {
  pipes: [
    { label: "Heavy Industry", to: "/industries/heavy-industry" },
    { label: "Metal Manufacturing", to: "/industries/metal-manufacturing" },
    { label: "Construction & Architectural", to: "/industries/construction" },
  ],
  "sheets-coils": [
    { label: "HVAC & Heat Transfer", to: "/industries/hvac-heat-transfer" },
    { label: "Construction & Architectural", to: "/industries/construction" },
    { label: "Food Industry", to: "/industries/food-industry" },
    { label: "Embossed Sheets & Insulation", to: "/industries/embossed-sheets-insulation" },
    { label: "Automotive & Transport", to: "/industries/automotive" },
  ],
  discs: [
    { label: "Cookware & Disc Buyers", to: "/industries/cookware-disc-buyers" },
    { label: "Food Industry", to: "/industries/food-industry" },
  ],
  ingots: [{ label: "Metal Manufacturing", to: "/industries/metal-manufacturing" }],
  billets: [
    { label: "Metal Manufacturing", to: "/industries/metal-manufacturing" },
    { label: "Heavy Industry", to: "/industries/heavy-industry" },
  ],
  "profiles-bars": [
    { label: "Construction & Architectural", to: "/industries/construction" },
    { label: "Automotive & Transport", to: "/industries/automotive" },
    { label: "Heavy Industry", to: "/industries/heavy-industry" },
    { label: "Metal Manufacturing", to: "/industries/metal-manufacturing" },
  ],
  "wire-rods": [{ label: "Electrical Components", to: "/industries/electrical-components" }],
} as const satisfies Record<ProductSlug, ReadonlyArray<{ label: string; to: string }>>;
