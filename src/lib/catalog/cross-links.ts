import type { IndustryKey } from "./categories";

/**
 * Cross-navigation between industry pages and product pages.
 * Paths are literal so TanStack Router's typed <Link to=...> accepts them.
 */
export const INDUSTRY_PRODUCTS = {
  metalManufacturing: [
    { label: "Aluminum Billets", key: "billets", to: "/products/billets" },
    { label: "Aluminum Ingots", key: "ingots", to: "/products/ingots" },
    { label: "Profiles & Bars", key: "profilesBars", to: "/products/profiles-bars" },
  ],
  hvacHeatTransfer: [{ label: "Sheets & Coils", key: "sheetsCoils", to: "/products/sheets-coils" }],
  construction: [
    { label: "Sheets & Coils", key: "sheetsCoils", to: "/products/sheets-coils" },
    { label: "Profiles & Bars", key: "profilesBars", to: "/products/profiles-bars" },
  ],
  electricalComponents: [{ label: "Aluminum Wire Rods", key: "wireRods", to: "/products/wire-rods" }],
  heavyIndustry: [
    { label: "Aluminum Pipes", key: "pipes", to: "/products/pipes" },
    { label: "Aluminum Billets", key: "billets", to: "/products/billets" },
    { label: "Profiles & Bars", key: "profilesBars", to: "/products/profiles-bars" },
  ],
  automotive: [
    { label: "Profiles & Bars", key: "profilesBars", to: "/products/profiles-bars" },
    { label: "Sheets & Coils", key: "sheetsCoils", to: "/products/sheets-coils" },
  ],
  foodIndustry: [
    { label: "Sheets & Coils", key: "sheetsCoils", to: "/products/sheets-coils" },
    { label: "Aluminum Discs", key: "discs", to: "/products/discs" },
  ],
  embossedSheetsInsulation: [{ label: "Sheets & Coils", key: "sheetsCoils", to: "/products/sheets-coils" }],
  cookwareDiscBuyers: [{ label: "Aluminum Discs", key: "discs", to: "/products/discs" }],
} as const satisfies Record<IndustryKey, ReadonlyArray<{ label: string; key: string; to: string }>>;

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
    { label: "Heavy Industry", sector: "heavy-industry" },
    { label: "Metal Manufacturing", sector: "metal-manufacturing" },
    { label: "Construction & Architectural", sector: "construction" },
  ],
  "sheets-coils": [
    { label: "HVAC & Heat Transfer", sector: "hvac-heat-transfer" },
    { label: "Construction & Architectural", sector: "construction" },
    { label: "Food Industry", sector: "food-industry" },
    { label: "Embossed Sheets & Insulation", sector: "embossed-sheets-insulation" },
    { label: "Automotive & Transport", sector: "automotive" },
  ],
  discs: [
    { label: "Cookware & Disc Buyers", sector: "cookware-disc-buyers" },
    { label: "Food Industry", sector: "food-industry" },
  ],
  ingots: [{ label: "Metal Manufacturing", sector: "metal-manufacturing" }],
  billets: [
    { label: "Metal Manufacturing", sector: "metal-manufacturing" },
    { label: "Heavy Industry", sector: "heavy-industry" },
  ],
  "profiles-bars": [
    { label: "Construction & Architectural", sector: "construction" },
    { label: "Automotive & Transport", sector: "automotive" },
    { label: "Heavy Industry", sector: "heavy-industry" },
    { label: "Metal Manufacturing", sector: "metal-manufacturing" },
  ],
  "wire-rods": [{ label: "Electrical Components", sector: "electrical-components" }],
} as const satisfies Record<ProductSlug, ReadonlyArray<{ label: string; sector: string }>>;
