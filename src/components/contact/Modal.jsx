import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import ModalImg from "/src/assets/Modal.svg";

const Modal = ({ hanldeModal }) => {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-transparentBlack bg-opacity-10">
      <div className="w-3/4 rounded-xl bg-white shadow-2xl md:w-1/2 lg:h-3/5 lg:w-1/3 ">
        <button className="my-4 flex w-full justify-end " onClick={hanldeModal}>
          <AiOutlineClose className="mx-4 text-2xl transition-all ease-in-out hover:scale-125" />
        </button>
        <div className="flex justify-center">
          <img src={ModalImg} alt="" className="h-32" />
        </div>
        <div className="mx-8 my-4">
          <h1 className="text-center text-2xl font-bold">
            Thank you for contact 🎉
          </h1>
          <p className="my-2 text-center text-[14px] md:text-[10px]  lg:px-16">
            Receive new articles and resources directly on your inbox. Fill your
            email below to join our email newsletter today.
          </p>
        </div>
        <div className="flex flex-col md:my-6 md:flex-row lg:mb-12">
          <button className="primary w-6/7 mx-4 my-4 h-[45px] rounded-lg font-rubik hover:bg-gray-500 hover:text-white md:my-0 md:w-1/2 lg:mx-12 lg:w-1/3">
           <Link to="/" className="text-black">Home</Link>
          </button>
          <button className="primary  my-4 h-[45px] rounded-lg font-rubik hover:bg-gray-500 hover:text-white mx-4 md:my-0 md:w-1/2 lg:mx-12 lg:w-1/3"
          onClick={hanldeModal}>
            Undo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
