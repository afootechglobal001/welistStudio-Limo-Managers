import Image from "next/image";
import { ReactNode } from "react";

type UserAuthWrapperProps = {
  children: ReactNode;
};

export const UserAuthWrapper = ({ children }: UserAuthWrapperProps) => {
  return (
    <main className="min-h-screen w-screen flex bg-gray-900">
      {/* LEFT SECTION */}
      <section className="relative w-full max-w-150  flex flex-col justify-between items-start animate-fade-left">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/body-pix/auth-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* logo */}
        <div className="p-10 ">
          <div className="w-20 relative z-10 ">
            <Image
              src="/body-pix/icon.png"
              alt="Vector"
              className="w-full h-auto"
              width={0}
              height={0}
              unoptimized
            />
          </div>
        </div>

        {/* text */}
        <div className="flex flex-col gap-3 text-white relative  inset-0 bg-linear-to-t from-black to-transparent -z-5 p-10 pt-72 pb-20">
          <h1 className="font-bold-custom text-2xl">
            Limo Managers -{" "}
            <span className="text-(--secondary-color)">Client Portal</span>
          </h1>
          <p className="font-medium-custom text-[15px]">
            This application is for limo managers to oversee their fleet, track
            bookings, and manage customer interactions. Access your dashboard to
            stay organized and efficient.
          </p>
        </div>
      </section>
      <section className="w-full max-w-[calc(100%-600px)] flex justify-center items-center bg-gray-900 bg-[url('/body-pix/login-form-bg.png')]  bg-right bg-no-repeat p-10 ">
        <div className="w-125">{children}</div>
      </section>
    </main>
  );
};
