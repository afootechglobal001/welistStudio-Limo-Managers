type pagesContentSegmentsProps = {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export const PagesContentSegments: React.FC<pagesContentSegmentsProps> = ({
  title,
  icon,
  children,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 bg-white/2 border border-white/20 rounded-xl">
      <p className="border-b border-white/20 rounded-xl rounded-b-none text-sm text-(--title-color) p-4 flex items-center gap-2 bg-white/5">
        {icon && <span className="text-(--secondary-color)">{icon}</span>}
        <span>{title}</span>
      </p>
      <div className="p-4">{children}</div>
    </div>
  );
};
