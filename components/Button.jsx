 function Button({
  color,
  icon,
  text,
  className,
  hover,
  rounded = "rounded-full",
  shadow=true,
  size = "base",
}) {
  const baseClass =
    "transition-all duration-300 ease-in-out text-center justify-center items-center flex border-base";

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

  const classFix = `${baseClass} ${sizes[size]} ${typeColor[color]} ${hoverColor[hover]} ${className} ${rounded}  ${shadow && "shadow-base"}`;

  return (
    <div className={classFix}>
      {icon}
      <h1 className="text-lg font-bold">{text}</h1>
    </div>
  );
}

function Raw({children, border, color, className, ...props}) {

  const typeColor = {
    blue: "bg-baseBlue",
    green: "bg-baseGreen",
    yellow: "bg-baseYellow",
    pink: "bg-basePink",
    purple: "bg-basePurple",
  };

  const typeBorder = {
    blue: "border border-baseBlue",
    green: "border border-baseGreen",
    yellow: "border border-baseYellow",
    pink: "border border-basePink",
    purple: "border border-basePurple",
    base: "border-base"
  }

  const classFix = `${typeColor[color]} ${typeBorder[border]} ${className}`;
  return (
      <button className={classFix} {...props}>
        {children}
      </button>
  )
}

export default Object.assign(Button, { Raw });