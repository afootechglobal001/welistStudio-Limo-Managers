"use client";
import { useEffect, useState } from "react";
import { AUTH_PAGES } from "@/constants/auth";
import { UserAuthWrapper } from "@/features/auth/UserAuthWrapper";
import { Auth } from "./Auth";
import { AuthFormStepsType } from "@/types/auth/auth";
import { ResetPassword } from "./ResetPassword";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { LoadingScreen } from "@/components/general-components/loadingScreen";

export default function Login() {
  const { user } = useAuthStore();
  const router = useRouter();
  const [nextPage, setNextPage] = useState<AuthFormStepsType>(AUTH_PAGES.LOGIN);

  // Redirect logged-in users
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  // Show loading while redirecting
  if (user) {
    return <LoadingScreen message="Redirecting to dashboard..." />;
  }

  return (
    <UserAuthWrapper>
      {nextPage === AUTH_PAGES.LOGIN && <Auth gotoAuthFormPage={setNextPage} />}
      {nextPage === AUTH_PAGES.RESET_PASSWORD && (
        <ResetPassword gotoAuthFormPage={setNextPage} />
      )}
    </UserAuthWrapper>
  );
}
