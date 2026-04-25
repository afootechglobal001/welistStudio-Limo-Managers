export const NameAbbreviation: React.FC<{
  height: number;
  width: number;
  name: string;
  className?: string;
}> = (props) => {
  const names = props.name || "";
  const initials = names
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <div
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
      className={`text-xs p-2 rounded-full flex justify-center items-center bg-slate-200 ${props.className}`}
    >
      {initials.toUpperCase()}
    </div>
  );
};
