import {Dialog} from "@headlessui/react";
import {useStore} from "../../context/Store";
import SearchButtonBack from "./SearchButtonBack";
import {ShareIcon, ShoppingCartIcon} from "@heroicons/react/24/outline";

export default function SearchModal(){
	const {searchModal, setSearchModal, countCart} = useStore();

	console.log(countCart)

	const IconClass = "w-6 h-6";

	return (
			<Dialog open={searchModal} onClose={() => setSearchModal(false)}>
				<Dialog.Panel className="absolute w-screen h-screen bg-basePink inset-0 z-50">
					<SearchButtonBack>
						<ShareIcon className={IconClass}/>
						<div className="relative">
							{countCart && <span
									className="bg-baseYellow px-1 text-xs rounded-full absolute left-3 -top-2 font-bold">{countCart}</span>}
							<ShoppingCartIcon className={IconClass}/>
						</div>
					</SearchButtonBack>
				</Dialog.Panel>
			</Dialog>)
}