/**
 * Single source of truth for company legal name and contact channels.
 * Display brand stays "Hegazy Group"; LEGAL_NAME is for schema/legal contexts only.
 */
export const LEGAL_NAME = "HEGAZY INTERNATIONAL GROUP";
export const LEGAL_NAME_DISPLAY = "Hegazy International Group";

export const PHONE_DISPLAY = "+20 3 552 3190";
export const PHONE_HREF = "tel:+2035523190";

export const WHATSAPP_DISPLAY = "+20 122 924 5676";
export const WHATSAPP_HREF = "https://wa.me/201229245676";

export const EMAIL = "company@grouphegazy.com";
export const EMAIL_HREF = `mailto:${EMAIL}`;

export const ADDRESS_FULL =
  "Alexandria, Miami, Gamal Abdel Nasser Street, Spinning and Weaving Tower, beside Orange Services Company, Egypt";

export const ADDRESS_PARTS = {
  street:
    "Miami, Gamal Abdel Nasser Street, Spinning and Weaving Tower, beside Orange Services Company",
  locality: "Alexandria",
  country: "EG",
};

export const MAPS_URL = "https://www.google.com/maps?cid=14730848495317711960";

/** Embeddable map view (no API key required, no cross-origin block). */
export const MAPS_EMBED_URL =
  "https://www.google.com/maps?cid=14730848495317711960&output=embed";

export const HOURS_DISPLAY = "Saturday–Thursday, 9:00 AM–4:00 PM · Friday closed";

export const OPENING_HOURS_SCHEMA = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ],
    opens: "09:00",
    closes: "16:00",
  },
];
