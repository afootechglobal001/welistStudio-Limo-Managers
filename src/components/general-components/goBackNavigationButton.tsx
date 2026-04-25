import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
interface BackButtonProps {
  title: string;
  currentPage: string;
  className?: string;
}

export const GoBackNavigationButton: React.FC<BackButtonProps> = ({
  title,
  currentPage,
  className = "",
}) => {
  const router = useRouter();

  return (
    <div className={`mb-6 ${className}`}>
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="font-medium">{title}</span>
        <span className="text-gray-400">/</span>
        <span className="font-medium text-gray-900">{currentPage}</span>
      </button>
    </div>
  );
};
