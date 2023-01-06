import {useRouter} from 'next/router';
import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import {useStore} from "../../context/Store";
import Search from "./Search";

export default function SearchButtonBack({children}){
	const {setSearchModal, searchModal} = useStore();
	const router = useRouter();

	const handleClick = () => {
		if(searchModal){
			setSearchModal(false);
		} else{
			router.back();
		}
	}

	return (
			<div className="inline-flex items-center gap-3 w-full flex px-3 py-2 ">
				<ArrowLeftIcon className="w-6 h-6 cursor-pointer" onClick={handleClick}/>
				<Search input/>
				{children}
			</div>)
}