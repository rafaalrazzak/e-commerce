import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  StarIcon,
  ClockIcon,
  ChatBubbleLeftEllipsisIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Virtual } from "swiper";
import "swiper/css";
import { useStore } from "../../context/Store";
import ProductCard from "../../components/ProductCard";

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default function ProductPage({ data }) {
  const { allProducts } = useStore();

  return (
    <div className="relative">
      <div className="h-64 relative ">
        <Image src={data.image} fill className="object-cover" priority />
      </div>
      {/* Header */}
      <div className="px-4 my-4 py-2 bg-baseGreen border-y-base">
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-bold">${data.price}</h1>
            <div className="flex items-center gap-2 text-xs my-1 ">
              <p className="bg-basePink rounded py-1 px-2 text-pink-700 ">
                30%
              </p>
              <h1 className="line-through  decoration-gray-700 text-gray-700 ">
                ${data.price * 1.3}
              </h1>
            </div>
          </div>
          <div className="flex  flex-col justify-end items-end gap-3">
            <HeartIcon className="w-6 h-6" />
            <div className="inline-flex  space-x-2 bg-basePink rounded-lg  px-1 items-center ">
              <img
                src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9527c778.svg"
                className="w-4 h-4"
              />
              <p>
                {data.rating.rate} <span>({data.rating.count * 0.9})</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Header */}
      <div>
        <div className="bg-baseYellow py-2 -my-4 px-4 ">
          <h1 className="font-medium leading-tight">{data.title}</h1>
          <p className="text-sm">{`Stock tinggal < 20, beli segera!`}</p>
          <div className="inline-flex space-x-2 w-full ">
            <h1 className="py-2">{`Terjual ${data.rating.count}`}</h1>
          </div>
        </div>
      </div>
      {/* End Of Ttitle */}

      <div className="bg-baseYellow py-2 mt-2 px-4 border-y-base ">
        <h1 className="font-semibold">Deskripsi Produk</h1>
        <p>{data.description}</p>
      </div>

      <div className="px-4 bg-basePurple py-2">
        {/* Main User */}
        <div className="flex">
          <div className="w-10 h-10 bg-baseGreen rounded-full" />
          <div className="flex-col -space-y-1 flex ml-2">
            <div className="inline-flex space-x-2 items-center">
              <img
                src="https://images.tokopedia.net/img/official_store/badge_os.png"
                className="w-4 h-4"
              />
              <h1 className="font-bold text-lg">Toko Mpok Diah</h1>
            </div>
            <div className="inline-flex items-center space-x-2">
              <div className="w-1 h-1 bg-baseGreen rounded-full" />
              <p className="text-baseGreen font-bold">Online</p>
            </div>
            <p className="font-semibold">Jakarta Selatan</p>
          </div>
        </div>
        {/*End Main User */}

        {/* User Action */}

        <div className="my-2 flex justify-between w-full items-end">
          <div className="flex-col flex">
            <div className="inline-flex space-x-2 items-center">
              <StarIcon className="h-4 w-4" />
              <p>
                4.9{" "}
                <span className="text-sm text-gray-800">rata rata ulasan</span>
              </p>
            </div>
            <div className="inline-flex space-x-2 items-center">
              <ClockIcon className="h-4 w-4" />
              <p>
                ± 1 jam{" "}
                <span className="text-sm text-gray-800">pesanan diproses</span>
              </p>
            </div>
          </div>

          <div className="border-2 border-black px-4 py-2 rounded-xl font-bold">
            Following
          </div>
        </div>
      </div>
      {/* End User Action */}

      {/* All Product */}
      <div className="px-4 bg-baseGreen py-2 border-y-base">
        <div className="inline-flex justify-between w-full">
          <h1 className="font-bold">Lainnya dari toko ini</h1>
          <p className="font-semibold">LIhat semua</p>
        </div>

        <div className="flex py-6 pl-6 w-full">
          <Swiper
            modules={[Controller, Virtual]}
            spaceBetween={20}
            slidesPerView={2.5}
          >
            {allProducts.splice(0, 5).map((product, index) => (
              <SwiperSlide className="overflow-visible">
                <Link
                  href={`p/${product.id}`}
                  key={product.id}
                  className="cursor-pointer"
                >
                  <ProductCard
                    href={`/p/${product.id}`}
                    {...product}
                    virtualIndex={index}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* End Of All Product */}

      <aside className=" fixed inset-x-0 -bottom-4 z-[99] mx-auto flex max-w-xl flex-col py-6 px-4 border-y-base bg-baseYellow">
        <div className="inline-flex space-x-2 justify-around">
          <ChatBubbleLeftEllipsisIcon className="w-10 h-10 border-base rounded-lg p-2" />
          <div className="inline-flex space-x-2">
            <button className="border-base  font-bold rounded-lg py-2 px-4">
              Beli Sekarang
            </button>
            <button className="border-base bg-basePink font-bold rounded-lg py-2 px-4 inline-flex items-center">
              <PlusIcon className="w-4 h-4" />
              Keranjang
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
