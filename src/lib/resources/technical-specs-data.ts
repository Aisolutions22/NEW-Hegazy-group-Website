/**
 * Structured data for /resources/technical-specifications.
 *
 * Every table on that page is a typed array of row objects with stable field
 * keys. The rendered UI is static today, but a future "Filter by product
 * family / alloy series / alloy grade / temper / standard" layer can be built
 * purely on top of these arrays with zero data re-entry — hence the explicit
 * `alloySeries`, `alloyGrade`, `temper`, `productForm`, and `standard` keys on
 * every row that can carry them.
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
    si: "≤ 0.25",
    fe: "≤ 0.40",
    cu: "≤ 0.05",
    mn: "≤ 0.05",
    mg: "≤ 0.05",
    zn: "≤ 0.07",
    other: "Ti ≤ 0.05; Al ≥ 99.50",
    standard: "EN 573-3 / AA",
    footnote: true,
  },
  {
    alloySeries: "3xxx",
    alloyGrade: "3003",
    si: "≤ 0.60",
    fe: "≤ 0.70",
    cu: "0.05 – 0.20",
    mn: "1.00 – 1.50",
    mg: "≤ 0.05",
    zn: "≤ 0.10",
    other: "Others ≤ 0.15 total",
    standard: "EN 573-3 / ASTM B209",
    footnote: true,
  },
  {
    alloySeries: "5xxx",
    alloyGrade: "5005A",
    si: "≤ 0.30",
    fe: "≤ 0.50",
    cu: "≤ 0.05",
    mn: "≤ 0.15",
    mg: "0.70 – 1.10",
    zn: "≤ 0.20",
    other: "Cr ≤ 0.10",
    standard: "EN 573-3",
  },
  {
    alloySeries: "5xxx",
    alloyGrade: "5083",
    si: "≤ 0.40",
    fe: "≤ 0.40",
    cu: "≤ 0.10",
    mn: "0.40 – 1.00",
    mg: "4.00 – 4.90",
    zn: "≤ 0.25",
    other: "Cr 0.05 – 0.25; Ti ≤ 0.15",
    standard: "EN 573-3 / ASTM B209",
  },
  {
    alloySeries: "6xxx",
    alloyGrade: "6082",
    si: "0.70 – 1.30",
    fe: "≤ 0.50",
    cu: "≤ 0.10",
    mn: "0.40 – 1.00",
    mg: "0.60 – 1.20",
    zn: "≤ 0.20",
    other: "Cr ≤ 0.25; Ti ≤ 0.10",
    standard: "EN 573-3 / EN 755",
  },
  {
    alloySeries: "6xxx",
    alloyGrade: "6061",
    si: "0.40 – 0.80",
    fe: "≤ 0.70",
    cu: "0.15 – 0.40",
    mn: "≤ 0.15",
    mg: "0.80 – 1.20",
    zn: "≤ 0.25",
    other: "Cr 0.04 – 0.35; Ti ≤ 0.15",
    standard: "ASTM B221 / EN 573-3",
  },
  {
    alloySeries: "6xxx",
    alloyGrade: "6063",
    si: "0.20 – 0.60",
    fe: "≤ 0.35",
    cu: "≤ 0.10",
    mn: "≤ 0.10",
    mg: "0.45 – 0.90",
    zn: "≤ 0.10",
    other: "Cr ≤ 0.10; Ti ≤ 0.10",
    standard: "EN 573-3 / EN 755",
  },
  {
    alloySeries: "6xxx",
    alloyGrade: "6060",
    si: "0.30 – 0.60",
    fe: "0.10 – 0.30",
    cu: "≤ 0.10",
    mn: "≤ 0.10",
    mg: "0.35 – 0.60",
    zn: "≤ 0.15",
    other: "Cr ≤ 0.05; Ti ≤ 0.10",
    standard: "EN 573-3 / EN 755",
  },
  {
    alloySeries: "7xxx",
    alloyGrade: "7075",
    si: "≤ 0.40",
    fe: "≤ 0.50",
    cu: "1.20 – 2.00",
    mn: "≤ 0.30",
    mg: "2.10 – 2.90",
    zn: "5.10 – 6.10",
    other: "Cr 0.18 – 0.28; Ti ≤ 0.20",
    standard: "ASTM B209 / EN 573-3",
  },
  {
    alloySeries: "8xxx",
    alloyGrade: "—",
    si: "Per grade",
    fe: "Per grade",
    cu: "Per grade",
    mn: "Per grade",
    mg: "Per grade",
    zn: "Per grade",
    other: "Composition confirmed per order",
    standard: "Confirmed per specification",
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
    productForm: "Sheet / coil",
    tensileStrength: "105 – 145 MPa",
    yieldStrength: "≥ 85 MPa",
    elongation: "≥ 2%",
    hardness: "≈ 34 HB",
    standard: "EN 485-2",
  },
  {
    alloy: "3003",
    alloySeries: "3xxx",
    temper: "H14",
    productForm: "Sheet / coil",
    tensileStrength: "145 – 195 MPa",
    yieldStrength: "≥ 125 MPa",
    elongation: "≥ 2%",
    hardness: "≈ 40 HB",
    standard: "EN 485-2 / ASTM B209",
  },
  {
    alloy: "5005A",
    alloySeries: "5xxx",
    temper: "H24",
    productForm: "Sheet / coil",
    tensileStrength: "145 – 185 MPa",
    yieldStrength: "≥ 110 MPa",
    elongation: "≥ 3%",
    hardness: "≈ 43 HB",
    standard: "EN 485-2",
  },
  {
    alloy: "6082",
    alloySeries: "6xxx",
    temper: "T6",
    productForm: "Profile / bar",
    tensileStrength: "≥ 290 MPa",
    yieldStrength: "≥ 250 MPa",
    elongation: "≥ 8%",
    hardness: "≈ 95 HB",
    standard: "EN 755-2",
  },
  {
    alloy: "6061",
    alloySeries: "6xxx",
    temper: "T6",
    productForm: "Profile / bar / pipe",
    tensileStrength: "≥ 260 MPa",
    yieldStrength: "≥ 240 MPa",
    elongation: "≥ 8%",
    hardness: "≈ 95 HB",
    standard: "ASTM B221 / EN 755-2",
  },
  {
    alloy: "6063",
    alloySeries: "6xxx",
    temper: "T66",
    productForm: "Profile",
    tensileStrength: "≥ 245 MPa",
    yieldStrength: "≥ 200 MPa",
    elongation: "≥ 6%",
    hardness: "≈ 75 HB",
    standard: "EN 755-2",
  },
  {
    alloy: "6060",
    alloySeries: "6xxx",
    temper: "T66",
    productForm: "Profile",
    tensileStrength: "≥ 215 MPa",
    yieldStrength: "≥ 160 MPa",
    elongation: "≥ 8%",
    hardness: "≈ 70 HB",
    standard: "EN 755-2",
  },
  {
    alloy: "7075",
    alloySeries: "7xxx",
    temper: "T6",
    productForm: "Plate / bar",
    tensileStrength: "≥ 510 MPa",
    yieldStrength: "≥ 435 MPa",
    elongation: "≥ 5%",
    hardness: "≈ 150 HB",
    standard: "ASTM B209 / B221",
  },
  {
    alloy: "Other grades",
    alloySeries: "—",
    temper: "Per order",
    productForm: "Per order",
    tensileStrength: "Confirmed per specification",
    yieldStrength: "Confirmed per specification",
    elongation: "Confirmed per specification",
    hardness: "Confirmed per specification",
    standard: "Confirmed per specification",
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
  { key: "w1500", label: "> 1000 – 1500" },
  { key: "w2000", label: "> 1500 – 2000" },
  { key: "w2500", label: "> 2000 – 2500" },
  { key: "w3000", label: "> 2500 – 3000" },
  { key: "w3500", label: "> 3000 – 3500" },
];

export type ThicknessToleranceRow = {
  thicknessBand: string;
  /** `${widthKey}_I` / `${widthKey}_II` → ± tolerance in mm, or "—". */
  values: Record<string, string>;
};

const t = (
  thicknessBand: string,
  pairs: Array<[string, string] | null>,
): ThicknessToleranceRow => {
  const values: Record<string, string> = {};
  THICKNESS_TOLERANCE_WIDTH_BANDS.forEach((b, i) => {
    const p = pairs[i];
    values[`${b.key}_I`] = p ? p[0] : "—";
    values[`${b.key}_II`] = p ? p[1] : "—";
  });
  return { thicknessBand, values };
};

/** EN 485-4:1993 thickness tolerances (±, mm) — shared by coils and sheets/plates. */
export const THICKNESS_TOLERANCES: ThicknessToleranceRow[] = [
  t("0.20 – 0.4", [["0.03", "0.04"], ["0.04", "0.05"], null, null, null, null]),
  t("> 0.4 – 0.8", [["0.04", "0.05"], ["0.05", "0.06"], ["0.06", "0.07"], null, null, null]),
  t("> 0.8 – 1.5", [["0.05", "0.06"], ["0.06", "0.07"], ["0.07", "0.08"], ["0.08", "0.09"], null, null]),
  t("> 1.5 – 3", [["0.07", "0.08"], ["0.08", "0.09"], ["0.09", "0.10"], ["0.10", "0.12"], ["0.12", "0.14"], null]),
  t("> 3 – 6", [["0.10", "0.12"], ["0.12", "0.14"], ["0.14", "0.16"], ["0.16", "0.18"], ["0.18", "0.20"], ["0.20", "0.22"]]),
  t("> 6 – 12", [["0.15", "0.18"], ["0.18", "0.20"], ["0.20", "0.23"], ["0.23", "0.26"], ["0.26", "0.30"], ["0.30", "0.34"]]),
  t("> 12 – 25", [["0.25", "0.30"], ["0.30", "0.35"], ["0.35", "0.40"], ["0.40", "0.45"], ["0.45", "0.50"], ["0.50", "0.55"]]),
  t("> 25 – 40", [["0.45", "0.50"], ["0.50", "0.55"], ["0.55", "0.60"], ["0.60", "0.70"], ["0.70", "0.80"], ["0.80", "0.90"]]),
  t("> 40 – 50", [["0.60", "0.70"], ["0.70", "0.80"], ["0.80", "0.90"], ["0.90", "1.00"], ["1.00", "1.10"], ["1.10", "1.20"]]),
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
    meaning: "As fabricated — no special control over thermal or work-hardening conditions.",
    effect: "Properties not guaranteed; varies with the fabrication route.",
    productForms: "Billets, ingots, extrusions, forgings",
  },
  {
    temper: "O",
    meaning: "Annealed — fully softened condition.",
    effect: "Lowest strength, highest ductility and formability.",
    productForms: "Sheets, coils, discs, plates",
  },
  {
    temper: "H",
    meaning: "Strain-hardened (cold-worked), with optional partial annealing (e.g. H14, H24).",
    effect: "Higher strength and lower elongation as the H-number rises.",
    productForms: "Sheets, coils, discs, wire rod",
  },
  {
    temper: "W",
    meaning: "Solution heat-treated — unstable, applies only to alloys that naturally age.",
    effect: "Transitional condition; properties change over time after quenching.",
    productForms: "Heat-treatable plates, profiles, bars",
  },
  {
    temper: "T",
    meaning: "Solution heat-treated and aged (e.g. T5, T6, T66).",
    effect: "Highest and most stable strength for heat-treatable alloys.",
    productForms: "Profiles, bars, pipes, plates",
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
    aa: "AA 1050",
    astm: "ASTM B209",
    en: "EN AW-1050A / EN 485",
    iso: "ISO 209 Al 99.5",
    productForm: "Sheet, coil, disc",
    notes: "Commercially pure; high conductivity and formability.",
  },
  {
    alloy: "3003",
    alloySeries: "3xxx",
    aa: "AA 3003",
    astm: "ASTM B209",
    en: "EN AW-3003 / EN 485",
    iso: "ISO 209 Al Mn1Cu",
    productForm: "Sheet, coil, tube",
    notes: "General-purpose; widely used for HVAC and roofing.",
  },
  {
    alloy: "5005A",
    alloySeries: "5xxx",
    aa: "AA 5005",
    astm: "ASTM B209",
    en: "EN AW-5005A / EN 485",
    iso: "ISO 209 Al Mg1",
    productForm: "Sheet, coil",
    notes: "Good anodising response for architectural finishes.",
  },
  {
    alloy: "5083",
    alloySeries: "5xxx",
    aa: "AA 5083",
    astm: "ASTM B209 / B928",
    en: "EN AW-5083 / EN 485",
    iso: "ISO 209 Al Mg4.5Mn0.7",
    productForm: "Plate, sheet",
    notes: "Marine-grade corrosion resistance; weldable.",
  },
  {
    alloy: "6082",
    alloySeries: "6xxx",
    aa: "AA 6082",
    astm: "—",
    en: "EN AW-6082 / EN 755",
    iso: "ISO 209 Al Si1MgMn",
    productForm: "Profile, bar, plate",
    notes: "Primary European structural extrusion alloy.",
  },
  {
    alloy: "6061",
    alloySeries: "6xxx",
    aa: "AA 6061",
    astm: "ASTM B221 / B209",
    en: "EN AW-6061 / EN 755",
    iso: "ISO 209 Al Mg1SiCu",
    productForm: "Profile, bar, pipe, plate",
    notes: "Structural workhorse in ASTM-driven specifications.",
  },
  {
    alloy: "6063",
    alloySeries: "6xxx",
    aa: "AA 6063",
    astm: "ASTM B221",
    en: "EN AW-6063 / EN 755",
    iso: "ISO 209 Al Mg0.7Si",
    productForm: "Profile, tube",
    notes: "Architectural extrusion alloy; excellent surface finish.",
  },
  {
    alloy: "6060",
    alloySeries: "6xxx",
    aa: "AA 6060",
    astm: "—",
    en: "EN AW-6060 / EN 755",
    iso: "ISO 209 Al MgSi",
    productForm: "Profile",
    notes: "Thin-wall and complex architectural sections.",
  },
  {
    alloy: "7075",
    alloySeries: "7xxx",
    aa: "AA 7075",
    astm: "ASTM B209 / B221",
    en: "EN AW-7075",
    iso: "ISO 209 Al Zn5.5MgCu",
    productForm: "Plate, bar",
    notes: "High strength; limited weldability and formability.",
  },
];

export const STANDARDS_FOOTNOTE =
  "Standards and designations must be confirmed for each product, alloy, temper, and order requirement.";
