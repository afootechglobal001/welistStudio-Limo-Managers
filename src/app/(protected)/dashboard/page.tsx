import type { Metadata } from "next";
import Dashboard from "@/features/portal/dashboard/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard - Limo Managers Client Portal",
  description:
    "Access your dashboard to manage your limo fleet, track bookings, and oversee customer interactions. Stay organized and efficient with Limo Managers Client Portal.",
};
export default function Page() {
  return <Dashboard />;
}
