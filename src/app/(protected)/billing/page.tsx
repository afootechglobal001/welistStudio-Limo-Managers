import type { Metadata } from "next";
import Billing from "@/features/portal/billing/Billing";

export const metadata: Metadata = {
  title: "Billing - Limo Managers Client Portal",
  description:
    "Manage your billing information, payment methods, and subscription details in one place. Ensure seamless transactions and uninterrupted service for your customers.",
};
export default function Page() {
  return <Billing />;
}
