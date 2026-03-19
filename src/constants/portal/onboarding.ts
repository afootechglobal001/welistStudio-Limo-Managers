export const ONBOARDING_STEPS = [
  {
    title: "Step 1",
    description: "Provide company details",
  },
  {
    title: "Step 2",
    description: "Contact Person details",
  },
  {
    title: "Step 3",
    description: "Payment gateway details",
  },
  {
    title: "Step 4",
    description: "Subscription plan",
  },
];

export const ONBOARDING_CHECKLIST = [
  {
    title: "Provide company details",
    description:
      "Please provide your limo company details, including company name, address, website, and contact details. This information is essential for account setup and compliance purposes.",
  },
  {
    title: "Contact Person details",
    description:
      "Please provide the contact details of the primary contact person for your account. This should include their name, email address, and phone number. This person will be responsible for managing the account and receiving important notifications.",
  },
  {
    title: "Provide payment gateway details",
    description:
      " Please provide your payment gateway information, including account details and billing information. This will allow you to recieve payment from your customer. We recommend stripe or paypal",
  },
  {
    title: "Select a subscription plan",
    description:
      "Choose a subscription plan that best fits your business needs. We offer various plans with different features and pricing to accommodate limo companies of all sizes. You can always upgrade or change your plan later as your business grows.",
  },
];

export const COUNTRIES = [
  { label: "United States", value: "US" },
  { label: "Canada", value: "CA" },
  { label: "United Kingdom", value: "UK" },
  { label: "Australia", value: "AU" },
  { label: "Germany", value: "DE" },
  { label: "France", value: "FR" },
  { label: "India", value: "IN" },
  { label: "China", value: "CN" },
  { label: "Japan", value: "JP" },
  { label: "Brazil", value: "BR" },
];

export const SUBSCRIPTION_PLAN = {
  MONTHLY: "monthly",
  ANNUALLY: "annually",
};

export const subscriptionPlans = [
  {
    title: "Billed Monthly",
    value: SUBSCRIPTION_PLAN.MONTHLY,
  },
  {
    title: "Billed Annually",
    value: SUBSCRIPTION_PLAN.ANNUALLY,
  },
];

export const SUBSCRIPTION_PRICING_MONTHLY = [
  {
    title: "Basic",
    price: "$12.00",
  },
  {
    title: "Standard",
    price: "$30.00",
  },
  {
    title: "Advanced",
    price: "$50.00",
  },
];
export const SUBSCRIPTION_PRICING_ANNUALLY = [
  {
    title: "Basic",
    price: "$100.00",
  },
  {
    title: "Standard",
    price: "$250.00",
  },
  {
    title: "Advanced",
    price: "$400.00",
  },
];
