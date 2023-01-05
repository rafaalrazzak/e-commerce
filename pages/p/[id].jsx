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
      <div className="relative h-64 ">
        <Image src={data.image} fill className="object-cover" priority />
      </div>
      {/* Header */}
      <div className="border-y-base my-4 bg-baseGreen px-4 py-2">
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-bold">${data.price}</h1>
            <div className="my-1 flex items-center gap-2 text-xs ">
              <p className="rounded bg-basePink py-1 px-2 text-pink-700 ">
                30%
              </p>
              <h1 className="text-gray-700  line-through decoration-gray-700 ">
                ${data.price * 1.3}
              </h1>
            </div>
          </div>
          <div className="flex  flex-col items-end justify-end gap-3">
            <HeartIcon className="h-6 w-6" />
            <div className="inline-flex  items-center space-x-2 rounded-lg  bg-basePink px-1 ">
              <img
                src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9527c778.svg"
                className="h-4 w-4"
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
        <div className="-my-4 bg-baseYellow py-2 px-4 ">
          <h1 className="font-medium leading-tight">{data.title}</h1>
          <p className="text-sm">{`Stock tinggal < 20, beli segera!`}</p>
          <div className="inline-flex w-full space-x-2 ">
            <h1 className="py-2">{`Terjual ${data.rating.count}`}</h1>
          </div>
        </div>
      </div>
      {/* End Of Ttitle */}

      <div className="border-y-base mt-2 bg-baseYellow py-2 px-4 ">
        <h1 className="font-semibold">Deskripsi Produk</h1>
        <p>{data.description}</p>
      </div>

      <div className="bg-basePurple px-4 py-2">
        {/* Main User */}
        <div className="flex">
          <div className="h-10 w-10 rounded-full bg-baseGreen" />
          <div className="ml-2 flex flex-col -space-y-1">
            <div className="inline-flex items-center space-x-2">
              <img
                src="https://images.tokopedia.net/img/official_store/badge_os.png"
                className="h-4 w-4"
              />
              <h1 className="text-lg font-bold">Toko Mpok Diah</h1>
            </div>
            <div className="inline-flex items-center space-x-2">
              <div className="h-1 w-1 rounded-full bg-baseGreen" />
              <p className="font-bold text-baseGreen">Online</p>
            </div>
            <p className="font-semibold">Jakarta Selatan</p>
          </div>
        </div>
        {/*End Main User */}

        {/* User Action */}

        <div className="my-2 flex w-full items-end justify-between">
          <div className="flex flex-col">
            <div className="inline-flex items-center space-x-2">
              <StarIcon className="h-4 w-4" />
              <p>
                4.9{" "}
                <span className="text-sm text-gray-800">rata rata ulasan</span>
              </p>
            </div>
            <div className="inline-flex items-center space-x-2">
              <ClockIcon className="h-4 w-4" />
              <p>
                ± 1 jam{" "}
                <span className="text-sm text-gray-800">pesanan diproses</span>
              </p>
            </div>
          </div>

          <div className="rounded-xl border-2 border-black px-4 py-2 font-bold">
            Following
          </div>
        </div>
      </div>
      {/* End User Action */}

      {/* All Product */}
      <div className="border-y-base bg-baseGreen px-4 py-2">
        <div className="inline-flex w-full justify-between">
          <h1 className="font-bold">Lainnya dari toko ini</h1>
          <p className="font-semibold">LIhat semua</p>
        </div>

        <div className="flex w-full py-6 pl-6">
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

      <aside className=" border-y-base fixed inset-x-0 -bottom-4 z-[99] mx-auto flex max-w-xl flex-col bg-baseYellow py-6 px-4">
        <div className="inline-flex justify-around space-x-2">
          <ChatBubbleLeftEllipsisIcon className="border-base h-10 w-10 rounded-lg p-2" />
          <div className="inline-flex space-x-2">
            <button className="border-base  rounded-lg py-2 px-4 font-bold">
              Beli Sekarang
            </button>
            <button className="border-base inline-flex items-center rounded-lg bg-basePink py-2 px-4 font-bold">
              <PlusIcon className="h-4 w-4" />
              Keranjang
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
