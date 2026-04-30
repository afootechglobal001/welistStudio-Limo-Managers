"use client";
import { Car } from "lucide-react";
import { PageHeader } from "@/features/PageHeader";
import { PortalWrapper } from "../PortalWrapper";
import { PageSearch } from "@/components/general-components/pageSearch";
import { FLEET_CATEGORY_LIST } from "@/constants/portal/fleetcategorydata";
import { FleetCategoryCard } from "./FleetCategoryCard";
import { useRouter } from "next/navigation";
import { PagesContentSegments } from "@/components/general-components/pagesContentSegments";

export default function FleetManagement() {
  const router = useRouter();
  const viewVehicles = (id: string) => {
    router.push(`/fleet-management/${id}`);
  };

  return (
    <PortalWrapper>
      <PageHeader
        icon={
          <div className="relative">
            <Car className="h-8 w-8 text-white" />
          </div>
        }
        title="Fleet Category"
        description="Here is an overview of your fleet categories. You can manage your fleet categories, update vehicle fleet categories."
        actions={
          <PageSearch
            placeHolder="Search Here"
            actionBtn
            buttonText="Add New Fleet Category"
            onButtonClick={() => {}}
          />
        }
      />

      <section className="p-8 text-(text-color) flex flex-col gap-8">
        <PagesContentSegments
          title="Fleet Categories"
          icon={<Car className="w-4 h-4" />}
        >
          <div className="w-full grid grid-cols-3 gap-5">
            {FLEET_CATEGORY_LIST.map((category, index) => (
              <FleetCategoryCard
                key={index}
                fleetCategory={category}
                onViewVehicles={viewVehicles}
              />
            ))}
          </div>
        </PagesContentSegments>
      </section>
    </PortalWrapper>
  );
}
