import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function CardRoot({ children }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {children}
    </Swiper>
  );
}

export function CardItem({ children }) {
  return <SwiperSlide>{children}</SwiperSlide>;
}
