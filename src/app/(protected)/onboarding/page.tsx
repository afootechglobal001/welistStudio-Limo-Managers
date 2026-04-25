import type { Metadata } from "next";
import Onboarding from "@/features/portal/onboarding/Onboarding";

export const metadata: Metadata = {
  title: "Client Onboarding - Limo Managers Client Portal",
  description:
    "Welcome to the Limo Managers Client Portal! This onboarding page will guide you through setting up your account, adding your fleet of limousines, and getting started with managing your bookings and customer interactions. Let's get your limo business up and running smoothly!",
};
export default function Page() {
  return <Onboarding />;
}
