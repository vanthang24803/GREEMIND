import React from "react";
import Cate1 from "/src/assets/Cate1.svg";
import Cate2 from "/src/assets/Cate2.svg";
import Cate3 from "/src/assets/Cate3.svg";
import { RiArrowRightLine } from "react-icons/ri";

const category = {
  title: "Category",
  subtitle: "Find what you are looking for",
  brand: [
    {
      id: 1,
      image: Cate1,
      name: "Natural Plants",
    },
    {
      id: 2,
      image: Cate2,
      name: "Plant Accessories",
    },
    {
      id: 3,
      image: Cate3,
      name: "Artificial Plants",
    },
  ],

  desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
  btnText: "Explore",
};

const Category = () => {
  const { title, subtitle, brand, desc, btnText } = category;
  return (
    <div className="my-8 max-w-screen-2xl" id="category">
      <h1 className="my-2 text-center text-3xl font-bold">{title}</h1>
      <p className="my-4 mb-20 text-center text-gray-400">{subtitle}</p>
      <div className="primary h-auto w-auto md:h-[560px] lg:h-[760px]">
        <div className="flex flex-col md:flex-row">
          {brand.map(({ id, image, name }) => {
            return (
              <div className="flex md:lg:w-[33.333%] " key={id}>
                <div className="mx-6 my-8 md:mx-8 lg:mx-20">
                  <img
                    src={image}
                    alt=""
                    className="mb-6 rounded-lg shadow-2xl transition-all hover:translate-y-2 md:my-4 md:mb-4 md:h-[80%] md:w-full lg:my-6  lg:h-[82%] lg:w-auto"
                  />
                  <h1 className="text-center text-xl font-bold ">{name}</h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-8 md:py-0">
          <p className="mx-2 mb-8 text-center text-base text-gray-600 md:mx-0 md:mb-4">
            {desc}
          </p>
          <button className="ml-[29%] flex h-[40px]   w-[160px] items-center justify-center rounded-md bg-[#FFFF] font-medium shadow transition  hover:scale-110 md:my-8 md:ml-[42%] lg:my-4 lg:ml-[45%]">
            {btnText}
            <RiArrowRightLine className="ml-2 text-[18px] transition ease-in-out md:hover:translate-x-4 lg:hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
