import type { Strings } from "@/lib/i18n/strings.en";

/**
 * Resource-library structure. Copy lives in the i18n dictionaries
 * (`resourcesLibrary`); only keys and hrefs are structural and stay here so
 * /resources and its detail pages share one source of truth.
 */

export type ResourceGroup = { label?: string; items: string[] };

export type ResourceCard = {
  key: ResourceKey;
  title: string;
  body: string;
  listHeading: string;
  groups: ResourceGroup[];
  meta?: string;
  cta: string;
  href: string;
};

export type ResourceKey = "catalog" | "specs" | "guides" | "faq";

export const RESOURCE_ORDER: ResourceKey[] = ["catalog", "specs", "guides", "faq"];

export const RESOURCE_HREFS: Record<ResourceKey, string> = {
  catalog: "/resources/catalog",
  specs: "/resources/technical-specs",
  guides: "/resources/guides",
  faq: "/faq",
};

export function getResourceCard(t: Strings, key: ResourceKey): ResourceCard {
  const c = t.resourcesLibrary.cards[key];
  return {
    key,
    title: c.title,
    body: c.body,
    listHeading: c.listHeading,
    meta: c.meta || undefined,
    cta: c.cta,
    href: RESOURCE_HREFS[key],
    groups: c.groups.map((g) => ({
      label: g.label || undefined,
      items: [...g.items],
    })),
  };
}

export function getResourceCards(t: Strings): ResourceCard[] {
  return RESOURCE_ORDER.map((k) => getResourceCard(t, k));
}
