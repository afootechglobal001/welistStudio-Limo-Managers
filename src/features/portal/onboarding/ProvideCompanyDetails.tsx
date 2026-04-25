"use client";
import { FeedbackDialog } from "@/components/feedback-dialog";
import { Button, FormSelect, TextInput } from "@/components/form";
import { FormSegments } from "@/components/general-components/formSegments";
import { SideDrawer } from "@/components/side-drawer";
import { COUNTRIES } from "@/constants/portal/onboarding";
import useToggle from "@/hooks/useToggle";
import {
  ProvideCompanyDetailschema,
  ProvideCompanyDetailsType,
} from "@/types/portal/onboarding/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Building2, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent, DragEvent } from "react";
import { Resolver, useForm } from "react-hook-form";

//////////////////////////////////////////////////////////////////////////////
type ProvideCompanyDetailsProps = {
  onClose: () => void;
  isOpen: boolean;
  handleCompleteSteps: (step: number) => void;
};

export function ProvideCompanyDetails({
  onClose,
  isOpen,
  handleCompleteSteps,
}: ProvideCompanyDetailsProps) {
  const {
    register,
    // handleSubmit,
    control,
    // reset,
    formState: { errors },
  } = useForm<ProvideCompanyDetailsType>({
    defaultValues: {
      companyName: "",
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      zipCode: "",
      businessNumber: "",
      countryId: "",
      primaryPhoneNumber: "",
      secondaryPhoneNumber: "",
      faxNumber: "",
      serviceEmail: "",
      notificationEmail: "",
      website: "",
      logo: "",
    },
    resolver: zodResolver(
      ProvideCompanyDetailschema,
    ) as Resolver<ProvideCompanyDetailsType>,
    mode: "onChange",
  });

  const proceedSubmitCompanyDetailsToggle = useToggle();
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
  const handleProvideCompanyDetails = () => {
    // Handle form submission logic here, e.g., send data to backend
    onClose(); // Close the drawer after submission
    handleCompleteSteps(1); // Proceed to the next step
  };

  return (
    <>
      <SideDrawer
        onClose={onClose}
        isOpen={isOpen}
        title="Provide Company Details"
        icon={<Building2 className="w-4 h-4" />}
      >
        <section className="flex flex-col gap-5 pb-20">
          <div className="p-4 bg-white/3 rounded-md">
            <p className="text-sm text-(--secondary-color)">
              Please provide the following details about your company to help us
              set up your account and ensure compliance with industry
              regulations.
            </p>
          </div>

          <div className="p-7 pt-3 flex flex-col gap-7">
            <FormSegments
              title="Provide Company Basic details"
              icon={<Building2 className="w-4 h-4" />}
            >
              <div className="flex flex-col gap-5">
                <TextInput
                  id="companyName"
                  label="Company Name"
                  required
                  {...register("companyName")}
                  message={errors.companyName?.message}
                />
                <TextInput
                  id="streetAddress1"
                  label="Street Address 1"
                  required
                  {...register("streetAddress1")}
                  message={errors.streetAddress1?.message}
                />

                <TextInput
                  id="streetAddress2"
                  label="Street Address 2"
                  {...register("streetAddress2")}
                  message={errors.streetAddress2?.message}
                />

                <TextInput
                  id="city"
                  label="City/town"
                  required
                  {...register("city")}
                  message={errors.city?.message}
                />
                <TextInput
                  id="state"
                  label="State/Province/Territory"
                  required
                  {...register("state")}
                  message={errors.state?.message}
                />
                <TextInput
                  id="zipCode"
                  label="ZIP/Postal Code"
                  required
                  {...register("zipCode")}
                  message={errors.zipCode?.message}
                />
                <TextInput
                  id="businessNumber"
                  label="EIN/Business Number"
                  {...register("businessNumber")}
                  message={errors.businessNumber?.message}
                />
                <FormSelect
                  id="countryId"
                  label="Country"
                  required
                  placeholder="Select Here"
                  {...register("countryId", { required: true })}
                  control={control}
                  message={errors.countryId?.message}
                  options={COUNTRIES}
                />
              </div>
            </FormSegments>
            <FormSegments
              title="Provide Company Contact details"
              icon={<Building2 className="w-4 h-4" />}
            >
              <div className="flex flex-col gap-5">
                <TextInput
                  id="primaryPhoneNumber"
                  label="Phone Number"
                  required
                  {...register("primaryPhoneNumber")}
                  message={errors.primaryPhoneNumber?.message}
                />
                <TextInput
                  id="secondaryPhoneNumber"
                  label="Secondary Phone Number"
                  {...register("secondaryPhoneNumber")}
                  message={errors.secondaryPhoneNumber?.message}
                />
                <TextInput
                  id="faxNumber"
                  label="Fax Number"
                  {...register("faxNumber")}
                  message={errors.faxNumber?.message}
                />
                <TextInput
                  id="serviceEmail"
                  label="Service Email"
                  required
                  {...register("serviceEmail")}
                  message={errors.serviceEmail?.message}
                />
                <TextInput
                  id="notificationEmail"
                  label="Notification Email"
                  required
                  {...register("notificationEmail")}
                  message={errors.notificationEmail?.message}
                />
                <TextInput
                  id="website"
                  label="Website"
                  required
                  {...register("website")}
                  message={errors.website?.message}
                />
              </div>
            </FormSegments>

            <FormSegments
              title="Upload Company Logo"
              icon={<Building2 className="w-4 h-4" />}
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
                        Drag & drop your logo here, or{" "}
                        <label
                          htmlFor="companyLogo"
                          className="text-(--secondary-color) underline cursor-pointer"
                        >
                          browse
                        </label>
                      </p>
                    </>
                  )}
                  {logoPreview && (
                    <label
                      htmlFor="companyLogo"
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
                    id="companyLogo"
                    type="file"
                    accept="image/*"
                    onChange={handleLogoChange}
                    className="hidden"
                  />
                </div>
              </div>
            </FormSegments>

            <Button
              text="Proceed to next step"
              frontIcon={<ArrowRight />}
              fullWidth
              // isLoading={isPending}
              onClick={proceedSubmitCompanyDetailsToggle.open}
            />
          </div>
        </section>
      </SideDrawer>
      <FeedbackDialog
        variant="warning"
        title="Submit Company Details?"
        text="You are about to submit your company details. Once submitted, you can proceed to the next step."
        btnText="Yes, Submit"
        onClick={handleProvideCompanyDetails}
        onClose={proceedSubmitCompanyDetailsToggle.close}
        isOpen={proceedSubmitCompanyDetailsToggle.isOpen}
      />
    </>
  );
}
