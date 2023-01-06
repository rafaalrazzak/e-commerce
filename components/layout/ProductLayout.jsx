import ActionButton from "../navbar/ActionButton";
import Button from "../Button";
import {ChatBubbleLeftEllipsisIcon, PlusIcon} from "@heroicons/react/24/outline";

export default function ProductLayout({children}) {
	return (
		<div className="flex flex-col h-full relative">
			<header className="fixed z-50 w-full bg-basePink justify-center">
				<ActionButton />
			</header>
			<main className="flex-1 overflow-y-auto">{children}</main>
		<footer className="border-y-base min-w-full sticky inset-x-0 -bottom-4 z-[99] mx-auto flex max-w-xl flex-col bg-basePink">
			<aside className="py-6 px-4 flex justify-between w-full">
					<Button shadow={false} size="sm"  rounded="rounded-lg" icon={<ChatBubbleLeftEllipsisIcon className=" h-8 w-8 " />}/>
					<div className="inline-flex space-x-2">
						<Button shadow={false} size="sm" rounded="rounded-lg" text="Beli Sekarang"/>
						<Button shadow={false} size="sm" color="yellow" rounded="rounded-lg" icon={<PlusIcon className="h-4 w-4" />} text="Keranjang"/>
					</div>
			</aside>
		</footer>
		</div>
	);
}