import type { Metadata } from "next";
import Invoices from "@/features/portal/invoices/Invoices";

export const metadata: Metadata = {
  title: "Invoices - Limo Managers Client Portal",
  description:
    "View and manage your invoices, payment history, and billing statements. Keep track of your financial records and ensure timely payments.",
};
export default function Page() {
  return <Invoices />;
}
