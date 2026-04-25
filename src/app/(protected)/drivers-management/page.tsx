import type { Metadata } from "next";
import DriversManagement from "@/features/portal/drivers-management/DriversManagement";

export const metadata: Metadata = {
  title: "Drivers Management - Limo Managers Client Portal",
  description:
    "Manage your drivers, update their information, and customize your settings. Stay organized and efficient with Limo Managers Client Portal.",
};
export default function Page() {
  return <DriversManagement />;
}
