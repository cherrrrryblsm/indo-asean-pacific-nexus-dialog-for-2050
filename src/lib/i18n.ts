export type Locale = "en" | "ja";

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "ja"];

export type LocalizedString = {
  en: string;
  ja: string;
};

export function t(content: LocalizedString, locale: Locale): string {
  return content[locale];
}

export function formatCurrency(amount: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === "ja" ? "ja-JP" : "en-US", {
    maximumFractionDigits: 0,
  }).format(amount) + " JPY";
}
