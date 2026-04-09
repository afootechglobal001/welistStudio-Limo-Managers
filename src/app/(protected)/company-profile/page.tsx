import type { Metadata } from "next";
import CompanyProfile from "@/features/portal/company-profile/CompanyProfile";

export const metadata: Metadata = {
  title: "Company Profile - Limo Managers Client Portal",
  description:
    "Access your company profile to manage your business information, update contact details, and customize your settings. Keep your profile up-to-date with Limo Managers Client Portal.",
};
export default function Page() {
  return <CompanyProfile />;
}
