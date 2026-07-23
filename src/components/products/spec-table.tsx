import { cn } from "@/lib/utils";

export type SpecRow = {
  /** Left-hand label (first column). */
  label: string;
  /** Value cell — string, node, or array (rendered as line-broken list). */
  value: React.ReactNode;
};

/**
 * Simple two-column responsive spec table.
 *
 * - >= sm: real <table> with borders.
 * - < sm : stacked label/value pairs, one row per card — never a squeezed table.
 */
export function SpecTable({
  rows,
  caption,
  className,
}: {
  rows: SpecRow[];
  caption?: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      {caption ? (
        <div className="mb-3 font-mono text-micro uppercase tracking-caps text-steel-400">
          {caption}
        </div>
      ) : null}

      {/* Desktop / tablet */}
      <table className="hidden w-full border-collapse text-meta sm:table">
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-b border-steel-200 last:border-b-0"
            >
              <th
                scope="row"
                className="w-1/3 py-3 pe-6 text-start align-top text-small font-semibold text-graphite-900"
              >
                {r.label}
              </th>
              <td className="py-3 align-top text-small text-steel-600" data-spec>
                {r.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile — stacked cards */}
      <dl className="grid gap-3 sm:hidden">
        {rows.map((r, i) => (
          <div
            key={i}
            className="rounded-md border border-steel-200 bg-white p-4"
          >
            <dt className="font-mono text-micro uppercase tracking-caps text-steel-400">
              {r.label}
            </dt>
            <dd className="mt-1 text-meta text-graphite-900" data-spec>
              {r.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/**
 * Multi-column data table (>= 3 columns), e.g. the hot-rolled and cold-rolled
 * matrices on the Sheets & Coils page. Renders as a horizontally scrollable
 * table on desktop and as stacked label/value cards on mobile.
 */
export type MatrixColumn = { key: string; label: string };
export type MatrixRow = Record<string, React.ReactNode>;

export function SpecMatrix({
  columns,
  rows,
  caption,
  className,
}: {
  columns: MatrixColumn[];
  rows: MatrixRow[];
  caption?: string;
  className?: string;
}) {
  const [primary, ...rest] = columns;

  return (
    <div className={cn("w-full", className)}>
      {caption ? (
        <h3 className="mb-4 text-xl font-semibold text-graphite-900">
          {caption}
        </h3>
      ) : null}

      {/* Desktop / tablet — real table */}
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full border-collapse text-small">
          <thead>
            <tr className="border-b border-graphite-900 text-start">
              {columns.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  className="py-3 pe-6 text-start font-mono text-micro uppercase tracking-caps text-steel-400"
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-steel-200 last:border-b-0">
                {columns.map((c, idx) => (
                  <td
                    key={c.key}
                    className={cn(
                      "py-3 pe-6 align-top",
                      idx === 0
                        ? "font-semibold text-graphite-900"
                        : "text-steel-600",
                    )}
                    data-spec={idx > 0 ? true : undefined}
                  >
                    {r[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile — stacked cards, one card per row with label/value pairs */}
      <div className="grid gap-3 sm:hidden">
        {rows.map((r, i) => (
          <div
            key={i}
            className="rounded-md border border-steel-200 bg-white p-4"
          >
            {primary ? (
              <div className="mb-3 border-b border-steel-200 pb-2 text-meta font-semibold text-graphite-900">
                {r[primary.key]}
              </div>
            ) : null}
            <dl className="grid gap-2">
              {rest.map((c) => (
                <div key={c.key} className="flex justify-between gap-4">
                  <dt className="font-mono text-micro uppercase tracking-caps text-steel-400">
                    {c.label}
                  </dt>
                  <dd
                    className="text-end text-small text-graphite-900"
                    data-spec
                  >
                    {r[c.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
