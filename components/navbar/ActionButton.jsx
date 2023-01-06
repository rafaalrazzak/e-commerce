import {ArrowLeftIcon, ShareIcon, ShoppingCartIcon} from "@heroicons/react/24/outline";
import {useStore} from "../../context/Store";
import Link from "next/link";
import Search from "../search/Search";
import {useRouter} from "next/router";

export default function ActionButton({search = false, share = false, cart = false, back = false, input = false, title}){

	const {cartProduct, setSearchModal, searchModal} = useStore();
	const router = useRouter();
	const handleClick = () => {
		if(searchModal){
			setSearchModal(false);
		} else{
			router.back();
		}
	}

	const IconClass = "w-6 h-6";
	return (
			<div className="inline-flex items-center gap-3 w-full flex px-3 py-2 ">
				{back && <ArrowLeftIcon className="w-6 h-6 cursor-pointer" onClick={handleClick}/>}
				{title && <h1 className="text-xl font-bold">{title}</h1>}
				{search && <Search input={input}/>}
				{share && <ShareIcon className={IconClass}/>}
				{cart && <Link href="/cart" className="relative cursor-pointer">
					{cartProduct?.length > 0 && <span
							className="bg-baseYellow px-1 text-xs rounded-full absolute left-3 -top-2 font-bold">{cartProduct.length}</span>}
					<ShoppingCartIcon className={IconClass}/>
				</Link>}

			</div>

	)
}