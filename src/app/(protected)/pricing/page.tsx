import type { Metadata } from "next";
import Pricing from "@/features/portal/pricing/Pricing";

export const metadata: Metadata = {
  title: "Pricing - Limo Managers Client Portal",
  description:
    "View our flexible pricing plans and choose the perfect option for your limo business. Upgrade or downgrade at any time with no hidden fees.",
};
export default function Page() {
  return <Pricing />;
}
