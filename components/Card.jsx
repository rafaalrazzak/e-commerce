export default function Card({ children, color, className }) {
  const baseClass =
    " border-base shadow-base overflow-hidden rounded-xl py-5 px-10";
  const typeColor = {
    blue: "bg-baseBlue",
    green: "bg-baseGreen",
    yellow: "bg-baseYellow",
    pink: "bg-basePink",
    purple: "bg-basePurple",
  };

  const classFix = `${baseClass} ${typeColor[color]} ${className}`;

  return <div className={classFix}>{children}</div>;
}
