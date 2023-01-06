import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {useStore} from "../../context/Store";
import Search from "./Search";

export default function SearchButtonBack({children}){
	const {setSearchModal} = useStore();
	return(
			<div className="inline-flex items-center gap-3 w-full flex px-3 py-2 ">
				<ArrowLeftIcon className="w-6 h-6" onClick={() => setSearchModal(false)}/>
				<Search input />
				{children}
			</div>
	)
}