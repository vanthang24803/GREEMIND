import React from "react";
import Main from "/src/assets/Main.svg";
import Dark from "/src/assets/Dark.svg";
import Left from "/src/assets/VectorLeft.svg";
import Right from "/src/assets/VectorRight.svg";
import { FiSearch } from "react-icons/fi";

const home = {
  title: "Buy your dream plants",
  subtitle1: "50+",
  text1: "Plant Species",
  subtitle2: "100+",
  text2: "Customers",
};

const Home = () => {
  const { title, subtitle1, text1, subtitle2, text2 } = home;
  return (
    <div className="primary mx-10 my-4 flex h-[20rem]  w-auto max-w-screen-2xl rounded-3xl md:h-[28.6rem]">
      <div className="">
        <h1 className="px-8 py-8 text-3xl font-bold text-[#000000] text-shadow-md md:max-w-[600px] md:px-16 md:text-6xl lg:max-w-[800px] lg:text-7xl ">
          {title}
        </h1>
        <div className="flex sm:mx-6 md:px-8">
          <div className="border-r-2  border-black px-8">
            <h3 className="text-[20px] font-semibold md:text-[18px] lg:text-[30px]">
              {subtitle1}
            </h3>
            <span className=" text-base font-semibold">{text1}</span>
          </div>

          <div className="px-4 md:px-8">
            <h3 className="text-[20px] font-semibold md:text-[18px] lg:text-[30px]">
              {subtitle2}
            </h3>
            <span className=" text-base font-semibold">{text2}</span>
          </div>
        </div>

        <form className="mx-8 my-10 flex items-center md:mx-0 md:my-12 md:px-16">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="h-[50px]  w-full rounded-lg px-4 text-[14px] md:w-[360px] md:text-base lg:w-[425px]"
          />
          <button className="primary ] absolute h-[34px] w-[34px] rounded text-[16px] md:right-[20rem]  lg:left-[30rem]  right-20 flex justify-center items-center">
            <FiSearch className="mx-2 text-[17px] transition-all hover:scale-125" />
          </button>
        </form>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <img
          src={Dark}
          alt=""
          className="absolute  hidden lg:right-[12%]  lg:top-[25%] lg:block lg:w-auto"
        />
        <img
          src={Main}
          alt=""
          className="absolute md:-right-5 md:top-24 md:h-[40.65%] lg:right-[12%] lg:top-[10.3rem] lg:h-[25.8rem]"
        />
      </div>
      <div className="hidden lg:block">
        <img
          src={Left}
          alt=""
          className="absolute right-[50%] top-[55%] w-[12%] "
        />

        <img
          src={Right}
          alt=""
          className=" absolute right-[4%] top-[20%] w-[80px]"
        />
      </div>
    </div>
  );
};

export default Home;
