type LoadingScreenProps = {
  message?: string;
};

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = "Loading...",
}) => {
  return (
    <div className="flex items-center justify-center h-screen bg-(---body-bg)">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-slate-300 border-t-(--secondary-color) rounded-full animate-spin"></div>

        {/* Animated text */}
        <p className="font-medium-custom text-lg animate-pulse">{message}</p>
      </div>
    </div>
  );
};
