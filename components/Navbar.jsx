import clsx from "clsx";
function NavbarRoot({ children }) {
  return <navbar>{children}</navbar>;
}

function Items({ children, className }) {
  return <ol className={className}>{children}</ol>;
}

function Item({ text, icon }) {
  return (
    <li
      className={clsx(
        "list-none hover:font-bold hover:underline transition-all duration-300",
        {
          "flex gap-1 items-center": icon,
        }
      )}
    >
      {icon}
      {text}
    </li>
  );
}

export default Object.assign(NavbarRoot, { Items, Item });
