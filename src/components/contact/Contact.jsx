import React from "react";
import Footer from "../page/Footer";
import Navbar from "../page/Navbar";
import { FiArrowUpRight } from "react-icons/fi";
const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="md:p-20">
        <div className="my-8 lg:w-1/2">
          <h1 className="mx-10 font-rubik text-3xl font-bold md:mx-0  md:text-6xl ">
            Let's make cool stuff together. 👋
          </h1>
        </div>

        <div className="">
          <form className="flex flex-col py-8 md:flex-row">
            <div className="w-full px-4 md:w-1/2 ">
              <p className="my-2 font-rubik text-lg font-medium">Name</p>
              <input
                type="text"
                placeholder="May Nguyen"
                className="h-[60px] w-full border-2 border-white bg-[#FAF9F7] px-4"
              />
            </div>
            <div className="my-4 w-full px-4 md:my-0 md:w-1/2">
              <p className="my-2 font-rubik text-lg font-medium">Email</p>
              <input
                type="email"
                placeholder="maymay@mail.com"
                className="h-[60px] w-full border-2 border-white  bg-[#FAF9F7]  px-4"
              />
            </div>
          </form>
          <form className="flex flex-col pb-8 md:flex-row">
            <div className="w-full px-4 md:w-1/2">
              <p className="my-2 font-rubik text-lg font-medium">Address</p>
              <input
                type="text"
                placeholder="Hanoi , VietNam"
                className="h-[60px] w-full border-2 border-white bg-[#FAF9F7] px-4"
              />
            </div>
            <div className="my-4 w-full px-4 md:my-0 md:w-1/2">
              <p className="my-2 font-rubik text-lg font-medium">Phone</p>
              <input
                type="text"
                placeholder="0123456789"
                className="h-[60px] w-full border-2 border-white  bg-[#FAF9F7]  px-4"
              />
            </div>
          </form>

          <form className="flex flex-col px-4 pb-8">
            <p className="my-2 font-rubik text-lg font-medium">
              What would you like to chat about?
            </p>
            <select className="h-[60px] w-full border-2 border-white  bg-[#FAF9F7]  px-4  font-rubik font-medium">
              <option value="1">Brand Strategy</option>
              <option value="2">Marketing/Ads</option>
              <option value="3">Development</option>
              <option value="4" selected="selected">
                Select one
              </option>
              <option value="6">Others</option>
              <option value="5">Just want say hi!</option>
            </select>
          </form>

          <form className="flex flex-col px-4 pb-8">
            <p className="my-2 font-rubik text-lg font-medium">
              What is your estimated budget?
            </p>
            <select className="h-[60px] w-full border-2 border-white  bg-[#FAF9F7]  px-4 font-rubik font-medium">
              <option value="1">Under - $50.000</option>
              <option value="2">$50.000 - $100.000</option>
              <option value="3">$100.000 - $250.000</option>
              <option value="4" selected="selected">
                Select one
              </option>
              <option value="6">Others</option>
              <option value="5">$500.000</option>
            </select>
          </form>

          <div className="px-4 pb-8">
            <p className="my-2 font-rubik text-lg font-medium ">Message</p>
            <textarea
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="w-full border-2 border-white  bg-[#FAF9F7]  px-4 font-rubik text-lg"
            />
            <button
              className="mt-12 flex h-[50px] w-full items-center justify-center border-2 border-black  bg-black font-medium
            text-white hover:bg-white hover:text-black"
            >
              Submit <FiArrowUpRight className="mx-1 text-lg" />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
