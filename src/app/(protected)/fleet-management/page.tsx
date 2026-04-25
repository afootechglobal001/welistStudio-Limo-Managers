import type { Metadata } from "next";
import FleetManagement from "@/features/portal/fleet-management/FleetManagement";

export const metadata: Metadata = {
  title: "Fleet Management - Limo Managers Client Portal",
  description:
    "Manage your fleet, update vehicle details, and customize your settings. Stay organized and efficient with Limo Managers Client Portal.",
};
export default function Page() {
  return <FleetManagement />;
}
