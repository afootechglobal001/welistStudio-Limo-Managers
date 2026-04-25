import * as z from "zod";
export const ProvideCompanyDetailschema = z.object({
  companyName: z.string().min(1, { message: "Company Name is required" }),
  streetAddress1: z.string().min(1, { message: "Street Address is required" }),
  streetAddress2: z.string().optional(),
  city: z.string().min(1, { message: "City/Town is required" }),
  state: z.string().min(1, { message: "State/Province/Territory is required" }),
  zipCode: z.string().min(1, { message: "ZIP/Postal Code is required" }),
  businessNumber: z.string().optional(),
  countryId: z.string().min(1, { message: "Country is required" }),
  primaryPhoneNumber: z
    .string()
    .min(1, { message: "Primary Phone Number is required" }),
  secondaryPhoneNumber: z.string().optional(),
  faxNumber: z.string().optional(),
  serviceEmail: z
    .string()
    .email({ message: "Invalid email address" })
    .optional(),
  notificationEmail: z
    .string()
    .email({ message: "Invalid email address" })
    .optional(),
  website: z.string().min(1, { message: "Website is required" }),
  logo: z.string().optional(),
  paymentGateways: z.array(
    z.object({
      gatewayName: z.string().min(1, { message: "Gateway Name is required" }),
      gatewayType: z.string().min(1, { message: "Gateway Type is required" }),
      paymentKey: z.string().min(1, { message: "Payment Key is required" }),
    }),
  ),
});
export type ProvideCompanyDetailsType = z.infer<
  typeof ProvideCompanyDetailschema
>;
