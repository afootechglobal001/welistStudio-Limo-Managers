"use client";
import { Building } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";
import { PageSearch } from "@/components/general-components/pageSearch";

export default function CompanyProfile() {
  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <Building className="h-8 w-8 text-white" />
          </div>
        }
        title="Company Profile"
        description="Here's an overview of your company profile. You can manage your company information, update contact details, and customize your settings."
        actions={
          <PageSearch
            placeHolder="Search Here "
            actionBtn
            buttonText="Add New Profile"
            onButtonClick={() => {}}
          />
        }
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <p>
          Manage your company profile, update contact details, and customize
          your settings.
        </p>
      </section>
    </PortalWrapper>
  );
}
