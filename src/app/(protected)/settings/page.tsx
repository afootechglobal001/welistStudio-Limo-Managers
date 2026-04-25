import type { Metadata } from "next";
import Settings from "@/features/portal/settings/Settings";

export const metadata: Metadata = {
  title: "Settings - Limo Managers Client Portal",
  description:
    "Manage your account settings, preferences, and integration options to customize your Limo Managers experience.",
};
export default function Page() {
  return <Settings />;
}
