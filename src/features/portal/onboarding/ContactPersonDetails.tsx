"use client";
import { CenterForm } from "@/components/center-form";
import { FeedbackDialog } from "@/components/feedback-dialog";
import { Button, TextInput } from "@/components/form";
import useToggle from "@/hooks/useToggle";
import {
  ProvideCompanyDetailschema,
  ProvideCompanyDetailsType,
} from "@/types/portal/onboarding/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, UserStar } from "lucide-react";
import { Resolver, useForm } from "react-hook-form";

//////////////////////////////////////////////////////////////////////////////
type ContactPersonDetailsProps = {
  onClose: () => void;
  isOpen: boolean;
  handleCompleteSteps: (step: number) => void;
};

export function ContactPersonDetails({
  onClose,
  isOpen,
  handleCompleteSteps,
}: ContactPersonDetailsProps) {
  const {
    register,
    // handleSubmit,
    // control,
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

  const proceedSubmitContactPersonDetailsToggle = useToggle();

  const handleProvideContactPersonDetails = () => {
    // Handle form submission logic here, e.g., send data to backend
    onClose(); // Close the drawer after submission
    handleCompleteSteps(2); // Proceed to the next step
  };

  return (
    <>
      <CenterForm
        onClose={onClose}
        isOpen={isOpen}
        title="Provide Contact Person Details"
        icon={<UserStar className="w-4 h-4" />}
        width="550px"
      >
        <section className="flex flex-col gap-5">
          <div className="p-4 bg-white/3 rounded-md">
            <p className="text-sm text-(--secondary-color) text-justify">
              Please provide the contact details of the primary person
              responsible for managing your account and overseeing compliance.
              This information will be used for important communications
              regarding your account and regulatory requirements.
            </p>
          </div>

          <div className="p-7 pt-3 flex flex-col gap-7">
            <div className="flex flex-col gap-5">
              <TextInput
                id="companyName"
                label="Full Name"
                required
                {...register("companyName")}
                message={errors.companyName?.message}
              />
              <TextInput
                id="streetAddress1"
                label="Phone Number"
                required
                {...register("streetAddress1")}
                message={errors.streetAddress1?.message}
              />

              <TextInput
                id="streetAddress2"
                label="Email Address"
                {...register("streetAddress2")}
                message={errors.streetAddress2?.message}
              />
            </div>

            <Button
              text="Proceed to next step"
              frontIcon={<ArrowRight />}
              fullWidth
              // isLoading={isPending}
              onClick={proceedSubmitContactPersonDetailsToggle.open}
            />
          </div>
        </section>
      </CenterForm>
      <FeedbackDialog
        variant="warning"
        title="Submit Contact Person Details?"
        text="You are about to submit your contact person details. Once submitted, you can proceed to the next step."
        btnText="Yes, Submit"
        onClick={handleProvideContactPersonDetails}
        onClose={proceedSubmitContactPersonDetailsToggle.close}
        isOpen={proceedSubmitContactPersonDetailsToggle.isOpen}
      />
    </>
  );
}
