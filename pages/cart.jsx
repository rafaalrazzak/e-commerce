import {useState} from "react";
import {MapPinIcon, MinusIcon, PlusIcon} from "@heroicons/react/24/outline";
import ActionButton from "../components/navbar/ActionButton";
import SelectButton from "../components/SelectButton";
import {useStore} from "../context/Store";
import useLocalStorage from "../hooks/useLocalStorage";
import Image from "next/image";
import toCurrency from "../libs/toCurrency";

export default function Cart(){
	const {cartProduct, allProducts} = useStore();
	const [storage, setStorage] = useLocalStorage("cart", []);


	const [selected, setSelected] = useState({
		all: false,
	});

	function handleChange(e){
		setSelected({
			...selected, [e.target.name]: e.target.checked
		});
	}

	async function handleSubmit(e){
		e.preventDefault();
	}


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


					<div className="px-4 py-2 -my-4 bg-baseGreen border-y-base">

						{/*Seller*/}
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
						{/*End Seller*/}


						<div className="mt-6">
							{cartProduct?.map((product, index) => {
								const {id, title, price, priceInt, image} = product;
								return (
										<div key={index} className="flex flex-col gap-3">
											<div className="flex justify-start items-start">
												<SelectButton checked={selected.all} name="all" onChange={handleChange}/>
												<div className="ml-2 flex flex-col -my-1">
													<div className="inline-flex items-center space-x-2">
														<div className="w-20 h-16 relative bg-white rounded-xl overflow-hidden">
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


											<div className="flex justify-between my-3">
												<h1>Pindahkan ke Wishlist</h1>
												<div className="flex flex-col gap-2">
													<div className="flex items-center gap-2 bg-baseYellow px-2  rounded-xl border-base">
														<button
																className=" text-pink-700/50 rounded-full w-8 h-8 flex items-center justify-center">
															<MinusIcon className="w-4 h-4"/>
														</button>
														<h1 className="text-lg font-bold">
															{cartProduct.filter((item) => item.id === id).length}
														</h1>
														<button
																className=" text-pink-700 rounded-full w-8 h-8 flex items-center justify-center">
															<PlusIcon className="w-4 h-4"/>
														</button>
													</div>
												</div>

											</div>

											{/*<div className="flex justify-between items-center">*/}
											{/*	<div className="flex items-center space-x-2">*/}
											{/*		<button*/}
											{/*				className="bg-basePurple text-white rounded-full w-8 h-8 flex justify-center items-center">-*/}
											{/*		</button>*/}
											{/*		<p className="font-semibold">{quantity}</p>*/}
											{/*		<button*/}
											{/*				className="bg-basePurple text-white rounded-full w-8 h-8 flex justify-center items-center">+*/}
											{/*		</button>*/}
											{/*	</div>*/}
											{/*	<div className="flex items-center space-x-2">*/}
											{/*		<p className="font-semibold">{discountPrice}</p>*/}
											{/*		<button*/}
											{/*				className="bg-basePurple text-white rounded-full w-8 h-8 flex justify-center items-center">x*/}
											{/*		</button>*/}
											{/*	</div>*/}
											{/*</div>*/}

										</div>)
							})}
						</div>

					</div>

					<button onClick={handleSubmit}>Submit</button>


				</div>
			</div>)
}