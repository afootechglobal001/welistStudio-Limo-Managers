"use client";
import { Building } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";
import { PageSearch } from "@/components/general-components/pageSearch";
import { COMPANY_LIST } from "@/constants/portal/companydata";
import { CompanyCard } from "./CompanyCard";
import { PagesContentSegments } from "@/components/general-components/pagesContentSegments";

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
            placeHolder="Search Here"
            actionBtn
            buttonText="Add New Profile"
            onButtonClick={() => {}}
          />
        }
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <PagesContentSegments
          title="Company Profile"
          icon={<Building className="w-4 h-4" />}
        >
          <div className="w-full flex flex-wrap gap-4">
            {COMPANY_LIST.map((company, index) => (
              <CompanyCard key={index} company={company} />
            ))}
          </div>
        </PagesContentSegments>
      </section>
    </PortalWrapper>
  );
}
