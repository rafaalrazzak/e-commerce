import Link from "next/link";

export default function Card({
  children,
  color,
  className,
  size = "base",
  shadow = true,
}) {
  const baseClass = " border-base  overflow-hidden rounded-xl py-5 px-10";

  const sizes = {
    sm: "py-2 px-4",
    md: "py-3 px-6",
    base: "py-5 px-10",
  };

  const typeColor = {
    blue: "bg-baseBlue",
    green: "bg-baseGreen",
    yellow: "bg-baseYellow",
    pink: "bg-basePink",
    purple: "bg-basePurple",
  };

  const classFix = `${baseClass} ${shadow && "shadow-base"} ${
    typeColor[color]
  } ${sizes[size]} ${className}`;


  return <div className={classFix}>{children}</div>;
}
