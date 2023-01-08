import {useEffect, useState} from "react";
import clsx from "clsx";
import Image from "next/image";
import {MapPinIcon, TrashIcon} from "@heroicons/react/24/outline";
import {useStore} from "../context/Store";
import ActionButton from "../components/navbar/ActionButton";
import SelectButton from "../components/SelectButton";
import Button from "../components/Button";
import toCurrency from "../libs/toCurrency";

export default function Cart(){
	const {cartProduct, setCartProduct,} = useStore();
	const [total, setTotal] = useState();


	const [selected, setSelected] = useState({
		all: false, item: []
	});

	function handleChange(event){
		const {name, checked, id} = event.target;

		if(name === "all"){
			setSelected({
				all: checked, item: checked ? cartProduct.map(item => item) : [],
			});
		} else{
			const newItem = cartProduct.find(item => item.id === parseInt(id, 10));
			setSelected({
				all: false,
				item: checked ? [...selected.item, newItem] : selected.item.filter(item => item.id !== parseInt(id, 10)),
			});
		}
	}


	async function handleSubmit(e){
		e.preventDefault();
	}


	const handleCounter = (event) => {
		const {id, name, value} = event.target;
		const item = cartProduct.find((item) => item.id === parseInt(id, 10));
		if(item.quantity !== 0){
			if(value === 'plus' || (
					value === 'minus' && item.quantity > 1)){
				const updatedQuantity = value === 'plus' ? item.quantity + 1 : item.quantity - 1;
				const updatedItem = {...item, quantity: updatedQuantity};
				setCartProduct((prevCart) => prevCart.map((item) => item.id === parseInt(id, 10) ? updatedItem : item));
			}
		}
	};


	const handleDelete = (e) => {
		const {id} = e.target;
		setCartProduct(cartProduct.filter((item) => item.id === parseInt(id)));
	}

	useEffect(() => {
		setTotal({
			price: selected.item.reduce((acc, item) => acc + (
					item.priceInt * item.quantity), 0), quantity: selected.item.reduce((acc, item) => acc + item.quantity, 0),
		})
	}, [selected]);



	return (
			<div>
				<div className="bg-baseYellow">

					<ActionButton back title="Keranjang"/>
				</div>
				<div className="flex flex-col gap-3">

					<div className="border-b-base pl-4 py-2 bg-basePurple">
						<SelectButton title="Pilih semua" checked={selected.all} name="all" onChange={handleChange}/>
						<div className="inline-flex space-x-2 items-center ">
							<MapPinIcon className="w-4 h-4 "/>
							<p className=" w-3/5 truncate">Dikirim ke <span className="font-semibold">Jl. Aja dulu Desa Konoha, RT.06 RW. 66</span>
							</p>
						</div>
					</div>


					<div className="px-4 py-2 -my-4 bg-baseGreen min-h-screen border-y-base">

						{cartProduct.length >= 1 && (

								<div className="flex justify-start items-start">
									<SelectButton checked={selected.all} name="all" onChange={handleChange}/>
									<div className="ml-2 flex flex-col -my-1">
										<div className="inline-flex items-center space-x-2">
											<img
													src="https://images.tokopedia.net/img/official_store/badge_os.png"
													className="h-4 w-4"
													alt="Official Store"
											/>
											<h1 className="font-bold">Toko Mpok Diah</h1>
										</div>
										<p>Jakarta Selatan</p>
									</div>
								</div>

						)}

						<div className="mt-6">


							{cartProduct.map((product, index) => {
								const {id, title, price, priceInt, image, quantity} = product;

								return (
										<div key={index} className="flex flex-col gap-3">
											<div className="flex justify-start items-start">
												<SelectButton checked={selected.all || selected.item[id]} id={id}
														onChange={handleChange}/>
												<div className="ml-2 flex flex-col -my-1">
													<div className="inline-flex items-center space-x-2">
														<div className="w-20 h-24 relative bg-white rounded-xl overflow-hidden">
															<Image src={image} alt={title} className=" object-cover" fill/>
														</div>

														<div className="flex flex-col">
															<h1 className="font-bold line-clamp-1">{title}</h1>
															<>
																<div className="inline-flex space-x-2">
																	<h1 className="text-lg font-bold">{price}</h1>
																	<div className="my-1 flex items-center gap-2 text-xs ">
																		<p className="rounded bg-basePink py-1 px-2 text-pink-700 ">
																			30%
																		</p>
																		<h1 className="text-gray-700  line-through decoration-gray-700 ">
																			{toCurrency(priceInt * 1.3)}
																		</h1>
																	</div>
																</div>
															</>
														</div>
													</div>
												</div>
											</div>


											<div className="flex justify-between my-3 items-center">
												<h1>Pindahkan ke Wishlist</h1>
												<div className="inline-flex items-center gap-4">
													<button onClick={handleDelete} id={id}>
														<TrashIcon className="w-5 h-5"/>
													</button>
													<div className="flex gap-4 font-bold bg-baseYellow rounded-lg p-2 border-base items-center">
														<button onClick={handleCounter}
																id={id}
																className={clsx("w-5 h-5  p-2 flex items-center justify-center", {
																	"text-slate-500/70": quantity === 1
																})}
																value="minus"
																aria-readonly>
															-
														</button>
														<p>{quantity}</p>
														<button onClick={handleCounter}
																id={id}
																className="w-5 h-5 text-basePink  p-2  flex items-center justify-center"
																value="plus"
																aria-readonly>
															+
														</button>
													</div>
												</div>
											</div>
										</div>)
							})}
						</div>

						<aside className=" bg-baseYellow -mx-4 p-4 border-t-base fixed bottom-0 w-full">
							<div className="flex gap-3 justify-between">
								<div className="flex  flex-col">

									<h1 className="font-bold">Total Harga</h1>
									<h1 className="font-bold">{total?.price ? toCurrency(total.price) : "-"}</h1>
								</div>
								<Button color="pink" shadow={false} text={`Beli (${total?.quantity})`} rounded="rounded-lg"
										hover="purple">

								</Button>
							</div>
						</aside>
					</div>
				</div>
			</div>)
}