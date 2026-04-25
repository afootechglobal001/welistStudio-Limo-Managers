import type { Metadata } from "next";
import Bookings from "@/features/portal/bookings/Bookings";

export const metadata: Metadata = {
  title: "Bookings - Limo Managers Client Portal",
  description:
    "Access a complete list of your bookings and manage them effortlessly. Make updates, track booking progress, and customize your settings for a smoother experience.",
};
export default function Page() {
  return <Bookings />;
}
