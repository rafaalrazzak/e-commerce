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
      <div className="border-y-base -mx-4 flex rounded-sm bg-baseGreen ">
        <div className="flex w-full py-6 pl-6">
          <Swiper
            modules={[Controller, Virtual]}
            spaceBetween={10}
            slidesPerView={2.5}
          >
            {allProducts.splice(0, 5).map((product, index) => (
              <SwiperSlide className="overflow-visible" key={product.id}>
                <Link
                  href={`p/${product.id}`}
                  key={product.id}
                  className="cursor-pointer"
                >
                  <ProductCard
                    size="sm"
                    href={`/p/${product.id}`}
                    virtualIndex={index}
                    {...product}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="my-4 grid auto-cols-fr grid-cols-2 justify-between gap-4">
        {allProducts.map((product) => (
          <Link
            href={`p/${product.id}`}
            key={product.id}
            className="cursor-pointer"
          >
            <ProductCard
              size="sm"
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
