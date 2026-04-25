import type { Metadata } from "next";
import ApiDocs from "@/features/portal/api-docs/ApiDocs";

export const metadata: Metadata = {
  title: "API Docs - Limo Managers Client Portal",
  description:
    "Access our comprehensive API documentation to integrate Limo Managers with your existing systems and streamline your workflow.",
};
export default function Page() {
  return <ApiDocs />;
}
