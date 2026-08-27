import { Link, useNavigate } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLanguage } from "@/lib/i18n/language-context";
import { PRODUCT_CATEGORIES, INDUSTRIES } from "@/lib/catalog/categories";
import { ArrowRight, Download } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "transparent";

function MenuLink({
  title,
  desc,
  href,
}: {
  title: string;
  desc?: string;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="block rounded-md p-3 transition-colors hover:bg-steel-100 focus-visible:bg-steel-100"
        >
          <div className="text-meta font-semibold text-graphite-900">
            {title}
          </div>
          {desc ? (
            <p className="mt-1 text-legal leading-snug text-steel-600">
              {desc}
            </p>
          ) : null}
        </a>
      </NavigationMenuLink>
    </li>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 px-3 font-mono text-micro uppercase tracking-widest text-steel-400">
      {children}
    </div>
  );
}

export function MegaMenu({ variant = "solid" }: { variant?: Variant }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const triggerBase =
    "bg-transparent text-meta font-medium data-[state=open]:bg-transparent";
  const triggerColors =
    variant === "transparent"
      ? "text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[state=open]:bg-white/10 data-[state=open]:text-white"
      : "text-graphite-900 hover:bg-steel-100 focus:bg-steel-100 data-[state=open]:bg-steel-100";

  const linkColors =
    variant === "transparent"
      ? "text-white/90 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
      : "text-graphite-900 hover:bg-steel-100 focus:bg-steel-100";

  // Split products into 2 columns of ~4 each for balanced layout
  const productsCol1 = PRODUCT_CATEGORIES.slice(0, 4);
  const productsCol2 = PRODUCT_CATEGORIES.slice(4);

  // Split industries into 3 columns of 3 for the industries panel
  const industryCol1 = INDUSTRIES.slice(0, 3);
  const industryCol2 = INDUSTRIES.slice(3, 6);
  const industryCol3 = INDUSTRIES.slice(6, 9);

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-1">
        {/* Products */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(triggerBase, triggerColors)}
            onPointerDown={(e) => e.preventDefault()}
            onClick={() => navigate({ to: "/products" })}
          >
            {t.nav.products}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[820px] grid-cols-4 gap-6 bg-white p-6">
              <div className="col-span-1">
                <ColumnHeading>{t.nav.products}</ColumnHeading>
                <NavigationMenuLink asChild>
                  <a
                    href="/products"
                    className="mb-2 block rounded-md px-3 py-2 text-legal font-semibold text-accent-700 hover:bg-steel-100"
                  >
                    {t.nav.viewAll}
                  </a>
                </NavigationMenuLink>
                <ul className="space-y-1">
                  {productsCol1.map((c) => (
                    <MenuLink
                      key={c.slug}
                      title={t.products[c.titleKey]}
                      href={`/products/${c.slug}`}
                    />
                  ))}
                </ul>
              </div>
              <div className="col-span-1">
                <ColumnHeading>&nbsp;</ColumnHeading>
                <ul className="space-y-1">
                  {productsCol2.map((c) => (
                    <MenuLink
                      key={c.slug}
                      title={t.products[c.titleKey]}
                      href={`/products/${c.slug}`}
                    />
                  ))}
                </ul>
              </div>
              <div className="col-span-2 rounded-md bg-accent-100 p-4">
                <div className="mb-2 font-mono text-micro uppercase tracking-widest text-accent-700">
                  {t.products.catalog}
                </div>
                <p className="text-legal leading-snug text-graphite-800">
                  {t.products.catalogDesc}
                </p>
                <NavigationMenuLink asChild>
                  <a
                    href="/catalog"
                    className="mt-4 inline-flex items-center gap-2 text-legal font-semibold text-accent-700 hover:text-accent-600"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden="true" />
                    {t.products.catalogCta}
                    <ArrowRight
                      className="h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                    />
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Industries */}
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(triggerBase, triggerColors)}
            onPointerDown={(e) => e.preventDefault()}
            onClick={() => navigate({ to: "/industries" })}
          >
            {t.nav.industries}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[720px] bg-white p-6">
              <NavigationMenuLink asChild>
                <a
                  href="/industries"
                  className="mb-2 block rounded-md px-3 py-2 text-legal font-semibold text-accent-700 hover:bg-steel-100"
                >
                  {t.nav.viewAll}
                </a>
              </NavigationMenuLink>
              <div className="grid grid-cols-3 gap-4">
              {[industryCol1, industryCol2, industryCol3].map((col, i) => (
                <ul key={i} className="space-y-1">
                  {col.map((ind) => (
                    <MenuLink
                      key={ind.slug}
                      title={t.industries[ind.titleKey]}
                      href={`/industries/${ind.slug}`}
                    />
                  ))}
                </ul>
              ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {(
          [
            { key: "projects", href: "/projects" },
            { key: "resources", href: "/resources" },
            { key: "about", href: "/about" },
          ] as const
        ).map((i) => (
          <NavigationMenuItem key={i.key}>
            <NavigationMenuLink asChild>
              <Link
                to={i.href as string}
                className={cn(
                  "inline-flex h-9 items-center rounded-md px-3 text-meta font-medium transition-colors",
                  linkColors,
                )}
              >
                {t.nav[i.key]}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
