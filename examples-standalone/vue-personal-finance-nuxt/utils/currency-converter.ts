import { provideIntlService } from "@progress/kendo-vue-intl";

const convertCurrency = (
  amount: number,
  fromCurrency: string,
  toCurrency: string
): number => {
  const conversionRate = 1.18; // 1 EUR = 1.18 USD
  if (fromCurrency === "EUR" && toCurrency === "USD") {
    return amount * conversionRate;
  } else if (fromCurrency === "USD" && toCurrency === "EUR") {
    return amount / conversionRate;
  }
  return amount;
};

export const displayCurrencyValue = (value: number, currency: string) => {
  const intl = provideIntlService({});
  return intl.formatNumber(
    convertCurrency(value, "USD", currency),
    `#,##0.00 ${currency}`
  );
};

export const displayCurrencySign = (value: number, currency: string) => {
  const intl = provideIntlService({});
  return intl.formatNumber(
    convertCurrency(value, "USD", currency),
    `${currency === "USD" ? "$" : "€"} #,##0.00`
  );
};
