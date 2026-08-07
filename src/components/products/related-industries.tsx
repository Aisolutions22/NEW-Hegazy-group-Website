import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PRODUCT_INDUSTRIES, type ProductSlug } from "@/lib/catalog/cross-links";

/**
 * "Related industries" strip appended to each product-family page. Uses the
 * same compact pill/link styling as the industry pages' relevant-products list.
 */
export function RelatedIndustries({ slug }: { slug: ProductSlug }) {
  const items = PRODUCT_INDUSTRIES[slug];
  return (
    <section className="mt-12 border-t border-graphite-900 pt-6">
      <div className="mb-4 font-mono text-micro uppercase tracking-caps text-steel-400">
        Related industries
      </div>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="inline-flex items-center gap-2 rounded-md border border-steel-200 bg-white px-3 py-2 text-meta text-graphite-900 transition-colors hover:border-graphite-900"
            >
              {item.label}
              <ArrowRight className="h-3.5 w-3.5 text-steel-400 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
