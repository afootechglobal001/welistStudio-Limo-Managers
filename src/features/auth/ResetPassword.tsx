import { Button, TextInput } from "@/components/form";
import { AuthFormStepsType } from "@/types/auth/auth";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface AuthFormStepsProps {
  gotoAuthFormPage: (stepKey: AuthFormStepsType) => void;
}

export const ResetPassword: React.FC<AuthFormStepsProps> = (props) => {
  const { gotoAuthFormPage } = props;
  const login = () => {
    gotoAuthFormPage("login");
  };
  const router = useRouter();

  const handleVerifyAccount = () => {
    router.push("/login/verify-account");
  };

  // const verifyAccount = async () => {
  //   gotoAuthFormPage("verifyAccount");
  // };
  return (
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
          Reset <span className="text-(--secondary-color)">Password</span>
        </h1>
        <p className="text-gray-500 text-[16px]">
          Enter your registered email address
        </p>
      </div>

      <TextInput id="username" label="Email Address" />

      {/* BUTTON */}
      <Button
        onClick={handleVerifyAccount}
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
  );
};
