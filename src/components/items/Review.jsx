import React, { useState } from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";

const data = {
  title1: "Information",
  data1: [
    {
      id: 1,
      name: "Brands",
      title: "Abies",
    },
    {
      id: 2,
      name: "Activty",
      title: "Good",
    },
    {
      id: 3,
      name: "Country",
      title: "Japan",
    },
  ],
  title2: "Details",
  data2:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima laborum possimus quo. Excepturi, inventore voluptatum!",
  title3: "Custorm",
  title4: "Reviews",
  data4: {
    title: "Customers Reviews",
    num: "2.2K",
    star: "4.9",
    numRv: "2.251 Reviews",
    btnText1: "Write review",
    reviewUser: [
      {
        id: 1,
        name: "REVIEW BY SARAH",
        time: "On 1/5/23",
        main: "AWESOME PRODUCT!",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus hic neque? Quaerat esse rem eum nihil eius omnis qui?",
      },
      {
        id: 2,
        name: "REVIEW BY FAIZAL",
        time: "On 2/5/23",
        main: "AWESOME PRODUCT!",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus hic neque? Quaerat esse rem eum nihil eius omnis qui?",
      },
    ],
  },
  title5: "Write a review",
  subtitle5: "Are you satisfied enough?",
  btnText2: "View all review",
  btnText3: "Submit review",
};

const Review = () => {
  const [info, setInfo] = useState(false);
  const [details, setDetails] = useState(false);
  const [custorm, setCustorm] = useState(false);
  const [review , setReview] = useState(false);
  const handleInfo = () => {
    setInfo(!info);
  };
  const handleDetails = () => {
    setDetails(!details);
  };

  const handleCustorm = () => {
    setCustorm(!custorm);
  };

  const handleReview = () => {
    setReview(!review);
  };

  const {
    title1,
    title2,
    title3,
    title4,
    title5,
    subtitle5,
    data1,
    data2,
    data4,
    btnText2,
    btnText3,
  } = data;
  const { title, num, star, numRv, btnText1, reviewUser } = data4;
  return (
    <>
      {/* INFOMATION */}
      <div className="border-t-2 border-gray-200 py-4">
        {/* Title  */}
        <div className="flex" onClick={handleInfo}>
          <button onClick={handleInfo}>
            {info ? (
              <RiSubtractLine className="my-1 mr-2 flex items-center justify-center text-xl" />
            ) : (
              <RiAddLine className="my-1 mr-2 flex items-center justify-center text-xl" />
            )}
          </button>
          <p className="cursor-pointer  text-xl font-bold uppercase ">
            {title1}
          </p>
        </div>

        {/* Data */}
        {info ? (
          <div className="m-6">
            {data1.map((item) => {
              const { id, name, title } = item;
              return (
                <div
                  className="flex justify-between md:w-1/2  lg:w-1/4"
                  key={id}
                >
                  <>
                    <p className="mb-2 font-semibold uppercase ">{name}</p>
                  </>
                  <>
                    <p className="text-[14px]">{title}</p>
                  </>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      {/* DETAIL */}
      <div className="border-t-2 border-gray-200 py-4">
        {/* Title  */}
        <div className="flex" onClick={handleDetails}>
          <button onClick={handleDetails}>
            {details ? (
              <RiSubtractLine className="my-1 mr-2 flex items-center justify-center text-xl" />
            ) : (
              <RiAddLine className="my-1 mr-2 flex items-center justify-center text-xl" />
            )}
          </button>
          <p className="cursor-pointer  text-xl font-bold uppercase ">
            {title2}
          </p>
        </div>

        {/* Data */}
        {details ? (
          <div className="m-6">
            <span className="text-[14px] font-medium text-gray-600">
              {data2}
            </span>
            <p className="my-4 text-[14px]  font-medium text-gray-600">
              {data2}
            </p>
          </div>
        ) : null}
      </div>

      {/* Custorm */}
      <div className="border-t-2 border-gray-200 py-4">
        {/* Title  */}
        <div className="flex" onClick={handleCustorm}>
          <button onClick={handleCustorm}>
            {custorm ? (
              <RiSubtractLine className="my-1 mr-2 flex items-center justify-center text-xl" />
            ) : (
              <RiAddLine className="my-1 mr-2 flex items-center justify-center text-xl" />
            )}
          </button>
          <p className="cursor-pointer  text-xl font-bold uppercase ">
            {title3}
          </p>
        </div>

        {/* Data */}
        {custorm ? (
          <div className="m-6">
            <span className="text-[14px] font-medium text-gray-600">
              {data2}
            </span>
            <p className="my-4 text-[14px]  font-medium text-gray-600">
              {data2}
            </p>
          </div>
        ) : null}
      </div>

      {/* Review */}
      <div className="border-t-2 border-gray-200 py-4">
        {/* Title  */}
        <div className="flex" onClick={handleReview}>
          <button onClick={handleReview}>
            {review ? (
              <RiSubtractLine className="my-1 mr-2 flex items-center justify-center text-xl" />
            ) : (
              <RiAddLine className="my-1 mr-2 flex items-center justify-center text-xl" />
            )}
          </button>
          <p className="cursor-pointer  text-xl font-bold uppercase ">
            {title4}
          </p>

          <p className="mx-2 text-[12px] font-semibold text-gray-400">{num}</p>
        </div>

        {/* Data */}
        {review ? (
          <div className="m-6">
            <div className="">
              <h1 className="text-[1.8rem] font-semibold text-gray-400 ">
                {title}
              </h1>
              <div className="my-8 flex">
                <p className="text-5xl font-bold ">{star}</p>
                <span className="mx-3 h-[42px] w-[1px] rotate-[18deg] bg-gray-300 "></span>
                <p className="flex items-center justify-center text-sm font-medium">
                  {numRv}
                </p>
              </div>
              <button className="hover:primary h-[50px] w-full rounded-3xl bg-[#93E686] font-rubik text-lg font-bold text-white transition-all ease-in-out hover:text-gray-600">
                {btnText1}
              </button>
            </div>
            <div className="my-8">
              {reviewUser.map((item) => {
                const { id, name, time, main, desc } = item;
                return (
                  <div className="border-b-2 border-gray-600 py-8" key={id}>
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="mb-2 text-base font-medium text-gray-400">
                      {time}
                    </p>
                    <div className="my-4 flex">
                      <AiFillStar className="text-xl text-yellow-400 focus:cursor-pointer " />
                      <AiFillStar className="text-xl text-yellow-400 focus:cursor-pointer" />
                      <AiFillStar className="text-xl text-yellow-400 focus:cursor-pointer" />
                      <AiFillStar className="text-xl text-yellow-400 focus:cursor-pointer" />
                      <AiFillStar className="text-xl text-yellow-400 focus:cursor-pointer" />
                    </div>
                    <h3 className="text-lg font-bold">{main}</h3>
                    <p className="mt-4 text-sm font-light">{desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Write review */}
            <div className="">
              <div className="my-4 flex justify-between">
                <h1 className="text-[2rem] font-semibold text-gray-400">
                  {title5}
                </h1>
                <button className="hidden items-center justify-center font-medium hover:text-gray-400 lg:flex">
                  {btnText2} <AiOutlineArrowRight className="mx-2 text-lg" />
                </button>
              </div>

              <div className="py-4">
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <h3 className="font-rubik text-[16px]">{subtitle5}</h3>
                  <div className="mt-4 flex lg:mx-10 lg:mt-0">
                    <AiFillStar className="text-3xl hover:cursor-pointer hover:text-yellow-400 " />
                    <AiFillStar className="text-3xl hover:cursor-pointer hover:text-yellow-400" />
                    <AiFillStar className="text-3xl hover:cursor-pointer hover:text-yellow-400" />
                    <AiFillStar className="text-3xl hover:cursor-pointer hover:text-yellow-400" />
                    <AiFillStar className="text-3xl hover:cursor-pointer hover:text-yellow-400" />
                  </div>
                </div>

                <form className="mt-12">
                  <input
                    type="text"
                    className="h-[45px] w-full rounded border-2 border-gray-200 px-4 uppercase outline-4  outline-[#a2e0e0] hover:outline"
                    placeholder="Name"
                  />

                  <input
                    type="text"
                    className="my-4 h-[45px] w-full rounded border-2 border-gray-200 px-4 uppercase
                    outline-4  outline-[#a2e0e0] hover:outline"
                    placeholder="Sumary"
                  />

                  <textarea
                    cols="10"
                    rows="8"
                    placeholder="Review"
                    className="w-full rounded border-2 border-gray-200 p-4 uppercase
                    outline-4  outline-[#a2e0e0] hover:outline"
                  />

                  <button className="mt-6 h-[45px] w-full rounded-xl  bg-[#93E686] font-rubik text-lg font-bold text-white transition-all ease-in-out hover:scale-110 lg:w-[40%]">
                    {btnText3}
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Review;
