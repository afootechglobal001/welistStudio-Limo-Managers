"use client";
import { useState } from "react";
import { AUTH_PAGES } from "@/constants/auth";
import { UserAuthWrapper } from "@/features/auth/UserAuthWrapper";
import { AuthFormStepsType } from "@/types/auth/auth";
import { OtpVerification } from "./OtpVerification";
import { CreatePassword } from "./CreatePassword";

export default function VerifyAccount() {
  const [nextPage, setNextPage] = useState<AuthFormStepsType>(
    AUTH_PAGES.VERIFY_ACCOUNT,
  );
  return (
    <UserAuthWrapper>
      {nextPage === AUTH_PAGES.VERIFY_ACCOUNT && (
        <OtpVerification gotoAuthFormPage={setNextPage} />
      )}
      {nextPage === AUTH_PAGES.CREATE_PASSWORD && <CreatePassword />}
    </UserAuthWrapper>
  );
}
