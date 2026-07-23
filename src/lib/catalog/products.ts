/**
 * Legacy stub kept only for typing compatibility with older imports. Real
 * catalog structure lives in `./categories.ts`. The SKU-level `PRODUCTS`
 * array and filter groups were removed when the taxonomy shifted from
 * individual SKUs to seven product-family landing pages.
 */
export type ProductSummary = {
  slug: string;
  category: string;
  categoryLabel: string;
  name: string;
  code: string;
  alloy: string;
  temper: string;
  finish: string;
  availability: "in-stock" | "on-request";
};
