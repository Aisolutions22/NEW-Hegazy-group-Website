/**
 * Structured data for /resources/technical-specifications.
 *
 * Every table on that page is a typed array of row objects with stable field
 * keys. The rendered UI is static today, but a future "Filter by product
 * family / alloy series / alloy grade / temper / standard" layer can be built
 * purely on top of these arrays with zero data re-entry.
 *
 * SOURCE OF TRUTH: values below are the certified figures supplied by the
 * company (mill certificates / company technical specifications). Do NOT
 * substitute textbook, rounded, or "typical" reference values.
 */

export type ProductFamily =
  | "sheets-coils"
  | "plates"
  | "discs"
  | "pipes"
  | "profiles"
  | "bars"
  | "billets"
  | "ingots"
  | "wire-rods";

/** Product pages used for inline alloy-series cross-links. */
export const ALLOY_SERIES_LINK: Record<string, string> = {
  "1xxx": "/products/sheets-coils",
  "3xxx": "/products/sheets-coils",
  "5xxx": "/products/sheets-coils",
  "6xxx": "/products/profiles-bars",
  "7xxx": "/products/profiles-bars",
  "8xxx": "/products/sheets-coils",
};

/* ------------------------------------------------------------------ */
/* Section 1 — Chemical composition                                    */
/* ------------------------------------------------------------------ */

export type ChemicalCompositionRow = {
  alloySeries: string;
  alloyGrade: string;
  si: string;
  fe: string;
  cu: string;
  mn: string;
  mg: string;
  zn: string;
  other: string;
  standard: string;
  /** Marks rows covered by the cast-analysis footnote. */
  footnote?: boolean;
};

export const CHEMICAL_COMPOSITION: ChemicalCompositionRow[] = [
  {
    alloySeries: "1xxx",
    alloyGrade: "1050",
    si: "0.06–0.08",
    fe: "0.25–0.27",
    cu: "≤0.0007",
    mn: "≤0.0027",
    mg: "0.0019–0.0044",
    zn: "≤0.0025",
    other: "Ti 0.0187–0.0194; Al ≥99.58",
    standard: "EN 485/515/573, EN 10204-3.1B",
    footnote: true,
  },
  {
    alloySeries: "3xxx",
    alloyGrade: "3003",
    si: "0.16–0.17",
    fe: "0.49–0.52",
    cu: "0.0556–0.0567",
    mn: "1.2289–1.25",
    mg: "0.0137–0.0146",
    zn: "0.0007–0.002",
    other: "Cr ≤0.005; Ti 0.0097–0.0098",
    standard: "EN 485/515/573, EN 10204-3.1B",
    footnote: true,
  },
  {
    alloySeries: "5xxx",
    alloyGrade: "5005A",
    si: "0.14",
    fe: "0.29",
    cu: "0.0032",
    mn: "0.0682",
    mg: "0.8293",
    zn: "0.0017",
    other: "Cr 0.0147; Ti 0.0124",
    standard: "EN 485/515/573, EN 10204-3.1 / EN 15088:2005",
  },
  {
    alloySeries: "5xxx",
    alloyGrade: "5083",
    si: "≤0.25",
    fe: "0.15–0.4",
    cu: "≤0.10",
    mn: "0.70–0.9",
    mg: "4.40–4.7",
    zn: "—",
    other:
      "Cr 0.10–0.2; Ti ≤0.05; Na ≤0.0005; Other (each) ≤0.05, (total) ≤0.15",
    standard: "Company technical specification",
  },
  {
    alloySeries: "6xxx",
    alloyGrade: "6082",
    si: "0.95",
    fe: "0.25",
    cu: "0.04",
    mn: "0.54",
    mg: "0.64",
    zn: "0.04",
    other: "Cr 0.01; Ti 0.01",
    standard: "EN 573-3, EN 755-2",
  },
  {
    alloySeries: "6xxx",
    alloyGrade: "6061",
    si: "0.60",
    fe: "0.35",
    cu: "0.25",
    mn: "0.05",
    mg: "1.00",
    zn: "0.10",
    other: "Cr 0.10; Ti 0.05",
    standard: "EN 573-3, EN 755-2",
  },
  {
    alloySeries: "6xxx",
    alloyGrade: "6063",
    si: "0.20–0.60",
    fe: "0.35",
    cu: "0.05",
    mn: "0.05",
    mg: "0.45–0.46",
    zn: "0.05",
    other: "Cr 0.05; Ti 0.05",
    standard: "EN 573-3, EN 755-2",
  },
  {
    alloySeries: "6xxx",
    alloyGrade: "6060",
    si: "0.42–0.46",
    fe: "0.20–0.22",
    cu: "0.05",
    mn: "0.05",
    mg: "0.42–0.46",
    zn: "0.05",
    other: "Cr 0.05; Ti 0.05",
    standard: "EN 573-3, EN 755-2",
  },
  {
    alloySeries: "7xxx",
    alloyGrade: "7075",
    si: "≤0.40",
    fe: "≤0.50",
    cu: "1.20–2.00",
    mn: "≤0.30",
    mg: "2.10–2.90",
    zn: "5.10–6.10",
    other: "Ti ≤0.20; Cr 0.18–0.28; Zr ≤0.05",
    standard: "EN AW-7075, EN 573-3, EN 755-2",
  },
  {
    alloySeries: "8xxx",
    alloyGrade: "—",
    si: "—",
    fe: "—",
    cu: "—",
    mn: "—",
    mg: "—",
    zn: "—",
    other: "—",
    standard: "Technical values available upon request.",
  },
];

export const CHEMICAL_COMPOSITION_FOOTNOTE =
  "Figures reflect ranges seen across multiple mill certificates for the same grade/temper; individual cast analysis will vary and is confirmed per certificate.";

/* ------------------------------------------------------------------ */
/* Section 2 — Mechanical properties                                   */
/* ------------------------------------------------------------------ */

export type MechanicalPropertyRow = {
  alloy: string;
  alloySeries: string;
  temper: string;
  productForm: string;
  tensileStrength: string;
  yieldStrength: string;
  elongation: string;
  hardness: string;
  standard: string;
};

export const MECHANICAL_PROPERTIES: MechanicalPropertyRow[] = [
  {
    alloy: "1050",
    alloySeries: "1xxx",
    temper: "H14",
    productForm: "Sheet/Coil (0.5–3 mm)",
    tensileStrength: "124–132 MPa",
    yieldStrength: "121–130 MPa",
    elongation: "3–6%",
    hardness: "—",
    standard: "EN 485, EN 10204-3.1B",
  },
  {
    alloy: "3003",
    alloySeries: "3xxx",
    temper: "H14",
    productForm: "Sheet/Coil (3 mm)",
    tensileStrength: "150–155 MPa",
    yieldStrength: "145 MPa",
    elongation: "3–6%",
    hardness: "—",
    standard: "EN 485, EN 10204-3.1B",
  },
  {
    alloy: "5005A",
    alloySeries: "5xxx",
    temper: "H24",
    productForm: "Plate (3×1220×2440 mm)",
    tensileStrength: "166 MPa",
    yieldStrength: "162 MPa",
    elongation: "7%",
    hardness: "—",
    standard: "EN 485/515/573, EN 10204-3.1",
  },
  {
    alloy: "6082",
    alloySeries: "6xxx",
    temper: "T6",
    productForm: "Bar (RB 26)",
    tensileStrength: "≥320 MPa",
    yieldStrength: "≥270 MPa",
    elongation: "≥10%",
    hardness: "≥95 HB",
    standard: "EN 755-2, EN 573-3",
  },
  {
    alloy: "6061",
    alloySeries: "6xxx",
    temper: "T6",
    productForm: "Bar (RB 26)",
    tensileStrength: "≥260 MPa",
    yieldStrength: "≥240 MPa",
    elongation: "≥8%",
    hardness: "≥95 HB",
    standard: "EN 755-2, EN 573-3",
  },
  {
    alloy: "6063",
    alloySeries: "6xxx",
    temper: "T66",
    productForm: "Bar (RB 26)",
    tensileStrength: "≥245 MPa",
    yieldStrength: "≥200 MPa",
    elongation: "≥8%",
    hardness: "≥80 HB",
    standard: "EN 755-2, EN 573-3",
  },
  {
    alloy: "6060",
    alloySeries: "6xxx",
    temper: "T66",
    productForm: "Bar (RB 26)",
    tensileStrength: "≥215 MPa",
    yieldStrength: "≥160 MPa",
    elongation: "≥8%",
    hardness: "≥75 HB",
    standard: "EN 755-2, EN 573-3",
  },
  {
    alloy: "7075",
    alloySeries: "7xxx",
    temper: "T6",
    productForm: "Extruded flat bar 80×50 mm",
    tensileStrength: "≥560 MPa (tested: 651.49)",
    yieldStrength: "≥500 MPa (tested: 600.89)",
    elongation: "≥7% (tested: 7.90%)",
    hardness: "174 HBW (tested)",
    standard: "EN AW-7075, EN 755-2, EN 10204-3.1",
  },
  {
    alloy: "Other grades",
    alloySeries: "—",
    temper: "—",
    productForm: "—",
    tensileStrength: "—",
    yieldStrength: "—",
    elongation: "—",
    hardness: "—",
    standard:
      "Values depend on alloy, temper, product form, and applicable standard. Contact our technical team for confirmed data.",
  },
];

/* ------------------------------------------------------------------ */
/* Section 3 — Dimensional tolerances                                  */
/* ------------------------------------------------------------------ */

export type ToleranceWidthBand = {
  key: string;
  label: string;
};

/** Width bands (mm) — each renders as an Alloy Gr. I / Gr. II column pair. */
export const THICKNESS_TOLERANCE_WIDTH_BANDS: ToleranceWidthBand[] = [
  { key: "w1000", label: "≤ 1000" },
  { key: "w1250", label: "> 1000 – 1250" },
  { key: "w1600", label: "> 1250 – 1600" },
  { key: "w2000", label: "> 1600 – 2000" },
  { key: "w2500", label: "> 2000 – 2500" },
  { key: "w3000", label: "> 2500 – 3000" },
  { key: "w3500", label: "> 3000 – 3500" },
];

export type ThicknessToleranceRow = {
  thicknessBand: string;
  /** `${widthKey}_I` / `${widthKey}_II` → ± tolerance in mm, or "—". */
  values: Record<string, string>;
};

/**
 * `pairs` is one entry per width band, in band order:
 *  - [I, II] → distinct Gr. I / Gr. II values
 *  - single string → value applies to both Gr. I and Gr. II
 *  - null → not applicable
 */
const t = (
  thicknessBand: string,
  pairs: Array<[string, string] | string | null>,
): ThicknessToleranceRow => {
  const values: Record<string, string> = {};
  THICKNESS_TOLERANCE_WIDTH_BANDS.forEach((b, i) => {
    const p = pairs[i] ?? null;
    const [a, bb] = p === null ? ["—", "—"] : typeof p === "string" ? [p, p] : p;
    values[`${b.key}_I`] = a;
    values[`${b.key}_II`] = bb;
  });
  return { thicknessBand, values };
};

/** EN 485-4:1993 thickness tolerances (±, mm) — shared by coils and sheets/plates. */
export const THICKNESS_TOLERANCES: ThicknessToleranceRow[] = [
  t("0.20 – 0.4", [["±0.02", "±0.03"], ["±0.04", "±0.05"], ["±0.05", "±0.06"], null, null, null, null]),
  t("0.4 – 0.5", [["±0.03", "±0.03"], ["±0.04", "±0.05"], ["±0.05", "±0.06"], ["±0.06", "±0.07"], "±0.10", null, null]),
  t("0.5 – 0.6", [["±0.03", "±0.04"], ["±0.05", "±0.06"], ["±0.06", "±0.07"], ["±0.07", "±0.08"], "±0.11", null, null]),
  t("0.6 – 0.8", [["±0.03", "±0.04"], ["±0.06", "±0.07"], ["±0.07", "±0.08"], ["±0.08", "±0.09"], "±0.12", null, null]),
  t("0.8 – 1.0", [["±0.04", "±0.05"], ["±0.06", "±0.08"], ["±0.08", "±0.09"], ["±0.09", "±0.10"], "±0.13", null, null]),
  t("1.0 – 1.2", [["±0.04", "±0.05"], ["±0.07", "±0.09"], ["±0.09", "±0.10"], ["±0.10", "±0.12"], "±0.14", null, null]),
  t("1.2 – 1.5", [["±0.05", "±0.07"], ["±0.09", "±0.11"], ["±0.10", "±0.12"], ["±0.11", "±0.14"], "±0.16", null, null]),
  t("1.5 – 1.8", [["±0.06", "±0.08"], ["±0.10", "±0.12"], ["±0.11", "±0.13"], ["±0.12", "±0.15"], "±0.17", null, null]),
  t("1.8 – 2.0", [["±0.06", "±0.09"], ["±0.11", "±0.13"], ["±0.12", "±0.14"], ["±0.14", "±0.16"], "±0.19", null, null]),
  t("2.0 – 2.5", [["±0.07", "±0.10"], ["±0.12", "±0.14"], ["±0.13", "±0.15"], ["±0.15", "±0.17"], "±0.20", null, null]),
  t("2.5 – 3.0", [["±0.08", "±0.11"], ["±0.13", "±0.15"], ["±0.15", "±0.17"], ["±0.17", "±0.19"], "±0.23", null, null]),
  t("3.0 – 3.5", [["±0.10", "±0.12"], ["±0.15", "±0.17"], ["±0.17", "±0.19"], ["±0.18", "±0.20"], "±0.24", null, null]),
  t("3.5 – 4.0", ["±0.15", "±0.20", "±0.22", "±0.23", "±0.25", "±0.34", "±0.38"]),
  t("4.0 – 5.0", ["±0.18", "±0.22", "±0.24", "±0.25", "±0.29", "±0.36", "±0.42"]),
  t("5.0 – 6.0", ["±0.20", "±0.24", "±0.25", "±0.26", "±0.32", "±0.40", "±0.46"]),
  t("6.0 – 8.0", ["±0.24", "±0.30", "±0.31", "±0.32", "±0.38", "±0.44", "±0.50"]),
  t("8.0 – 10", ["±0.27", "±0.33", "±0.36", "±0.38", "±0.44", "±0.50", "±0.56"]),
  t("10 – 12", ["±0.32", "±0.38", "±0.40", "±0.41", "±0.47", "±0.53", "±0.59"]),
  t("12 – 15", ["±0.36", "±0.42", "±0.43", "±0.45", "±0.51", "±0.57", "±0.63"]),
  t("15 – 20", ["±0.38", "±0.44", "±0.46", "±0.48", "±0.54", "±0.60", "±0.66"]),
  t("20 – 25", ["±0.40", "±0.46", "±0.48", "±0.50", "±0.56", "±0.62", "±0.68"]),
  t("25 – 30", ["±0.45", "±0.50", "±0.53", "±0.55", "±0.60", "±0.65", "±0.70"]),
  t("30 – 40", ["±0.50", "±0.55", "±0.58", "±0.60", "±0.65", "±0.70", "±0.75"]),
  t("40 – 50", ["±0.55", "±0.60", "±0.63", "±0.65", "±0.70", "±0.75", "±0.80"]),
];

export const THICKNESS_TOLERANCE_FOOTNOTE =
  "When measuring thickness, a 10 mm zone from the product edges is disregarded (EN 485-4:1993).";

export const TOLERANCE_CONFIRMED_LINE =
  "Tolerance values are confirmed according to the selected product specification and applicable standard.";

export type ToleranceTab = {
  key: string;
  label: string;
  standard?: string;
  /** Renders the shared EN 485-4 thickness matrix. */
  showThicknessMatrix: boolean;
  attributes: Array<{ label: string; value: string }>;
};

export const TOLERANCE_TABS: ToleranceTab[] = [
  {
    key: "coils",
    label: "Coils",
    standard: "EN 485-4:1993",
    showThicknessMatrix: true,
    attributes: [
      { label: "Width", value: TOLERANCE_CONFIRMED_LINE },
      {
        label: "Length",
        value: "Not applicable — coils are supplied continuous / by weight, not cut length.",
      },
      { label: "Straightness", value: TOLERANCE_CONFIRMED_LINE },
    ],
  },
  {
    key: "sheets-plates",
    label: "Sheets & Plates",
    standard: "EN 485-4:1993",
    showThicknessMatrix: true,
    attributes: [
      { label: "Width", value: TOLERANCE_CONFIRMED_LINE },
      { label: "Length", value: TOLERANCE_CONFIRMED_LINE },
      { label: "Straightness", value: TOLERANCE_CONFIRMED_LINE },
    ],
  },
  {
    key: "pipes-tubes",
    label: "Pipes & Tubes",
    showThicknessMatrix: false,
    attributes: [{ label: "Tolerances", value: TOLERANCE_CONFIRMED_LINE }],
  },
  {
    key: "profiles",
    label: "Profiles",
    showThicknessMatrix: false,
    attributes: [{ label: "Tolerances", value: TOLERANCE_CONFIRMED_LINE }],
  },
  {
    key: "bars-rods",
    label: "Bars & Rods",
    showThicknessMatrix: false,
    attributes: [{ label: "Tolerances", value: TOLERANCE_CONFIRMED_LINE }],
  },
];

/* ------------------------------------------------------------------ */
/* Section 4 — Temper designations                                     */
/* ------------------------------------------------------------------ */

export type TemperRow = {
  temper: string;
  meaning: string;
  effect: string;
  productForms: string;
};

export const TEMPER_DESIGNATIONS: TemperRow[] = [
  {
    temper: "F",
    meaning:
      "As fabricated — no special control over strain-hardening or heat treatment",
    effect:
      "Properties not guaranteed, depend entirely on the forming process",
    productForms: "Any product form, as it comes off the mill/press",
  },
  {
    temper: "O",
    meaning: "Annealed / fully soft condition",
    effect: "Lowest strength, highest ductility and formability",
    productForms: "Sheet, coil",
  },
  {
    temper: "H",
    meaning: "Strain-hardened (work-hardened, non-heat-treatable alloys)",
    effect:
      "Strength increases, ductility decreases, with sub-classes (e.g. H14, H24) indicating degree of hardening",
    productForms: "Sheet, coil, plate",
  },
  {
    temper: "W",
    meaning: "Solution heat-treated — unstable temper",
    effect:
      "Applies only between solution treatment and natural/artificial ageing; properties change over time",
    productForms: "Heat-treatable alloys in transit to a T temper",
  },
  {
    temper: "T",
    meaning:
      "Thermally treated (heat-treatable alloys), with sub-classes (e.g. T6, T66) indicating the specific heat-treatment/ageing sequence",
    effect:
      "Higher strength and hardness versus as-fabricated condition; exact levels depend on alloy and process",
    productForms: "Extruded bar, profiles, plate",
  },
];

export const TEMPER_FOOTNOTE =
  "Temper availability depends on the alloy, product form, supplier, and order requirements.";

/* ------------------------------------------------------------------ */
/* Section 5 — Standards cross-reference                               */
/* ------------------------------------------------------------------ */

export type StandardsCrossRefRow = {
  alloy: string;
  alloySeries: string;
  aa: string;
  astm: string;
  en: string;
  iso: string;
  productForm: string;
  notes: string;
};

export const STANDARDS_CROSS_REFERENCE: StandardsCrossRefRow[] = [
  {
    alloy: "1050",
    alloySeries: "1xxx",
    aa: "AA1050",
    astm: "—",
    en: "EN AW-1050, EN 485/515/573",
    iso: "—",
    productForm: "Sheet/Coil",
    notes: "Certified per EN 10204-3.1B",
  },
  {
    alloy: "3003",
    alloySeries: "3xxx",
    aa: "AA3003",
    astm: "—",
    en: "EN AW-3003, EN 485/515/573",
    iso: "—",
    productForm: "Sheet/Coil",
    notes: "Certified per EN 10204-3.1B",
  },
  {
    alloy: "5005A",
    alloySeries: "5xxx",
    aa: "AA5005A",
    astm: "—",
    en: "EN AW-5005A, EN 485/515/573",
    iso: "—",
    productForm: "Plate",
    notes: "EN 10204-3.1 / EN 15088:2005",
  },
  {
    alloy: "5083",
    alloySeries: "5xxx",
    aa: "AA5083",
    astm: "—",
    en: "EN AW-5083",
    iso: "—",
    productForm: "Coil/Sheet",
    notes: "Composition per company spec",
  },
  {
    alloy: "6082",
    alloySeries: "6xxx",
    aa: "AA6082",
    astm: "—",
    en: "EN AW-6082, EN 573-3, EN 755-2",
    iso: "—",
    productForm: "Bar/Extrusion",
    notes: "T6 temper",
  },
  {
    alloy: "6061",
    alloySeries: "6xxx",
    aa: "AA6061",
    astm: "—",
    en: "EN AW-6061, EN 573-3, EN 755-2",
    iso: "—",
    productForm: "Bar/Extrusion",
    notes: "T6 temper",
  },
  {
    alloy: "6063",
    alloySeries: "6xxx",
    aa: "AA6063",
    astm: "—",
    en: "EN AW-6063, EN 573-3, EN 755-2",
    iso: "—",
    productForm: "Bar/Extrusion",
    notes: "T66 temper",
  },
  {
    alloy: "6060",
    alloySeries: "6xxx",
    aa: "AA6060",
    astm: "—",
    en: "EN AW-6060, EN 573-3, EN 755-2",
    iso: "—",
    productForm: "Bar/Extrusion",
    notes: "T66 temper",
  },
  {
    alloy: "7075",
    alloySeries: "7xxx",
    aa: "AA7075",
    astm: "—",
    en: "EN AW-7075, EN 573-3, EN 755-2, EN 755-5",
    iso: "—",
    productForm: "Extruded flat bar",
    notes: "T6 temper, certified per EN 10204-3.1",
  },
];

export const STANDARDS_FOOTNOTE =
  "Standards and designations must be confirmed for each product, alloy, temper, and order requirement.";
