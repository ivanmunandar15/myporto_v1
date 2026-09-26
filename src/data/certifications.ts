export interface CertificationEntry {
  title: string;
  issuer: string;
  year: string;
  /**
   * Grouping used by the Certifications section, e.g. "Laboratory", "IT",
   * "Hardware", "Electrical". Free-form — the section groups by whatever
   * distinct values appear here, in the order they first appear below, so
   * you control category order simply by ordering entries in this file.
   */
  category: string;
}

// No certifications or education have been confirmed yet. Left empty rather
// than filled with "[CERTIFICATION / DEGREE]"-style placeholders — the
// Certifications section renders an honest empty state (see
// sections/certifications.tsx) until real entries are added here, e.g.:
//
// { title: "Certification or degree name", issuer: "Issuing institution", year: "2024", category: "Laboratory" },
// { title: "Another certification", issuer: "Issuing institution", year: "2023", category: "IT" },
//
// Once a category has more than 6 entries, that category automatically
// gets its own pagination controls (see components/ui/paginated-grid.tsx) —
// no extra wiring needed.
export const certifications: CertificationEntry[] = [
  { title: "SNI ISO 17025 : 2017 Persyaratan Umum untuk Laboratorium", issuer: "Anindya Certification & Testing", year: "2025", category: "Laboratory" },
  { title: "SNI ISO 9001 : 2015 Persyaratan Sistem Manajemen Mutu", issuer: "Badan Standarisasi Nasional", year: "2025", category: "Laboratory" },
  { title: "SNI IEC 62368-1-2014 Peralatan audio/video,teknologi informasi dan komunikasi", issuer: "Anindya Certification & Testing", year: "2025", category: "Laboratory" },
  { title: "SNI IEC 60669-1-2013 Sakelar untuk instalasi listrik magun rumah tangga dan sejenis" , issuer: "Anindya Certification & Testing", year: "2025", category: "Laboratory" },
  { title: "SNI IEC 60884-1-2014 Tusuk kontak & kotak kontak untuk keperluan rumah tangga dan keperluan sejenis", issuer: "Anindya Certification & Testing", year: "2025", category: "Laboratory" },
  { title: "SNI IEC 61386-1-2012 Konduit - Umum", issuer: "Anindya Certification & Testing", year: "2025", category: "Laboratory" },
  { title: "SNI 7859-2013 & IEC 60335-1-2010 Piranti listrik rumah tangga dan sejenis - Keselamatan - Persyaratan umum", issuer: "Anindya Certification & Testing", year: "2025", category: "Laboratory" },
  { title: "SNI IEC 60670-1-2015 Kotak & selungkup - Umum", issuer: "Anindya Certification & Testing", year: "2025", category: "Laboratory" },
  { title: "SNI IEC 60598-1-2017 Luminer - Persyaratan umum", issuer: "Anindya Certification & Testing", year: "2025", category: "Laboratory" },
  { title: "SNI IEC 62560-2015 LED Swa-balast - Keselamatan", issuer: "Anindya Certification & Testing", year: "2025", category: "Laboratory" },
  { title: "SNI IEC 60838-1-2017 Fitting lampu - Umum", issuer: "Anindya Certification & Testing", year: "2025", category: "Laboratory" },
  { title: "SNI IEC 61215-1-2016 (2021)Modul fotovoltaik (FV) terrestrial", issuer: "Anindya Certification & Testing", year: "2025", category: "Laboratory" },
  { title: "Ethical Hacking Essentials", issuer: "EC-Council ", year: "2023-2026", category: "IT" },
  { title: "DevOps Beginer to Advanced", issuer: "Udemy", year: "2025", category: "IT" },
  { title: "AWS Certified DevOps Engineer – Professional", issuer: "Amazon Web Services", year: "2023", category: "IT" },
  { title: "AI and Life Skills Foundations", issuer: "Orbit Future Academy", year: "2022", category: "IT" }, 

];
