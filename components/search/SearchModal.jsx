import {Dialog} from "@headlessui/react";
import {useStore} from "../../context/Store";
import ActionButton from "../navbar/ActionButton";

export default function SearchModal(){
	const {searchModal, setSearchModal} = useStore();
	return (
			<Dialog open={searchModal} onClose={() => setSearchModal(false)}>
				<Dialog.Panel className="absolute w-screen h-screen bg-basePink inset-0 z-50">
					<ActionButton/>
				</Dialog.Panel>
			</Dialog>)
}