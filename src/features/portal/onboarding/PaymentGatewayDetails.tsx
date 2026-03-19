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
import { ArrowRight, Building2, UserStar } from "lucide-react";
import { Resolver, useForm, useFieldArray } from "react-hook-form";

//////////////////////////////////////////////////////////////////////////////
type PaymentGatewayDetailsProps = {
  onClose: () => void;
  isOpen: boolean;
  handleCompleteSteps: (step: number) => void;
};

export function PaymentGatewayDetails({
  onClose,
  isOpen,
  handleCompleteSteps,
}: PaymentGatewayDetailsProps) {
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
      paymentGateways: [
        {
          gatewayName: "",
          gatewayType: "",
          paymentKey: "",
        },
      ],
    },
    resolver: zodResolver(
      ProvideCompanyDetailschema,
    ) as Resolver<ProvideCompanyDetailsType>,
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "paymentGateways",
  });

  const proceedSubmitPaymentGatewayDetailsToggle = useToggle();

  const handleProvidePaymentGatewayDetails = () => {
    // Handle form submission logic here, e.g., send data to backend
    onClose(); // Close the drawer after submission
    handleCompleteSteps(3); // Proceed to the next step
  };

  const handleAddPaymentGateway = () => {
    append({
      gatewayName: "",
      gatewayType: "",
      paymentKey: "",
    });
  };

  const handleDeletePaymentGateway = (index: number) => {
    remove(index);
  };
  return (
    <>
      <SideDrawer
        onClose={onClose}
        isOpen={isOpen}
        title="Provide Payment Gateway Details"
        icon={<UserStar className="w-4 h-4" />}
        width="550px"
      >
        <section className="flex flex-col gap-5">
          <div className="p-4 bg-white/3 rounded-md">
            <p className="text-sm text-(--secondary-color) text-justify">
              Please provide the payment gateway details for your account. This
              information will be used to process payments and manage your
              subscription. Ensure that the details provided are accurate and
              up-to-date.
            </p>
          </div>

          <div className="p-7 pt-3 flex flex-col gap-7">
            {fields.map((item, index) => (
              <FormSegments
                key={item.id}
                title={`Payment Gateway Information ${index + 1}`}
                icon={<Building2 className="w-4 h-4" />}
              >
                <div className="flex flex-col gap-5">
                  <TextInput
                    label="Gateway Name"
                    {...register(`paymentGateways.${index}.gatewayName`)}
                    message={
                      errors?.paymentGateways?.[index]?.gatewayName?.message
                    }
                  />

                  <FormSelect
                    label="Select Payment Gateway"
                    required
                    placeholder="Select Here"
                    {...register(`paymentGateways.${index}.gatewayType`, {
                      required: true,
                    })}
                    control={control}
                    message={
                      errors?.paymentGateways?.[index]?.gatewayType?.message
                    }
                    options={COUNTRIES}
                  />

                  <TextInput
                    label="Payment Key"
                    {...register(`paymentGateways.${index}.paymentKey`)}
                    message={
                      errors?.paymentGateways?.[index]?.paymentKey?.message
                    }
                  />

                  {/* DELETE BUTTON */}
                  {fields.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleDeletePaymentGateway(index)}
                      className="text-red-500 underline self-start cursor-pointer hover:text-red-400"
                    >
                      Remove Gateway
                    </button>
                  )}
                </div>
              </FormSegments>
            ))}

            {/* ADD BUTTON */}
            <button
              type="button"
              className="text-white underline hover:text-(--secondary-color) self-start cursor-pointer"
              onClick={handleAddPaymentGateway}
            >
              Add Payment Gateway
            </button>

            <Button
              text="Proceed to next step"
              frontIcon={<ArrowRight />}
              fullWidth
              onClick={proceedSubmitPaymentGatewayDetailsToggle.open}
            />
          </div>
        </section>
      </SideDrawer>
      <FeedbackDialog
        variant="warning"
        title="Submit Payment Gateway Details?"
        text="You are about to submit your payment gateway details. Once submitted, you can proceed to the next step."
        btnText="Yes, Submit"
        onClick={handleProvidePaymentGatewayDetails}
        onClose={proceedSubmitPaymentGatewayDetailsToggle.close}
        isOpen={proceedSubmitPaymentGatewayDetailsToggle.isOpen}
      />
    </>
  );
}
