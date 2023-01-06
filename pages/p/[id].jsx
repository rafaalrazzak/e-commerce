import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  StarIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Virtual } from "swiper";
import "swiper/css";
import { useStore } from "../../context/Store";
import ProductCard from "../../components/ProductCard";
import Rating from "../../components/Rating";
import Button from "../../components/Button";
import ProductLayout from "../../components/layout/ProductLayout";

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default function ProductPage({ data }) {
  const {allProducts, setCartProduct, cartProduct} = useStore();

  function handleBuy(){
    alert("Beli Sekarang");
  }

  function handleAddToCart(){
    if(cartProduct.find((item) => item.id === data.id)){
      alert("Produk sudah ada di keranjang");
    }else{
      setCartProduct([...cartProduct, data]);
      alert("Produk berhasil ditambahkan ke keranjang");
    }
  }

  return (
      <ProductLayout handleBuy={handleBuy} handleAddToCart={handleAddToCart}>
        <div className="relative h-64 mt-18 ">
          <Image src={data.image} fill className="object-cover" priority/>
        </div>
        {/* Header */}
        <div className="border-y-base my-4 bg-baseGreen px-4 py-2">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-bold">{data.price}</h1>
              <div className="my-1 flex items-center gap-2 text-xs ">
                <p className="rounded bg-basePink py-1 px-2 text-pink-700 ">
                30%
              </p>
              <h1 className="text-gray-700  line-through decoration-gray-700 ">
                Rp {data.priceInt * 1.3}
              </h1>
            </div>
          </div>
          <div className="flex  flex-col items-end justify-end gap-3">
            <HeartIcon className="h-6 w-6" />
            <Rating
              text={
                <span>
                  {data.rating.rate} <span>({data.rating.count * 0.9})</span>
                </span>
              }
            />
          </div>
        </div>
      </div>
      {/* End Header */}
      <>
        <div className="-my-4 bg-baseYellow py-2 px-4 ">
          <h1 className="font-medium leading-tight">{data.title}</h1>
          <p className="text-sm">{`Stock tinggal < 20, beli segera!`}</p>
          <div className="inline-flex w-full space-x-2 ">
            <h1 className="py-2">{`Terjual ${data.rating.count}`}</h1>
          </div>
        </div>
      </>
      {/* End Of Ttitle */}

      <div className="border-y-base mt-2 bg-baseYellow py-2 px-4 ">
        <h1 className="font-semibold">Deskripsi Produk</h1>
        <p className="leading-relaxed">{data.description}</p>
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
                  alt="Official Store"
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

          <Button shadow={false} size="sm" rounded="rounded-lg" text="Following"/>
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
              <SwiperSlide className="overflow-visible" key={product.id}>
                <Link
                    href={`/p/${product.id}`}
                    key={product.id}
                  className="cursor-pointer"
                >
                  <ProductCard
                    size="sm"
                    {...product}
                      virtualIndex={index}
                  />
                </Link>
              </SwiperSlide>))}
          </Swiper>
        </div>
      </div>
        {/* End Of All Product */}


      </ProductLayout>
  );
}
