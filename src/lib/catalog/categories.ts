import type { Strings } from "@/lib/i18n/strings.en";

export type ProductCategoryKey =
  | "pipes"
  | "sheetsCoils"
  | "discs"
  | "ingots"
  | "billets"
  | "profilesBars"
  | "wireRods";

/** Ordered list matching the client's requested 01–07 sequence. */
export const PRODUCT_CATEGORIES: Array<{
  key: ProductCategoryKey;
  slug: string;
  /** i18n keys in `t.products` */
  titleKey: keyof Strings["products"];
  descKey: keyof Strings["products"];
}> = [
  { key: "pipes", slug: "pipes", titleKey: "pipes", descKey: "pipesDesc" },
  { key: "sheetsCoils", slug: "sheets-coils", titleKey: "sheetsCoils", descKey: "sheetsCoilsDesc" },
  { key: "discs", slug: "discs", titleKey: "discs", descKey: "discsDesc" },
  { key: "ingots", slug: "ingots", titleKey: "ingots", descKey: "ingotsDesc" },
  { key: "billets", slug: "billets", titleKey: "billets", descKey: "billetsDesc" },
  { key: "profilesBars", slug: "profiles-bars", titleKey: "profilesBars", descKey: "profilesBarsDesc" },
  { key: "wireRods", slug: "wire-rods", titleKey: "wireRods", descKey: "wireRodsDesc" },
];

export type IndustryKey =
  | "metalManufacturing"
  | "hvacHeatTransfer"
  | "construction"
  | "electricalComponents"
  | "heavyIndustry"
  | "automotive"
  | "foodIndustry"
  | "embossedSheetsInsulation"
  | "cookwareDiscBuyers";

export const INDUSTRIES: Array<{
  key: IndustryKey;
  slug: string;
  titleKey: keyof Strings["industries"];
  descKey: keyof Strings["industries"];
}> = [
  { key: "metalManufacturing", slug: "metal-manufacturing", titleKey: "metalManufacturing", descKey: "metalManufacturingDesc" },
  { key: "hvacHeatTransfer", slug: "hvac-heat-transfer", titleKey: "hvacHeatTransfer", descKey: "hvacHeatTransferDesc" },
  { key: "construction", slug: "construction", titleKey: "construction", descKey: "constructionDesc" },
  { key: "electricalComponents", slug: "electrical-components", titleKey: "electricalComponents", descKey: "electricalComponentsDesc" },
  { key: "heavyIndustry", slug: "heavy-industry", titleKey: "heavyIndustry", descKey: "heavyIndustryDesc" },
  { key: "automotive", slug: "automotive", titleKey: "automotive", descKey: "automotiveDesc" },
  { key: "foodIndustry", slug: "food-industry", titleKey: "foodIndustry", descKey: "foodIndustryDesc" },
  { key: "embossedSheetsInsulation", slug: "embossed-sheets-insulation", titleKey: "embossedSheetsInsulation", descKey: "embossedSheetsInsulationDesc" },
  { key: "cookwareDiscBuyers", slug: "cookware-disc-buyers", titleKey: "cookwareDiscBuyers", descKey: "cookwareDiscBuyersDesc" },
];

export function slugToIndustryKey(slug: string): IndustryKey | null {
  return INDUSTRIES.find((i) => i.slug === slug)?.key ?? null;
}

export function slugToCategoryKey(slug: string): ProductCategoryKey | null {
  return PRODUCT_CATEGORIES.find((c) => c.slug === slug)?.key ?? null;
}
