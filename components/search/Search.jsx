import {MagnifyingGlassIcon} from "@heroicons/react/24/outline"

export default function Search({input}){
	return (
			<>
				<div className="flex flex-1 rounded-xl py-2 px-4 bg-baseYellow items-center gap-2 border-base">
					<MagnifyingGlassIcon className="w-4 h-4"/>
					{input ? (
							<input
									type="search"
									placeholder="Cari di Tokopedei"
									className="bg-baseYellow  focus:outline-none placeholder:text-black/60 w-full flex flex-1 "
							/>) : (
							<p className=" focus:outline-none text-black/50 text-sm">Cari apa?</p>)}
				</div>
			</>


	)
}