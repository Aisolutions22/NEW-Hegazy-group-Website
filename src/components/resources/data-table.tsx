import { Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Cross-links inside the resource data modules are stored as plain path
 * strings so the data stays serialisable and filter-friendly. TanStack's typed
 * <Link> can't infer those at compile time, so this thin wrapper narrows once.
 */
export function DataLink({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      className={cn(
        "underline decoration-steel-200 underline-offset-4 hover:decoration-graphite-900",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export type Column<Row> = {
  key: string;
  label: string;
  /** Renders the cell; defaults to the row value under `key`. */
  render?: (row: Row) => React.ReactNode;
  /** First column is emphasised and sticky-free but bolder. */
  primary?: boolean;
};

/**
 * Wide reference table. Always a real <table>, horizontally scrollable on
 * narrow viewports so the matrix stays readable instead of being squeezed.
 */
export function ScrollTable<Row>({
  columns,
  rows,
  caption,
  footnote,
  className,
}: {
  columns: Column<Row>[];
  rows: Row[];
  caption?: string;
  footnote?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      {caption ? (
        <h3 className="mb-4 text-xl font-semibold text-graphite-900">{caption}</h3>
      ) : null}

      <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
        <table className="w-full min-w-[720px] border-collapse text-small">
          <thead>
            <tr className="border-b border-graphite-900">
              {columns.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  className="whitespace-nowrap py-3 pe-6 text-start font-mono text-micro uppercase tracking-caps text-steel-400"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-steel-200 last:border-b-0">
                {columns.map((c, idx) => (
                  <td
                    key={c.key}
                    className={cn(
                      "py-3 pe-6 align-top",
                      idx === 0 || c.primary
                        ? "font-semibold text-graphite-900"
                        : "text-steel-600",
                    )}
                    data-spec={idx > 0 ? true : undefined}
                  >
                    {c.render
                      ? c.render(row)
                      : ((row as Record<string, React.ReactNode>)[c.key] ?? "—")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {footnote ? (
        <p className="mt-3 text-meta leading-relaxed text-steel-500">{footnote}</p>
      ) : null}
    </div>
  );
}

/** Primary-style PDF download button used under the header and near the CTAs. */
export function DownloadPdfButton({
  href,
  label = "Download PDF",
  className,
  tone = "dark",
}: {
  href: string;
  label?: string;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <a
      href={href}
      download
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-meta font-medium transition-colors",
        tone === "light"
          ? "bg-white text-graphite-900 hover:bg-offwhite-50"
          : "bg-graphite-900 text-white hover:bg-graphite-800",
        className,
      )}
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}

/** Shared bottom CTA row for both resource pages. */
export function ResourceCtas() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        to="/contact"
        className="inline-flex h-11 items-center justify-center rounded-md bg-graphite-900 px-5 text-meta font-medium text-white hover:bg-graphite-800"
      >
        Request a Technical Data Sheet
      </Link>
      <Link
        to="/quote"
        className="inline-flex h-11 items-center justify-center rounded-md border border-steel-200 bg-white px-5 text-meta font-medium text-graphite-900 hover:border-graphite-900"
      >
        Request a Quote
      </Link>
      <Link
        to="/contact"
        className="inline-flex h-11 items-center justify-center rounded-md border border-steel-200 bg-white px-5 text-meta font-medium text-graphite-900 hover:border-graphite-900"
      >
        Contact Our Technical Team
      </Link>
    </div>
  );
}
