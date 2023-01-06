import {ShareIcon, ShoppingCartIcon} from "@heroicons/react/24/outline";
import SearchButtonBack from "../search/SearchButtonBack";
import {useStore} from "../../context/Store";

export default function ActionButton(){
	const {cartProduct} = useStore();

	const IconClass = "w-6 h-6";
	return (
			<SearchButtonBack >
				<ShareIcon className={IconClass}/>
				<div className="relative">
					{cartProduct?.length > 0 && <span
							className="bg-baseYellow px-1 text-xs rounded-full absolute left-3 -top-2 font-bold">{cartProduct.length}</span>}
					<ShoppingCartIcon className={IconClass}/>
				</div>
			</SearchButtonBack>

	)
}