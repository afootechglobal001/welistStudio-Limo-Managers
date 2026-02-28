"use client";
import { UserAuthWrapper } from "@/features/auth/UserAuthWrapper";
import { useRouter } from "next/navigation";
import { Button, TextInput } from "@/components/form";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const handleVerifEmail = () => {
    router.push("/sign-up/verify-account");
  };
  return (
    <UserAuthWrapper>
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
            Client <span className="text-(--secondary-color)">Sign Up!</span>
          </h1>
          <p className="text-(--text-color) text-[16px]">
            Kindly provide the required information to{" "}
            <strong>sign up to Limo Managers Client Portal.</strong>
          </p>
        </div>

        <div className="flex items-center justify-between gap-4">
          <TextInput
            id="text"
            label="First Name"
            // disabled={isPending}
          />

          <TextInput
            id="text"
            label="Last Name"
            // disabled={isPending}
          />
        </div>

        <TextInput
          id="email"
          label="Email Address"
          // disabled={isPending}
        />

        <TextInput
          id="tel"
          label="Mobile Number"
          // disabled={isPending}
        />

        <div className="w-full relative">
          <TextInput id="password" label="Create Password" type="password" />
        </div>

        {/* Confirm Password */}
        <div className="w-full relative">
          <TextInput type="password" label="Confirm password" />
        </div>

        {/* BUTTON */}
        <Button
          text="Sign-Up"
          frontIcon={<ArrowRight />}
          fullWidth
          // isLoading={isPending}
          onClick={handleVerifEmail}
        />

        {/* dont have an account? sign up here */}
        <div className="flex flex-col gap-4 items-center justify-center w-full pt-4 border-t border-gray-300">
          <p className="text-sm text-(--text-color)">
            Already have an account?{" "}
            <Link
              className="text-(--secondary-color) font-medium-custom cursor-pointer hover:underline"
              href="/login"
            >
              Login Here
            </Link>
          </p>
          <p className="text-sm text-(--text-color) text-center">
            By signing up to this portal, you agree to our
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
    </UserAuthWrapper>
  );
}
