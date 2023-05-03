import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import PopupImg from "/src/assets/PopupImg.svg";
const Popup = ({ hanldeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparentBlack bg-opacity-10 z-10">
      <div className="w-3/4 rounded-xl bg-white shadow-2xl md:w-1/2 lg:h-3/5 lg:w-1/3 ">
        <button className="my-4 flex w-full justify-end " onClick={hanldeModal}>
          <AiOutlineClose className="mx-4 text-2xl transition-all ease-in-out hover:scale-125" />
        </button>
        <div className="flex justify-center">
          <img src={PopupImg} alt="" className="h-32" />
        </div>
        <div className="m-6">
          <h1 className="my-4 text-center text-3xl font-bold">
            Congratulation 🎉
          </h1>
          <p className="my-3 text-center text-[14px] md:text-[10px]  lg:px-16">
            Receive new articles and resources directly on your inbox. Fill your
            email below to join our email newsletter today.
          </p>
        </div>
        <form action="" className="my-6 flex flex-col px-6 lg:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-[54px] w-full rounded-3xl border-2 border-gray-400 px-4 font-rubik  text-sm"
            
          />
          <Link to="/contact" className="text-black hover:text-white ">
            <button  className="primary mt-4 block h-[42px] w-full rounded-3xl  font-rubik  hover:bg-gray-500 md:mx-20 md:mt-8 md:w-[180px] lg:absolute  lg:-mx-32 lg:my-[0.35rem] lg:w-[120px]">
              Subcribe
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Popup;
