import pipesAsset from "@/assets/product-details/aluminum-pipes.jpeg.asset.json";
import sheetsCoilsAsset from "@/assets/product-details/aluminum-sheets-coils.jpeg.asset.json";
import discsAsset from "@/assets/product-details/aluminum-discs.jpeg.asset.json";
import ingotsAsset from "@/assets/product-details/aluminum-ingots.jpeg.asset.json";
import billetsAsset from "@/assets/product-details/aluminum-billets.jpeg.asset.json";
import profilesBarsAsset from "@/assets/product-details/aluminum-profiles-bars.jpeg.asset.json";
import wireRodsAsset from "@/assets/product-details/aluminum-wire-rods.jpeg.asset.json";

export const PRODUCT_DETAIL_IMAGES = {
  pipes: { src: pipesAsset.url, width: 1536, height: 1024, alt: "Aluminum pipes" },
  "sheets-coils": { src: sheetsCoilsAsset.url, width: 1600, height: 900, alt: "Aluminum sheets and coils" },
  discs: { src: discsAsset.url, width: 1373, height: 1146, alt: "Aluminum discs" },
  ingots: { src: ingotsAsset.url, width: 1086, height: 1448, alt: "Primary aluminum ingots" },
  billets: { src: billetsAsset.url, width: 900, height: 1600, alt: "Aluminum billets" },
  "profiles-bars": { src: profilesBarsAsset.url, width: 1408, height: 768, alt: "Aluminum profiles and bars" },
  "wire-rods": { src: wireRodsAsset.url, width: 1600, height: 900, alt: "Aluminum wire rods" },
} as const;