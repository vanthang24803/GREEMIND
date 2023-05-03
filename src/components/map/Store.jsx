import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import MapStore from "./MapStore";
import DataStore from "./DataStore";
import DataMap from "./DataMap";
import {
  HiOutlineArrowUturnRight,
  HiArrowLongRight,
} from "react-icons/hi2";
const Store = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="flex flex-col bg-[#F9F8F7]  lg:flex-row lg:px-8 lg:py-16">
          <div className="p-8 lg:basis-1/2 ">
            <div className="">
              <p className="font-san">GREENMIND</p>
              <p className="mb-6 mt-8  font-serif text-7xl">Upper West Side</p>
              <button className="flex   font-domine text-lg font-medium text-[#0C9E81]">
                448 Amsterdam Avenue New York, NY 10024{" "}
                <HiOutlineArrowUturnRight className="mx-2" />
              </button>
            </div>
            <div className="border-y-[1px] border-gray-300 py-8">
              <div className="">
                <div className="flex items-center font-domine">
                  <p className="font-bold">Monday–Friday:</p>
                  <p className="mx-2 ">12pm–7pm</p>
                </div>
                <div className="my-4 flex items-center font-domine">
                  <p className="font-bold">Saturday–Sunday:</p>
                  <p className="mx-2 ">11am–7pm</p>
                </div>
                <div className="flex items-center font-domine">
                  <p className="text-[17px]">79th Street</p>
                  <div className="flex items-center">
                    <div className="mx-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                      1
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                      2
                    </div>
                  </div>
                </div>
                <div className="my-4 flex items-center font-domine">
                  <p className="text-[17px]">86th Street</p>
                  <div className="flex items-center">
                    <div className="mx-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                      1
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                      2
                    </div>
                  </div>
                </div>

                <div className="flex items-center font-domine">
                  <p className="text-[17px]">81st Street</p>
                  <div className="flex items-center">
                    <div className="mx-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                      A
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                      B
                    </div>

                    <div className="mx-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                      C
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4">
              <div className="flex flex-col md:flex-row">
                <div className="my-4 basis-1/2 md:my-0">
                  <img
                    src="https://cdn.sanity.io/images/y346iw48/production/6b082628d2c08ffceec23110686d2d94f3efc99f-900x646.jpg?w=300&auto=format"
                    alt=""
                  />
                </div>
                <div className="mx-4 basis-1/2">
                  <h3 className="font-domine lg:text-justify lg:text-sm">
                    Our Upper West Side location is open for plant shopping,
                    curbside pickup, workshops, local delivery, and more.
                  </h3>
                  <p className="my-4 font-domine lg:text-sm">
                    Please message{" "}
                    <a className="font-domine text-base text-[#0C9E81] hover:text-[#0C9E81]">
                      {" "}
                      @thesilluws{" "}
                    </a>{" "}
                    or call the shop directly for more details: (646) 899-4016.
                  </p>
                  <p className="font-domine italic">
                    * Please Note: In-store inventory can differ from online
                    offerings
                  </p>
                </div>
              </div>
              <div className="my-4">
                <p className="font-domine">
                  <b className="font-bold">Let’s Collaborate:</b> Ask your
                  shopkeeper about bulk plant orders, private events &
                  workshops, renting our plant-filled space, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-black lg:basis-1/2">
            <MapStore />
          </div>
        </div>

        <div className="mb-10 mt-20 px-8 md:mb-0 md:mt-8 md:py-12">
          <div className="flex flex-col justify-between lg:flex-row">
            <div className="my-4 flex h-[55px] w-full items-center justify-center border-[1px] border-gray-400 lg:my-0 lg:w-[400px]">
              <img
                src="https://cdn.sanity.io/images/y346iw48/production/d2cb9b63e543e8d8e38e8daa3411cd454bab4585-22x24.svg?auto=format"
                alt=""
              />
              <p
                className="mx-4 flex items-center justify-center
              font-serif hover:italic hover:text-[#0C9E81]"
              >
                Review US On Yelep
                <HiArrowLongRight className="mx-2 transition-all ease-in-out hover:translate-x-1" />
              </p>
            </div>

            <div className="my-4 flex h-[55px] w-full items-center justify-center border-[1px] border-gray-400 lg:my-0 lg:w-[400px]">
              <img
                src="https://cdn.sanity.io/images/y346iw48/production/3b0f1806846bf778d562a76f8f0d4aaf4f33ab86-24x24.svg?auto=format"
                alt=""
              />
              <p
                className="mx-2 flex items-center justify-center
              font-serif hover:italic hover:text-[#0C9E81]"
              >
                Review US On Google
                <HiArrowLongRight className="mx-2 transition-all ease-in-out hover:translate-x-1" />
              </p>
            </div>

            <div className="my-4 flex h-[55px] w-full items-center justify-center border-[1px] border-gray-400 lg:my-0 lg:w-[400px]">
              <img
                src="https://cdn.sanity.io/images/y346iw48/production/6aa37cb14eca626dfa818e9cd6bd32b12d994b01-24x24.svg?auto=format"
                alt=""
              />
              <p
                className="mx-4 flex items-center justify-center
              font-serif hover:italic hover:text-[#0C9E81]"
              >
                Review US On Instagram
                <HiArrowLongRight className="mx-2 transition-all ease-in-out hover:translate-x-1" />
              </p>
            </div>
          </div>
        </div>

        <div className="mx-4 my-10 flex flex-col lg:flex-row">
          <div className="mx-4 lg:basis-1/2">
            <h1 className=" font-serif text-[3.5rem]">In-Shop Exclusives</h1>
            <p className="my-4 font-domine">
              Every week, our stores receive specialty plants that are not
              available for sale on our website. Please note specialty plants
              cannot be transferred between store locations. Planters sold
              separately.
            </p>
          </div>
        </div>
        <DataStore />
        <DataMap />

        <div className="flex bg-[#F9F8F7]">
          <img
            src="https://cdn.sanity.io/images/y346iw48/production/439f7681c104d6d291bb26f4627a7c9326015573-338x338.png?auto=format"
            className="m-8 h-[100px] w-[100px] md:h-[200px] md:w-[200px]"
          />
          <div className="my-8">
            <h1 className="font-serif md:text-5xl">
              Visit Us In A Store Near You
            </h1>
            <p className="my-2 font-domine text-sm md:my-4 md:text-base">
              Our stores around the US are open for plant shopping, repotting,
              curbside pickup, in-person workshops, and more.
            </p>
            <Link to="/shop">
              <button className="flex h-[60px] w-full items-center font-serif text-lg font-semibold text-black hover:italic hover:text-[#0C9E81] md:w-[320px]">
                Find Your Loacl Store{" "}
                <HiArrowLongRight className="mx-4 transition-all ease-in-out hover:translate-x-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Store;
