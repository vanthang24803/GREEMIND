import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Data from "./Data";
import { useDispatch } from "react-redux";
import { add } from "../state/slice/CartSlice";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const ShopContainer = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setItems(Data);
    }, 500);
  }, []);
  const fiterItem = (categoryItem) => {
    const updatedItems = Data.filter((item) => {
      return item.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <div className="">
        <div className="my-2 flex px-8 py-10 md:flex-row">
          <span className="title-shop" onClick={() => setItems(Data)}>
            All Products
          </span>
          <span className="title-shop" onClick={() => fiterItem("Big")}>
            Big
          </span>
          <span className="title-shop" onClick={() => fiterItem("Medium")}>
            Medium
          </span>
          <span className="title-shop" onClick={() => fiterItem("Small")}>
            Small
          </span>
        </div>

        <div className="grid gap-8  p-10 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => {
            const { id, image, name, price } = item;
            return (
              <div className="group" key={id}>
                <button
                  className="absolute mx-5 mt-[38vh] hidden h-[40px] w-[32vh]  bg-[#fffefedd] font-domine 
                    text-lg font-bold uppercase text-[#6aaeae] shadow transition-all ease-in-out group-hover:block md:mx-6 
                    md:my-[22vh] md:w-[16vh] md:hover:-translate-y-2 lg:mx-[0.75rem] lg:my-[40vh] lg:w-[40vh]"
                  onClick={() => dispatch(add(item))}
                >
                  Buy Now
                </button>

                <Link to="/items" className="font-rubik text-black">
                  <img
                    src={image}
                    alt=""
                    className="w-full object-fill transition-all hover:cursor-pointer md:h-[27vh] lg:h-[50vh] "
                  />
                  <p className="my-4 text-center text-xl font-bold md:text-start">
                    {name}
                  </p>
                  <p className="my-2 text-center text-gray-400 md:text-start">
                    $ {price.toFixed(2)}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="my-12 flex h-[60px]  w-full justify-between border-b-[1px] border-t-[1px] border-gray-300">
          <Link to="/">
            <button className="mx-4 flex h-[60px] w-[100px] items-center font-domine text-black md:mx-12">
              <HiArrowLongLeft className="mx-2 text-lg  transition-all ease-in-out hover:-translate-x-2" />{" "}
              Home
            </button>
          </Link>
          <div className="flex items-center">
            <p className="mx-2 text-lg underline">1</p>
            <p className="mx-2 text-lg text-gray-400">2</p>
          </div>
          <Link to="/gift">
            <button className="mx-4 flex h-[60px] w-[100px] items-center font-domine text-black md:mx-12">
              Gift{" "}
              <HiArrowLongRight className="mx-2 text-lg  transition-all ease-in-out hover:translate-x-2" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopContainer;
