import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import Search from "./search/Search";
import {useStore} from "../context/Store";
import Button from "./Button";

export default function Header() {
  const {setSearchModal, cardProduct} = useStore();
  return (
    <header className="border-y-base bg-white px-6 py-3">
      <Navbar>
        <Navbar.Items className="flex justify-between gap-3 font-semibold">
          <Navbar.Item className="flex flex-1 w-full">
            <Button.Raw color="yellow"  className="w-full rounded-xl flex" onClick={() => setSearchModal(true)}>
              <Search input={false} />
            </Button.Raw>
          </Navbar.Item>
          <Navbar.Item
            icon={
              <div className="relative">
                {cardProduct?.length && <span
                    className="bg-baseYellow px-1 text-xs rounded-full absolute left-3 -top-2 font-bold">{cardProduct.length}</span>}
                <ShoppingCartIcon className="w-6 h-6"/>
              </div>
            }
          />
        </Navbar.Items>
      </Navbar>
    </header>
  );
}
