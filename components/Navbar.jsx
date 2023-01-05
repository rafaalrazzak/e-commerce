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
        "list-none transition-all duration-300 hover:font-bold hover:underline",
        {
          "flex items-center gap-1": icon,
        }
      )}
    >
      {icon}
      {text}
    </li>
  );
}

export default Object.assign(NavbarRoot, { Items, Item });
