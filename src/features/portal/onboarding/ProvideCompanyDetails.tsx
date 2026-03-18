"use client";
import { FeedbackDialog } from "@/components/feedback-dialog";
import { Button, TextAreaInput, TextInput } from "@/components/form";
import { FormSegments } from "@/components/general-components/formSegments";
import { SideDrawer } from "@/components/side-drawer";
import useToggle from "@/hooks/useToggle";
import { ArrowRight, Building2, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent, DragEvent } from "react";

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
                <TextInput id="companyName" label="Company Name" required />
                <TextAreaInput
                  id="companyAddress"
                  label="Company Address"
                  required
                />
                <TextInput id="phoneNumber" label="Phone Number" required />
                <TextInput id="website" label="Website" required />
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
            <FormSegments
              title="Provide Social Media Links"
              icon={<Building2 className="w-4 h-4" />}
            >
              <div className="flex flex-col gap-5">
                <TextInput id="facebook" label="Facebook" />
                <TextInput id="twitter" label="Twitter" />
                <TextInput id="linkedin" label="LinkedIn" />
                <TextInput id="instagram" label="Instagram" />
                <TextInput id="youtube" label="YouTube" />
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
