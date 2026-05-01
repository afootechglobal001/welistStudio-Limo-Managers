"use client";
import { Button, FormSelect, TextInput } from "@/components/form";
import { FormSegments } from "@/components/general-components/formSegments";
import { SideDrawer } from "@/components/side-drawer";
import { FLEET_CATEGORY } from "@/constants/portal/fleetdata";
import { STATUS } from "@/constants/portal/status";
import {
  FleetRegistrationschema,
  FleetRegistrationType,
} from "@/types/portal/fleet/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Car, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent, DragEvent } from "react";
import { Resolver, useForm } from "react-hook-form";

//////////////////////////////////////////////////////////////////////////////
type FleetRegistrationRegistrationProps = {
  onClose: () => void;
  isOpen: boolean;
};

export function FleetRegistration({
  onClose,
  isOpen,
}: FleetRegistrationRegistrationProps) {
  const {
    register,
    // handleSubmit,
    control,
    // reset,
    formState: { errors },
  } = useForm<FleetRegistrationType>({
    defaultValues: {
      categoryId: "",
      carMake: "",
      carModel: "",
      carYear: undefined,
      plateNumber: "",
      noOfPassenger: undefined,
      noOfLuggage: undefined,
      description: "",
      provider: "",
      statusId: "",
    },
    resolver: zodResolver(
      FleetRegistrationschema,
    ) as Resolver<FleetRegistrationType>,
    mode: "onChange",
  });

  // const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleLogoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      // setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <SideDrawer
        onClose={onClose}
        isOpen={isOpen}
        title="Fleet Registration"
        icon={<Car className="w-4 h-4" />}
      >
        <section className="flex flex-col gap-5 pb-20">
          <div className="p-4 bg-white/3 rounded-md">
            <p className="text-sm text-(--secondary-color)">
              Please provide the required details to complete the fleet
              registration. This will help us properly register and classify it
              within the system for accurate fleet management.
            </p>
          </div>

          <div className="p-7 pt-3 flex flex-col gap-7">
            <FormSegments
              title="Provide Vehicle Information"
              icon={<Car className="w-4 h-4" />}
            >
              <div className="flex flex-col gap-5">
                <FormSelect
                  id="categoryId"
                  label="Select Vehicle Category"
                  required
                  placeholder="Select Here"
                  {...register("categoryId", { required: true })}
                  control={control}
                  message={errors.categoryId?.message}
                  options={FLEET_CATEGORY}
                />
                <TextInput
                  id="carMake"
                  label="Car Make"
                  required
                  {...register("carMake")}
                  message={errors.carMake?.message}
                />
                <TextInput
                  id="carModel"
                  label="Car Model"
                  required
                  {...register("carModel")}
                  message={errors.carModel?.message}
                />
                <TextInput
                  id="carYear"
                  label="Car Year"
                  required
                  {...register("carYear")}
                  message={errors.carYear?.message}
                />
                <TextInput id="carColor" label="Car Color" />
                <TextInput
                  id="plateNumber"
                  label="Plate Number"
                  required
                  {...register("plateNumber")}
                  message={errors.plateNumber?.message}
                />
                <TextInput
                  id="noOfPassenger"
                  label="Number Of Passenger"
                  type="number"
                  required
                  {...register("noOfPassenger")}
                  message={errors.noOfPassenger?.message}
                />
                <TextInput
                  id="noOfLuggage"
                  label="Number Of Luggage"
                  type="number"
                  required
                  {...register("noOfLuggage")}
                  message={errors.noOfLuggage?.message}
                />
                <TextInput
                  id="description"
                  label="Description"
                  required
                  {...register("description")}
                  message={errors.description?.message}
                />
                <TextInput
                  id="affilatedBaseNumber"
                  label="Affilated Base Number"
                />
                <TextInput id="expiryDate" label="Exp Date" />
                <TextInput id="vin" label="VIN" />
                <TextInput
                  id="odometer"
                  label="Odometer (Miles or Kilometers)"
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

                <FormSegments
                  title="Upload Fleet Image"
                  icon={<Car className="w-4 h-4" />}
                >
                  <div>
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer transition-all duration-200 ${
                        isDragging
                          ? "border-(--secondary-color) bg-white/5"
                          : "border-gray-300 bg-(--primary-color)"
                      } hover:border-(--secondary-color)`}
                    >
                      {!logoPreview && (
                        <>
                          <UploadCloud className="w-10 h-10 text-(--secondary-color) mb-2" />
                          <p className="text-(--secondary-color) text-sm text-center">
                            Drag & drop your Image here, or{" "}
                            <label
                              htmlFor="fleetImage"
                              className="text-(--secondary-color) underline cursor-pointer"
                            >
                              browse
                            </label>
                          </p>
                        </>
                      )}
                      {logoPreview && (
                        <label
                          htmlFor="fleetImage"
                          className="mt-4 flex flex-col items-center"
                        >
                          <Image
                            src={logoPreview}
                            width={0}
                            height={0}
                            unoptimized
                            alt="Company Logo Preview"
                            className="h-50 w-50 object-contain rounded-md border border-gray-300 shadow-sm"
                          />
                          <span className="text-(--secondary-color) text-sm mt-2 underline cursor-pointer">
                            Change Logo
                          </span>
                        </label>
                      )}

                      <input
                        id="fleetImage"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="hidden"
                      />
                    </div>
                  </div>
                </FormSegments>
              </div>
            </FormSegments>

            <FormSegments
              title="Provide Contact Information"
              icon={<Car className="w-4 h-4" />}
            >
              <div className="flex flex-col gap-5">
                <TextInput id="cellularPhione" label="Cellular Phone" />
                <FormSelect
                  id="provider"
                  label="Provider"
                  placeholder="Select Here"
                  {...register("provider")}
                  control={control}
                  message={errors.provider?.message}
                  options={STATUS}
                />
                <TextInput id="emailAddress" label="Email Address" />
                <TextInput id="twoWayRadioId" label="Two Way Radio ID" />
              </div>
            </FormSegments>

            <FormSegments
              title="Provide Insurance Information"
              icon={<Car className="w-4 h-4" />}
            >
              <div className="flex flex-col gap-5">
                <TextInput id="insuredBy" label="Insured By" />
                <TextInput id="policyNo" label="Policy No" />
                <TextInput
                  id="policyExpirationDate"
                  label="Policy Expiration Date"
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
