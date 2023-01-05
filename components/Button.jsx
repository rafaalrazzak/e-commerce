export default function Button({
  color,
  icon,
  text,
  className,
  hover,
  size = "base",
}) {
  const baseClass =
    "transition-all duration-300 ease-in-out text-center justify-center items-center flex rounded-full border-base shadow-base";

  const typeColor = {
    blue: "bg-baseBlue",
    green: "bg-baseGreen",
    yellow: "bg-baseYellow",
    pink: "bg-basePink",
    purple: "bg-basePurple",
  };

  const sizes = {
    xs: "text-xs p-1",
    sm: "text-sm py-2 px-3",
    base: "px-6 py-3",
  };

  const hoverColor = {
    yellow: "hover:bg-baseGreen",
    green: "hover:bg-baseYellow",
    pink: "hover:bg-basePurple",
    blue: "hover:bg-basePink",
  };

  const classFix = `${baseClass} ${sizes[size]} ${typeColor[color]} ${hoverColor[hover]} ${className}`;

  return (
    <div className={classFix}>
      {icon}
      <h1 className="text-lg font-bold">{text}</h1>
    </div>
  );
}
