import { PlusIcon } from "lucide-react";

type PageSearchProps = {
  placeHolder: string;
  actionBtn?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
};

export const PageSearch = ({
  placeHolder = "Search Heres",
  actionBtn = false,
  buttonText = "Create",
  onButtonClick = () => null,
}: PageSearchProps) => {
  return (
    <div className="flex gap-3">
      <input
        placeholder={placeHolder}
        className="bg-white/20 p-2 px-4 rounded-full focus:outline-none text-sm font-medium-custom"
      />
      {actionBtn && (
        <button
          title={buttonText}
          className="cursor-pointer border-none bg-linear-to-br from-(--primary-color)  to-(--secondary-color) bg-size-[200%_100%] hover:bg-size-[150%_100%] bg-right text-white rounded-full text-xs p-2 px-3 whitespace-nowrap flex justify-center items-center gap-1.5  duration-200"
          onClick={onButtonClick}
        >
          <span className="flex items-center">
            <PlusIcon size={16} />
          </span>
          <span>{buttonText}</span>
        </button>
      )}
    </div>
  );
};
