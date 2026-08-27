import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { HomeHero, heroLcpPreloadHref } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { ProductCategoryGrid } from "@/components/home/product-grid";
import { IndustriesGrid } from "@/components/home/industries-grid";
import { WhyHegazy } from "@/components/home/why-hegazy";
import { StandardsCompliance } from "@/components/home/standards";
import { FinalCta } from "@/components/home/final-cta";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "canonical", href: "https://hegazy-group.lovable.app/" },
      {
        rel: "preload",
        as: "image",
        href: heroLcpPreloadHref,
        type: "image/avif",
        fetchpriority: "high",
      },
    ],
    meta: [
      { property: "og:url", content: "https://hegazy-group.lovable.app/" },
      {
        property: "og:image",
        content: "https://hegazy-group.lovable.app/og-hegazy-group.jpg",
      },
      {
        name: "twitter:image",
        content: "https://hegazy-group.lovable.app/og-hegazy-group.jpg",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteHeader variant="transparent" />
      <main id="main-content">
        <HomeHero />
        <ProductCategoryGrid />
        <StatsBar />
        <IndustriesGrid />
        <WhyHegazy />
        <StandardsCompliance />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
