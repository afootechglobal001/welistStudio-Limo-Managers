import type { Metadata } from "next";
import MileageCalculator from "@/features/portal/mileage-calculator/MileageCalculator";

export const metadata: Metadata = {
  title: "Mileage Calculator - Limo Managers Client Portal",
  description:
    "Calculate and track your vehicle's mileage with our easy-to-use calculator. Keep your records accurate and up-to-date for maintenance and tax purposes.",
};
export default function Page() {
  return <MileageCalculator />;
}
