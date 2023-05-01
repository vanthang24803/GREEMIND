import React from "react";
import { Link } from "react-router-dom";
import Item1 from "/src/assets/Item1.svg";
import Item2 from "/src/assets/Item2.svg";
import Item3 from "/src/assets/Item3.svg";
import { RiArrowRightLine } from "react-icons/ri";

const sell = {
  title: "Best Selling Plants",
  subtitle: "Easiest way to healthy life by buying your favorite plants",
  btnText: "See more",
  brand: [
    {
      id: 1,
      image: Item1,
      name: "Natural Plants",
      price: 140,
    },
    {
      id: 2,
      image: Item2,
      name: "Artificial Plants",
      price: 90,
    },
    {
      id: 3,
      image: Item3,
      name: "Artificial Plants",
      price: 350,
    },
  ],
};

const Selling = () => {
  const { title, subtitle, btnText, brand } = sell;

  return (
    <div
      className="mx-10 my-20 max-w-screen-2xl  md:flex md:flex-row"
      id="products"
    >
      <div className="mr-20 w-full md:w-[26%]">
        <h1 className="my-4 text-center text-4xl font-bold hover:underline md:my-2 md:text-start">
          {title}
        </h1>
        <p className="my-6 text-center text-base text-gray-400 md:my-0 md:text-start">
          {subtitle}
        </p>
        <Link to="/shop">
          <button className="primary mx-20 my-8 flex h-[40px] w-[160px] items-center justify-center rounded-md font-medium text-black shadow  transition hover:scale-110 md:mx-0 md:my-8 lg:my-4">
            {btnText}
            <RiArrowRightLine className="ml-2 text-[18px] transition ease-in-out hover:translate-x-1" />
          </button>
        </Link>
      </div>
      <Link to="/shop" className="flex flex-col md:flex-row text-black">
        {brand.map((brand, index) => {
          const { name, price, image } = brand;
          return (
            <div
              className="my-4 flex px-2 md:m-4 md:my-0 md:px-0 lg:mx-12"
              key={index}
            >
              <div className="">
                <img
                  src={image}
                  alt=""
                  className="mb-4 cursor-pointer transition hover:scale-105"
                />
                <p className="my-4 text-lg font-semibold">{name}</p>
                <p className="my-2 text-gray-400 font-rubik">$ {price.toFixed(2)}</p>
              </div>
            </div>
          );
        })}
      </Link>
    </div>
  );
};

export default Selling;
