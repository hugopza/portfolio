export const LOCALES = {
  en: {
    iso: "en-US",
    name: "English",
  },
  ca: {
    iso: "ca-ES",
    name: "Català",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "en";
