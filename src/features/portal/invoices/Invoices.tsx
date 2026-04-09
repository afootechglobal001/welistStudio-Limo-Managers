"use client";
import { FileText } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";

export default function Invoices() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <FileText className="h-8 w-8 text-white" />
          </div>
        }
        title="Invoices"
        description="View and manage your invoices, payment history, and billing statements. Keep track of your financial records and ensure timely payments."
        // actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          View and manage your invoices, payment history, and billing
          statements. Keep track of your financial records and ensure timely
          payments.
        </p>
      </section>
    </PortalWrapper>
  );
}
