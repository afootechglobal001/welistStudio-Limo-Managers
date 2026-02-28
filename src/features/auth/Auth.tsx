import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextInput } from "@/components/form";
import { AuthFormStepsType } from "@/types/auth/auth";
import { AuthLoginSchema, AuthLoginType } from "@/types/auth/schema";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";

interface AuthFormStepsProps {
  gotoAuthFormPage: (stepKey: AuthFormStepsType) => void;
}

export const Auth: React.FC<AuthFormStepsProps> = (props) => {
  const { gotoAuthFormPage } = props;
  const router = useRouter();
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<AuthLoginType>({
    defaultValues: {
      email: "",
      password: "",
      user_type: "ADMIN",
    },
    resolver: zodResolver(AuthLoginSchema),
    mode: "onChange",
  });

  const handleLogin = () => {
    router.push("/dashboard");
  };

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  const resetPassword = async () => {
    gotoAuthFormPage("resetPassword");
  };

  return (
    <>
      <section className="flex flex-col gap-5 justify-center items-start animate-fade-down">
        <div className="flex flex-col gap-2">
          <div className="w-50">
            <Image
              src="/body-pix/logo.png"
              alt="Vector"
              className="w-full h-auto"
              width={0}
              height={0}
              unoptimized
            />
          </div>
          <h1 className="text-2xl text-gray-100 font-bold-custom">
            Welcome <span className="text-(--secondary-color)">Back!</span>
          </h1>
          <p>
            Please enter your details to login to your{" "}
            <strong>Limo Managers</strong> portal
          </p>
        </div>

        <TextInput
          id="email"
          label="Email address"
          message={errors.email?.message}
          {...register("email")}
          // disabled={isPending}
        />
        <div className="w-full relative">
          <TextInput
            id="password"
            label="Password"
            type="password"
            message={errors.password?.message}
            {...register("password")}
            //disabled={isPending}
          />
        </div>
        <p className="text-sm text-(--text-color)">
          Forgot Password?{" "}
          <span
            className="text-(--secondary-color) font-medium-custom cursor-pointer hover:underline"
            onClick={resetPassword}
          >
            Reset Password Here
          </span>
        </p>

        {/* BUTTON */}
        <Button
          text="Login"
          frontIcon={<ArrowRight />}
          fullWidth
          // isLoading={isPending}
          onClick={handleLogin}
        />

        {/* dont have an account? sign up here */}
        <div className="flex flex-col gap-4 items-center justify-center w-full pt-4 border-t border-gray-300">
          <p className="text-sm text-(--text-color)">
            Don&apos;t have an account?{" "}
            <span
              className="text-(--secondary-color) font-medium-custom cursor-pointer hover:underline"
              onClick={handleSignUp}
            >
              Sign Up Here
            </span>
          </p>
          <p className="text-sm text-(--text-color) text-center">
            By logging in to this portal, you agree to our
            <br />
            <span className="text-(--secondary-color) font-medium-custom cursor-pointer hover:underline">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-(--secondary-color) font-medium-custom cursor-pointer hover:underline">
              Terms of Service
            </span>
            .
          </p>
        </div>
      </section>
    </>
  );
};
