import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";

const IconClass = "w-4 h-4";

export default function Header() {
  return (
    <header className="bg-white px-6 py-3 border-base">
      <Navbar>
        <Navbar.Items className="flex gap-3 justify-between font-semibold">
          <Navbar.Item text="Home" />
          <Navbar.Item text="About" />
          <Navbar.Item
            text="Cart"
            icon={<ShoppingCartIcon className={IconClass} />}
          />
        </Navbar.Items>
      </Navbar>
    </header>
  );
}
