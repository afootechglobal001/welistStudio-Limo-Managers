import { Button } from "@/components/form";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Feature = {
  text: string;
  icon: ReactNode;
  active?: boolean;
};
type planDuration = {
  duration: string;
  abbr: string;
};

type PricingCardProps = {
  title: string;
  price: string;
  planDuration: planDuration;
  features: Feature[];
  action: () => void;
};

export default function PricingCard({
  title,
  price,
  planDuration,
  features,
  action,
}: PricingCardProps) {
  return (
    <div className="w-full min-w-50 p-5 flex flex-col gap-6 min-h-50 cursor-pointer bg-white/2 border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300">
      <h4 className="flex flex-col text-3xl font-medium-custom text-(--title-color)">
        {title}
        <span className="text-sm text-(--secondary-color)">
          {planDuration.duration} Plan
        </span>
      </h4>

      <h2 className="flex items-center text-4xl font-bold-custom text-(--title-color)">
        {price}
        <span className="text-sm text-(--secondary-color)">
          /{planDuration.abbr}
        </span>
      </h2>

      <ul className="flex flex-col gap-3">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 ${
              feature.active === false ? "opacity-50" : ""
            }`}
          >
            <span
              className={`${
                feature.active === false ? "" : "text-(--secondary-color)"
              }`}
            >
              {feature.icon}
            </span>
            {feature.text}
          </li>
        ))}
      </ul>

      <Button
        text="Get Started Now"
        frontIcon={<ArrowRight />}
        fullWidth
        onClick={action}
      />
    </div>
  );
}
