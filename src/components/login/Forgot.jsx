import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Login2 from "/src/assets/Login2.svg";
import { FcGoogle } from "react-icons/fc";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const data = {
  image: Login2,
  title: "Forgot your password?",
  subtitle:
    "Please confirm your email address below and we will send you verification code.",
  btnText: "Continue",
  google: "Login with Google",
  desc: "Already have an account ? ",
  main: "Log in",
};

const Forgot = () => {
  const { image, title, subtitle, btnText, google, desc, main } = data;
  return (
    <div>
      <Fragment>
        <div className="primary flex flex-col p-5 md:h-[100vh] md:flex-row ">
          <div className="md:basis-1/2 lg:basis-3/5">
            <button className="absolute bg-transparent md:top-[46%] md:my-[0.75rem] md:h-[55px]  md:w-[40px] lg:my-2 ">
              <BiChevronLeft className="hidden text-[60px] font-bold text-white transition-all ease-in-out hover:-translate-x-3 " />
            </button>
            <img
              src={image}
              alt=""
              className="w-full rounded-tl-lg rounded-tr-lg md:h-[96vh] md:rounded-l-xl md:rounded-tr-none lg:h-[94.72vh]  "
            />
            <button className="absolute right-5 top-[46%] mx-3 my-2 h-[55px] w-[40px] bg-transparent ">
              <BiChevronRight className="text-[60px] font-bold text-white transition-all ease-in-out hover:translate-x-3" />
            </button>
          </div>

          <div className="rounded-bl-lg rounded-br-lg bg-white   md:basis-1/2 md:rounded-r-xl md:rounded-bl-none lg:basis-2/5 ">
            <div className="px-10">
              <h1 className="mb-5 mt-10 text-center  text-2xl font-bold md:mb-6 md:mt-20 md:text-start md:text-2xl lg:text-[2.5rem]">
                {title}
              </h1>
              <p className="text-center text-[12px] md:text-start md:text-base">
                {subtitle}
              </p>
            </div>

            <form className="m-10 flex-row">
              <input type="email" placeholder="Email" className="input" />
            </form>

            <div className="">
              <button className="mx-10 my-0 h-[55px] w-[32vh] rounded-xl bg-gray-700 text-base font-bold text-white transition-all ease-in hover:scale-105 md:my-2 md:w-[27.5vh] lg:w-[67.5vh]">
                {btnText}
              </button>
              <button
                className="mx-10 my-6 flex h-[55px] w-[32vh] items-center justify-center rounded-xl border-2 border-black bg-white text-base 
                            font-semibold text-black transition-all ease-in hover:scale-105 md:my-4  md:w-[27.5vh] lg:w-[67.5vh]"
              >
                <FcGoogle className="mx-2 text-xl" /> {google}
              </button>
            </div>

            <div className="flex items-center justify-center">
              <p className="mx-2 my-6 text-base text-gray-500 md:my-4 ">
                {desc}
              </p>
              <Link to="/login">
                <p className="font-semibold text-black hover:cursor-pointer hover:underline">
                  {main}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Forgot;
