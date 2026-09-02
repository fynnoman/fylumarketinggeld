// Fylu Digital Index – aggregierte Firmen-Datenquelle.
//
// Die einzelnen Branchen-Datensätze liegen in `./digital-index-companies/*.ts`,
// damit große Datenmengen pro Branche wartbar bleiben. Dieses Modul
// bündelt sie und stellt die Accessor-Funktionen bereit.

import type { Company } from "./digital-index";
import { COMPANIES_ELEKTRIKER } from "./digital-index-companies/elektriker";
import { COMPANIES_SHK } from "./digital-index-companies/shk";
import { COMPANIES_DACHDECKER } from "./digital-index-companies/dachdecker";
import { COMPANIES_HANDWERKER } from "./digital-index-companies/handwerker";
import { COMPANIES_GEBAEUDEREINIGUNG } from "./digital-index-companies/gebaeudereinigung";
import { COMPANIES_ZAHNARZT } from "./digital-index-companies/zahnarzt";
import { COMPANIES_KANZLEI } from "./digital-index-companies/kanzlei";
import { COMPANIES_STEUERBERATER } from "./digital-index-companies/steuerberater";
import { COMPANIES_BAUUNTERNEHMEN } from "./digital-index-companies/bauunternehmen";
import { COMPANIES_INDUSTRIE } from "./digital-index-companies/industrie";
import { COMPANIES_LOGISTIK } from "./digital-index-companies/logistik";
import { COMPANIES_BERATUNG } from "./digital-index-companies/beratung";
import { COMPANIES_IMMOBILIENMAKLER } from "./digital-index-companies/immobilienmakler";
import { COMPANIES_HAUSVERWALTUNG } from "./digital-index-companies/hausverwaltung";

export const COMPANIES: Company[] = [
  ...COMPANIES_ELEKTRIKER,
  ...COMPANIES_SHK,
  ...COMPANIES_DACHDECKER,
  ...COMPANIES_HANDWERKER,
  ...COMPANIES_GEBAEUDEREINIGUNG,
  ...COMPANIES_ZAHNARZT,
  ...COMPANIES_KANZLEI,
  ...COMPANIES_STEUERBERATER,
  ...COMPANIES_BAUUNTERNEHMEN,
  ...COMPANIES_INDUSTRIE,
  ...COMPANIES_LOGISTIK,
  ...COMPANIES_BERATUNG,
  ...COMPANIES_IMMOBILIENMAKLER,
  ...COMPANIES_HAUSVERWALTUNG,
];

export function getCompaniesByCategory(categorySlug: string): Company[] {
  return COMPANIES.filter((c) => c.categorySlug === categorySlug);
}

export function getCompany(categorySlug: string, slug: string): Company | undefined {
  return COMPANIES.find(
    (c) => c.categorySlug === categorySlug && c.slug === slug,
  );
}

export function getCompanyBySlug(slug: string): Company | undefined {
  return COMPANIES.find((c) => c.slug === slug);
}
