import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Data from "./Data";
import { useDispatch } from "react-redux";
import { add } from "../state/slice/CartSlice";

const ShopContainer = () => {
  const dispatch = useDispatch();

  const [items, setItems] = useState(Data);
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
                  className="absolute mx-5 mt-[38vh] hidden h-[40px] w-[32vh] rounded-sm bg-[#fffefedd] text-lg 
                    font-bold uppercase text-[#6aaeae] shadow transition-all ease-in-out group-hover:block md:mx-6 md:my-[22vh] 
                    md:w-[16vh] md:hover:-translate-y-2 lg:mx-4 lg:my-[40vh] lg:w-[40vh]"
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
                    ₱ {price.toFixed(2)}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShopContainer;
