import type { Metadata } from "next";
import Customers from "@/features/portal/customers/Customers";

export const metadata: Metadata = {
  title: "Customers - Limo Managers Client Portal",
  description:
    "Keep track of your customers, their preferences, and ride history in one place. Provide a seamless and premium experience with efficient customer management.",
};
export default function Page() {
  return <Customers />;
}
