import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const data = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-orchid_pink.jpg?v=1680548652",
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-orchid_yellow.jpg?v=1680545655",
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-piedmont-orchid_white_purple.jpg?v=1680545920",
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-orchid_purple.jpg?v=1680542287",
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-orchid_sunrise.jpg?v=1680545540",
  },
  {
    id: 6,
    image:
      "https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-piedmont-orchid_white_yellow.jpg?v=1681766277",
  },
];

const Silder = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map(({ id, image }) => {
          return (
            <SwiperSlide key={id} className="lg:p-8">
              <div className="">
                <img
                  src={image}
                  alt=""
                  className="mx-2 rounded-md object-fill shadow md:mx-14  md:h-full md:w-3/4"
                />
              </div>
              <div className="hidden  bg-[#00AB84] absolute h-[60px] w-[62px] rounded-full transition-all ease-in-out hover:scale-110 md:right-14 md:top-4 lg:right-44 lg:top-20 md:flex justify-center items-center">
                <p className="text-lg font-bold text-white font-domine">
                  20% 
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Silder;
