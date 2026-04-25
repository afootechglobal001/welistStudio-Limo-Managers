import type { Metadata } from "next";
import Reports from "@/features/portal/reports/Reports";

export const metadata: Metadata = {
  title: "Reports - Limo Managers Client Portal",
  description:
    "Generate detailed reports on your limo business performance, customer interactions, and ride history. Make data-driven decisions to grow your business.",
};
export default function Page() {
  return <Reports />;
}
