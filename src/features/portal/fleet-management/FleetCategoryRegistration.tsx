"use client";
import { Button, FormSelect, TextInput } from "@/components/form";
import { FormSegments } from "@/components/general-components/formSegments";
import { SideDrawer } from "@/components/side-drawer";
import { STATUS } from "@/constants/portal/status";
import {
  FleetCategoryRegistrationschema,
  FleetCategoryRegistrationType,
} from "@/types/portal/fleet-management/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Car } from "lucide-react";
import { Resolver, useForm } from "react-hook-form";

//////////////////////////////////////////////////////////////////////////////
type FleetCategoryRegistrationProps = {
  onClose: () => void;
  isOpen: boolean;
};

export function FleetCategoryRegistration({
  onClose,
  isOpen,
}: FleetCategoryRegistrationProps) {
  const {
    register,
    // handleSubmit,
    control,
    // reset,
    formState: { errors },
  } = useForm<FleetCategoryRegistrationType>({
    defaultValues: {
      categoryName: "",
      categoryDescription: "",
      categoryCode: "",
      statusId: "",
    },
    resolver: zodResolver(
      FleetCategoryRegistrationschema,
    ) as Resolver<FleetCategoryRegistrationType>,
    mode: "onChange",
  });
  return (
    <>
      <SideDrawer
        onClose={onClose}
        isOpen={isOpen}
        title="Fleet Category Registration"
        icon={<Car className="w-4 h-4" />}
      >
        <section className="flex flex-col gap-5 pb-20">
          <div className="p-4 bg-white/3 rounded-md">
            <p className="text-sm text-(--secondary-color)">
              Please provide the required details to complete the fleet category
              registration. This will help us properly register and classify it
              within the system for accurate fleet management.
            </p>
          </div>

          <div className="p-7 pt-3 flex flex-col gap-7">
            <FormSegments
              title="Provide Fleet Category Details"
              icon={<Car className="w-4 h-4" />}
            >
              <div className="flex flex-col gap-5">
                <TextInput
                  id="categoryName"
                  label="Category Name"
                  required
                  {...register("categoryName")}
                  message={errors.categoryName?.message}
                />
                <TextInput
                  id="categoryCode"
                  label="Category Code"
                  required
                  {...register("categoryName")}
                  message={errors.categoryCode?.message}
                />
                <TextInput
                  id="categoryDescription"
                  label="Category Description"
                  required
                  {...register("categoryDescription")}
                  message={errors.categoryDescription?.message}
                />
                <FormSelect
                  id="statusId"
                  label="Status"
                  required
                  placeholder="Select Here"
                  {...register("statusId", { required: true })}
                  control={control}
                  message={errors.statusId?.message}
                  options={STATUS}
                />
              </div>
            </FormSegments>
            <Button
              text="Submit"
              frontIcon={<ArrowRight />}
              fullWidth
              // isLoading={isPending}
              onClick={() => {}}
            />
          </div>
        </section>
      </SideDrawer>
    </>
  );
}
