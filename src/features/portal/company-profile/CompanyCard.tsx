"use client";

import Image from "next/image";
import { MapPin, Globe, Mail, LucideIcon } from "lucide-react";

type StatItem = {
  label: string;
  value: number;
  icon: LucideIcon;
};

type CompanyCardProps = {
  name: string;
  logo: string;
  location: string;
  website: string;
  email: string;
  status?: "Active" | "Inactive";
  stats: StatItem[];
};

export function CompanyCard({
  name,
  logo,
  location,
  website,
  email,
  status = "Active",
  stats,
}: CompanyCardProps) {
  return (
    <div className="flex grow gap-4 p-4 bg-(--primary-color) border border-white/15 rounded-2xl hover:bg-white/1 hover:border-(--secondary-color-light) transition-all duration-300">
      <div className="flex w-33 items-center justify-center border rounded-2xl border-white/20 overflow-hidden">
        <Image
          src={logo}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
          width={0}
          height={0}
          unoptimized
        />
      </div>

      <div className="flex flex-col gap-6 w-[calc(100%-156px)]">
        <div className="flex flex-col gap-2">
          <div className="w-full flex items-center justify-between">
            <h2 className="flex items-center text-[27px] font-bold text-(--title-color)">
              {name}
            </h2>

            <div className="flex items-center gap-3">
              <span className="px-4 py-2 text-xs font-medium text-(--active-color) bg-green-500/10 border border-green-500/30 rounded-full">
                {status}
              </span>

              <button
                title="Click to view company details"
                className="cursor-pointer border-none bg-linear-to-br from-(--primary-color) to-(--secondary-color) bg-size-[200%_100%] hover:bg-size-[150%_100%] bg-right text-white rounded-full text-[14px] h-8 px-5 flex items-center justify-center duration-200"
              >
                View
              </button>
            </div>
          </div>

          <div className="flex gap-3 text-sm flex-wrap leading-0">
            <div className="flex gap-1 items-center">
              <MapPin className="h-4 w-4 text-(--secondary-color)" />
              <span>{location}</span>
            </div>

            <div className="flex gap-1 items-center">
              <Globe className="h-4 w-4 text-(--secondary-color)" />
              <span>{website}</span>
            </div>

            <div className="flex gap-1 items-center">
              <Mail className="h-4 w-4 text-(--secondary-color)" />
              <span>{email}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 w-full">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex px-2.5 py-2 bg-white/2 border border-white/20 rounded-[10px]"
              >
                <div className="flex gap-4 items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <Icon className="h-6 w-6 p-1 text-(--secondary-color) bg-white/8 border border-white/20 rounded-lg" />
                    <h4 className="text-[14px]">{item.label}</h4>
                  </div>

                  <span className="py-1 px-3 font-bold-custom text-(--secondary-color) text-sm bg-white/8 border border-white/20 rounded-lg">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
