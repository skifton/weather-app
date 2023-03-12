export const getDayName = (date: Date, locale = "en-US") => {
  return date.toLocaleDateString(locale, { weekday: "long" });
};
