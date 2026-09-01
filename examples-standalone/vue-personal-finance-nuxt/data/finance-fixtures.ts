export const accountFixture = {
  id: "checking",
  name: "Everyday checking",
  type: "Checking account",
  number: "•••• 4821",
  balance: 12840.56,
  available: 12140.56,
  opened: "Opened March 2021",
  interest: "0.10% APY",
  activity: [
    { merchant: "Direct deposit · Acme Inc.", date: "Aug 26, 2026", amount: 4250, kind: "credit", status: "Posted" },
    { merchant: "City utilities", date: "Aug 24, 2026", amount: -148.32, kind: "debit", status: "Posted" },
    { merchant: "Maple Market", date: "Aug 22, 2026", amount: -86.45, kind: "debit", status: "Posted" },
    { merchant: "Transfer from savings", date: "Aug 20, 2026", amount: 500, kind: "credit", status: "Posted" },
  ],
};

export const cardFixture = {
  name: "Everyday rewards",
  number: "•••• 9016",
  status: "Active",
  limit: 8000,
  available: 6240.18,
  paymentDue: "Sep 12, 2026",
  minimumPayment: 125,
  activity: [
    { merchant: "Northstar Travel", date: "Aug 25, 2026", amount: -624.5, status: "Posted" },
    { merchant: "Streamline Market", date: "Aug 21, 2026", amount: -84.72, status: "Posted" },
    { merchant: "Cashback reward", date: "Aug 18, 2026", amount: 18.4, status: "Applied" },
  ],
};

export const statementFixtures = [
  { period: "August 2026", range: "Aug 1 – Aug 31, 2026", balance: 1764.22, status: "Ready" },
  { period: "July 2026", range: "Jul 1 – Jul 31, 2026", balance: 2148.76, status: "Ready" },
  { period: "June 2026", range: "Jun 1 – Jun 30, 2026", balance: 0, status: "No activity" },
];

export const formatCurrency = (value: number, currency = "USD") =>
  new Intl.NumberFormat("en-US", { style: "currency", currency }).format(value);
