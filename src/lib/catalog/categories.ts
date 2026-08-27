import type { Strings } from "@/lib/i18n/strings.en";
import aluminumPipesImage from "@/assets/products/aluminum-pipes.webp";
import aluminumSheetsCoilsImage from "@/assets/products/aluminum-sheets-coils.webp";
import aluminumDiscsImage from "@/assets/products/aluminum-discs.webp";
import aluminumIngotsImage from "@/assets/products/aluminum-ingots.webp";
import aluminumProfilesBarsImage from "@/assets/products/aluminum-profiles-bars.webp";
import aluminumWireRodsImage from "@/assets/products/aluminum-wire-rods.webp";
import aluminumBilletsImage from "@/assets/products/aluminum-billets.webp";

import indMetalManufacturingImage from "@/assets/industries/metal-manufacturing.webp";
import indHvacHeatTransferImage from "@/assets/industries/hvac-heat-transfer.webp";
import indConstructionImage from "@/assets/industries/construction.webp";
import indElectricalComponentsImage from "@/assets/industries/electrical-components.webp";
import indHeavyIndustryImage from "@/assets/industries/heavy-industry.webp";
import indAutomotiveImage from "@/assets/industries/automotive.webp";
import indFoodIndustryImage from "@/assets/industries/food-industry.webp";
import indEmbossedSheetsInsulationImage from "@/assets/industries/embossed-sheets-insulation.webp";
import indCookwareDiscBuyersImage from "@/assets/industries/cookware-disc-buyers.webp";

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
  titleKey: keyof Strings["products"];
  descKey: keyof Strings["products"];
  image?: string;
}> = [
  { key: "pipes", slug: "pipes", titleKey: "pipes", descKey: "pipesDesc", image: aluminumPipesImage },
  { key: "sheetsCoils", slug: "sheets-coils", titleKey: "sheetsCoils", descKey: "sheetsCoilsDesc", image: aluminumSheetsCoilsImage },
  { key: "discs", slug: "discs", titleKey: "discs", descKey: "discsDesc", image: aluminumDiscsImage },
  { key: "ingots", slug: "ingots", titleKey: "ingots", descKey: "ingotsDesc", image: aluminumIngotsImage },
  { key: "billets", slug: "billets", titleKey: "billets", descKey: "billetsDesc", image: aluminumBilletsImage },
  { key: "profilesBars", slug: "profiles-bars", titleKey: "profilesBars", descKey: "profilesBarsDesc", image: aluminumProfilesBarsImage },
  { key: "wireRods", slug: "wire-rods", titleKey: "wireRods", descKey: "wireRodsDesc", image: aluminumWireRodsImage },
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
  image: string;
}> = [
  { key: "metalManufacturing", slug: "metal-manufacturing", titleKey: "metalManufacturing", descKey: "metalManufacturingDesc", image: indMetalManufacturingImage },
  { key: "hvacHeatTransfer", slug: "hvac-heat-transfer", titleKey: "hvacHeatTransfer", descKey: "hvacHeatTransferDesc", image: indHvacHeatTransferImage },
  { key: "construction", slug: "construction", titleKey: "construction", descKey: "constructionDesc", image: indConstructionImage },
  { key: "electricalComponents", slug: "electrical-components", titleKey: "electricalComponents", descKey: "electricalComponentsDesc", image: indElectricalComponentsImage },
  { key: "heavyIndustry", slug: "heavy-industry", titleKey: "heavyIndustry", descKey: "heavyIndustryDesc", image: indHeavyIndustryImage },
  { key: "automotive", slug: "automotive", titleKey: "automotive", descKey: "automotiveDesc", image: indAutomotiveImage },
  { key: "foodIndustry", slug: "food-industry", titleKey: "foodIndustry", descKey: "foodIndustryDesc", image: indFoodIndustryImage },
  { key: "embossedSheetsInsulation", slug: "embossed-sheets-insulation", titleKey: "embossedSheetsInsulation", descKey: "embossedSheetsInsulationDesc", image: indEmbossedSheetsInsulationImage },
  { key: "cookwareDiscBuyers", slug: "cookware-disc-buyers", titleKey: "cookwareDiscBuyers", descKey: "cookwareDiscBuyersDesc", image: indCookwareDiscBuyersImage },
];

export function slugToIndustryKey(slug: string): IndustryKey | null {
  return INDUSTRIES.find((i) => i.slug === slug)?.key ?? null;
}

export function slugToCategoryKey(slug: string): ProductCategoryKey | null {
  return PRODUCT_CATEGORIES.find((c) => c.slug === slug)?.key ?? null;
}

export function getProductCategory(slug: string) {
  return PRODUCT_CATEGORIES.find((c) => c.slug === slug) ?? null;
}
