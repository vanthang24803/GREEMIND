import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import Img from "/src/assets/Img.svg";

const data = {
  image: Img,
  title: "Opp!!!",
  subtitle: "Sorry, we couldn't find the page you're looking for ",
  btnText: "Back to Home",
};

const Home404 = () => {
  const { image, title, subtitle, btnText } = data;
  return (
    <div className="App flex h-[80vh] max-w-2xl flex-col px-10 lg:flex-row">
      <div className="my-10">
        <h1 className="text-center text-8xl font-bold text-black text-shadow-lg lg:text-start">
          {title}
        </h1>
        <p className="my-10 mb-0 text-center text-base md:mx-[100px] md:my-12 md:mb-20  md:text-start md:text-xl lg:mx-2 lg:text-xl ">
          {subtitle}
        </p>
        <Link to="/">
          <button className="primary mx-16 my-8 flex h-[40px] w-[180px] items-center justify-center rounded-md font-medium shadow transition  hover:scale-110 md:mx-[100px] md:my-8 lg:mx-0 lg:my-4">
            {btnText} <RiArrowRightLine className="icon mx-1" />{" "}
          </button>
        </Link>
      </div>
      <div className="mb-2 lg:mb-0">
        <img src={image} alt="" className="mx-0  md:mx-[3rem] lg:mx-[24rem] " />
      </div>
    </div>
  );
};

export default Home404;
