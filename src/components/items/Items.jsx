import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import Silder from "./Silder";
import { AiFillStar} from "react-icons/ai";
import {
  RiAddLine,
  RiSubtractLine,
  RiHeartLine,
  RiShareFill,
  RiArrowRightSLine,
} from "react-icons/ri";
import Review from "./Review";
const data = {
  home: "Home",
  shop: "Shop",
  info: "Info",
  name: "Abies",
  price: "₱ 1,400.00",
  subprice: "₱ 1.320.00",
  sale: "32%",
  title: "Abies ballpoint pen smooth writing expensive",
  reviewText: "2,251 reviews ",
  addReviewText: "Add Your Review",
  btnText: "Add to cart ",
};

const Info = () => {
  const [item, setItem] = useState(1);
  const augment = () => {
    setItem(item + 1);
  };

  const reduce = () => {
    if (item > 1) {
      setItem(item - 1);
    }
  };

  const {
    home,
    shop,
    info,
    name,
    price,
    title,
    subprice,
    btnText,
    reviewText,
    addReviewText,
  } = data;
  return (
    <>
      <Navbar />
      <Fragment>
        <div className="flex flex-col md:max-w-[1024px]  md:flex-row lg:max-w-full lg:pb-10">
          <div className="h-[30vh] w-1/2 md:basis-1/2 lg:basis-1/3">
            <div className="mx-[2rem] my-4 flex lg:mx-[5.75rem]">
              <Link to="/">
                <p className="flex text-black">
                  {home}
                  <RiArrowRightSLine className="mx-2 my-1" />{" "}
                </p>
              </Link>
              <Link to="/shop">
                <p className="flex text-black">
                  {shop}
                  <RiArrowRightSLine className="mx-2 my-1" />
                </p>
              </Link>
              <p className="flex">
                {info}
                <RiArrowRightSLine className="mx-2 my-1" />
              </p>
              <p className=" text-gray-500">{name}</p>
            </div>
            <Silder />
          </div>

          <div className="my-8 md:basis-1/2 lg:basis-2/3">
            {/* Title  */}
            <div className="mx-4 md:mx-0">
              <h1 className="text-3xl font-bold md:text-4xl  ">{title}</h1>

              {/* Icon */}
              <div className="mt-8 flex hover:cursor-pointer">
                <AiFillStar className="text-xl text-yellow-400 hover:cursor-pointer " />
                <AiFillStar className="text-xl text-yellow-400 hover:cursor-pointer" />
                <AiFillStar className="text-xl text-yellow-400 hover:cursor-pointer" />
                <AiFillStar className="text-xl text-yellow-400 hover:cursor-pointer" />
                <AiFillStar className="text-xl text-yellow-400 hover:cursor-pointer mr-4" />
                <h3 className="mx-2 text-[12px] font-normal text-gray-600">
                  {reviewText}
                </h3>
                <p className="text-[12px] font-medium">{addReviewText}</p>
              </div>

              {/* Review Text */}
              <div className="flex items-center">
                <p className="my-8 text-3xl font-bold text-[#72e3e3]">
                  {subprice}
                </p>
                <p className="mx-6 font-rubik text-xl font-semibold text-gray-400 line-through">
                  {price}
                </p>
              </div>

              {/* Button */}
              <div className="flex flex-col lg:flex-row">
                {/* Handle */}
                <div
                  className="mx-4 flex h-[55px] w-[160px] 
                items-center justify-between border-2 border-gray-100 lg:mx-0"
                >
                  <button
                    className="mx-1 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-300"
                    onClick={reduce}
                  >
                    <RiSubtractLine className="text-xlg transition-all ease-in-out hover:scale-110 " />
                  </button>
                  <p className="text-center text-xl font-medium">{item}</p>
                  <button
                    className="mx-1 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray-300"
                    onClick={augment}
                  >
                    <RiAddLine className="text-lg transition-all ease-in-out hover:scale-110" />
                  </button>
                </div>
                <div className="my-10 lg:mx-24 lg:my-0">
                  <Link to="/checkout">
                    <button
                      className="h-[55px] w-full rounded-2xl bg-[#93E686] font-rubik text-xl font-bold text-white 
                    transition-all ease-in-out hover:scale-110 md:w-[95%] lg:w-[320px]"
                    >
                      {btnText}
                    </button>
                  </Link>
                </div>
              </div>

              {/* Share */}
              <div className="my-6 flex lg:my-12">
                <button className="flex text-lg font-bold uppercase">
                  <RiHeartLine className="mr-3 text-2xl hover:text-red-400" />
                  Wishlist
                </button>
                <button className="mx-20 flex text-lg font-bold uppercase md:mx-16">
                  <RiShareFill className="mr-3 text-2xl" />
                  Share
                </button>
              </div>
            </div>

            {/* Reviews */}
            <div className="">
              <Review />
            </div>
          </div>
        </div>
      </Fragment>
      <Footer />
    </>
  );
};

export default Info;
