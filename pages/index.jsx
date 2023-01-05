import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { useStore } from "../context/Store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Virtual } from "swiper";
import "swiper/css";
import Link from "next/link";

export default function Home() {
  const { allProducts } = useStore();

  return (
    <Layout>
      <Hero />
      <div className="flex -mx-6 bg-baseGreen rounded-sm border-y-base">
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

      <div className="grid grid-cols-2 gap-4 my-4 auto-cols-fr justify-between">
        {allProducts.map((product) => (
          <Link
            href={`p/${product.id}`}
            key={product.id}
            className="cursor-pointer"
          >
            <ProductCard
              href={`/p/${product.id}`}
              color="purple"
              {...product}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
}
