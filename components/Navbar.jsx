import clsx from "clsx";
function NavbarRoot({ children, className }) {
  return <navbar className={className}>{children}</navbar>;
}

function Items({ children, className }) {
  return <ol className={className}>{children}</ol>;
}

function Item({ children, icon, className }) {
  return (
    <li
      className={clsx(
        "list-none transition-all duration-300 hover:underline",
        {
          "flex items-center gap-1": icon,
        },
          className
      )}
    >
      {icon}
      {children}
    </li>
  );
}

export default Object.assign(NavbarRoot, { Items, Item });
