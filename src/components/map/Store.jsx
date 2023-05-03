import React from "react";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import MapStore from "./MapStore";

const Store = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="flex flex-col bg-[#F9F8F7]  lg:flex-row lg:px-8 lg:py-16">
          <div className="p-8 lg:basis-1/2 ">
            <div className="">
              <p className="font-domine ">GREENMIND</p>
              <p className="mb-6 mt-8  font-domine text-7xl">Upper West Side</p>
              <button className="flex font-domine text-lg font-medium text-[#0C9E81]">
                448 Amsterdam Avenue New York, NY 10024
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

            <div className="">
                
            </div>

          </div>
          <div className="lg:basis-1/2">
            <MapStore />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Store;
