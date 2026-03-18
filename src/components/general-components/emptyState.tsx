import { Database } from "lucide-react";
import { Button } from "../form";

type EmptyStateProps = {
  title?: string;
  message?: string;
  actionBtn?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
};

export const EmptyState = ({
  title = "No Lists Found",
  message = "No file lists match your current filters. Try adjusting your search criteria or upload a new file.",
  actionBtn = false,
  buttonText = "Create",
  onButtonClick = () => null,
}: EmptyStateProps) => {
  return (
    <div className="max-w-87.5 flex flex-col gap-2 justify-center items-center text-center py-12">
      <Database className="h-12 w-12 text-slate-400" />
      <h2 className="font-mtn-bold">{title}</h2>
      <p>{message}</p>
      {actionBtn && (
        <Button
          text={buttonText}
          className="min-w-45"
          onClick={onButtonClick}
        />
      )}
    </div>
  );
};
