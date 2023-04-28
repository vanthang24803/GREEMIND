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
      "https://i.pinimg.com/564x/42/0e/78/420e78390930fcc9bed85edb176829a8.jpg",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/564x/17/1b/9a/171b9abb4e18d607c3213c007d31e67d.jpg",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/564x/9d/52/6e/9d526e6beace55761e2806c5ac24a2db.jpg",
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/564x/f8/47/01/f847019beb3cbaab94209b2e19948f23.jpg",
  },
  {
    id: 5,
    image:
      "https://i.pinimg.com/564x/56/48/db/5648db70778c9a20ed5f3e7613661b6c.jpg",
  },
  {
    id: 6,
    image:
      "https://i.pinimg.com/564x/b1/33/34/b133342285beb204560c462be04dc995.jpg",
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
              <img
                src={image}
                alt=""
                className="mx-2 rounded-md object-fill shadow md:mx-14  md:h-full md:w-3/4  lg:h-5/6 lg:w-5/6"
              />
              <div className="primary absolute h-[58px] w-[63px] rounded-full transition-all ease-in-out hover:scale-110 md:right-14 md:top-4 lg:right-32 lg:top-20">
                <p className="my-4 gap-x-2 text-center text-xl font-bold text-white">
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
