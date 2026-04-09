"use client";
import { CalendarCheck } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";

export default function Bookings() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <CalendarCheck className="h-8 w-8 text-white" />
          </div>
        }
        title="Bookings"
        description="Access a complete list of your bookings and manage them effortlessly. Make updates, track booking progress, and customize your settings for a smoother experience."
        // actions={<WalletAndSubscriptionPrompt />}
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          Access a complete list of your bookings and manage them effortlessly.
          Make updates, track booking progress, and customize your settings for
          a smoother experience.
        </p>
      </section>
    </PortalWrapper>
  );
}
