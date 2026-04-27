"use client";
import { Building } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";
import { PageSearch } from "@/components/general-components/pageSearch";
import { COMPANY_LIST } from "@/constants/portal/companydata";
import { CompanyCard } from "./CompanyCard";

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
        <div className="w-full grid grid-cols-2 gap-5">
          {COMPANY_LIST.map((company) => (
            <CompanyCard
              key={company.companyId}
              name={company.name}
              logo={company.logo}
              location={company.location}
              website={company.website}
              email={company.email}
              stats={company.stats}
            />
          ))}
        </div>
      </section>
    </PortalWrapper>
  );
}
