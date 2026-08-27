import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Section } from "./section";
import { useLanguage } from "@/lib/i18n/language-context";
import { cn } from "@/lib/utils";

export type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
  origin?: string;
  className?: string;
};

const DEFAULT_ORIGIN = "https://hegazy-group.lovable.app";

export function Breadcrumbs({ items, origin = DEFAULT_ORIGIN, className }: Props) {
  const { t, dir } = useLanguage();
  const home: Crumb = { label: t.breadcrumbs.home, href: "/" };
  const trail: Crumb[] = [home, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href && i < trail.length - 1
        ? { item: `${origin}${c.href}` }
        : {}),
    })),
  };

  return (
    <Section
      as="nav"
      aria-label={t.breadcrumbs.label}
      py="16px"
      className={cn("border-b border-steel-200 bg-offwhite-50", className)}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-legal text-steel-600">
        {trail.map((c, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="inline-flex items-center gap-2">
              {i > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  className={cn(
                    "h-3.5 w-3.5 shrink-0 text-steel-400",
                    dir === "rtl" && "rotate-180",
                  )}
                />
              )}
              {isLast || !c.href ? (
                <span aria-current="page" className="font-medium text-graphite-900">
                  {c.label}
                </span>
              ) : (
                <Link to={c.href} className="hover:text-graphite-900 hover:underline">
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Section>
  );
}
