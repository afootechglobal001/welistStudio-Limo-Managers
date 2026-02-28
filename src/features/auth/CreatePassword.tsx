import { FeedbackDialog } from "@/components/feedback-dialog";
import { Button, TextInput } from "@/components/form";
import useToggle from "@/hooks/useToggle";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const CreatePassword = () => {
  const router = useRouter();
  const passwordResetSuccessToggle = useToggle();
  const [isPending, setIsPending] = useState(false);
  const login = () => {
    router.push("/login");
  };
  const createPassword = async () => {
    setIsPending(true);
    passwordResetSuccessToggle.open();
    setIsPending(false);
  };
  return (
    <>
      <section className="flex flex-col gap-5 justify-center items-start animate-fade-up">
        <div className="flex flex-col gap-1">
          <div className="w-20">
            <Image
              src="/body-pix/icon.png"
              alt="Vector"
              className="w-full h-auto"
              width={0}
              height={0}
              unoptimized
            />
          </div>
          <h1 className="text-2xl text-(--title-color) font-bold-custom">
            Create <span className="text-(--secondary-color)">Password</span>
          </h1>
          <p className="text-(--text-color) text-[16px]">
            Enter a strong password to secure your account.
          </p>
        </div>
        <div className="w-full relative">
          <TextInput id="password" label="Create Password" type="password" />
        </div>

        {/* Confirm Password */}
        <div className="w-full relative">
          <TextInput id="cPassword" type="password" label="Confirm password" />
        </div>
        {/* BUTTON */}
        <Button
          onClick={createPassword}
          text="Proceed"
          frontIcon={<ArrowRight />}
          fullWidth
        />
        <p className="text-sm text-(--text-color)">
          Already have an account?{" "}
          <span
            className="text-(--secondary-color) font-medium-custom cursor-pointer hover:underline"
            onClick={login}
          >
            Login Here
          </span>
        </p>
      </section>
      <FeedbackDialog
        variant="success"
        title="Password Reset Successful"
        text="Your password have been reset successfully, you can now log into your account with your email and new password."
        btnText="Login to my account"
        loadingText="Processing..."
        onClick={login}
        isLoading={isPending}
        isOpen={passwordResetSuccessToggle.isOpen}
      />
    </>
  );
};
