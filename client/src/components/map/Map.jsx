import React from "react";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import Box from "./Box";
import Events from "../work/Events";
import { Link } from "react-router-dom";
import DataMap from "./DataMap";
const data = [
  {
    id: 1,
    name: "Upper West Side",
    title: "New York City",
    address: "448 Amsterdam Avenue New York, NY 10024",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/6b082628d2c08ffceec23110686d2d94f3efc99f-900x646.jpg?w=400&auto=format",
  },
  {
    id: 2,
    name: "Williamsburg",
    title: "Brooklyn",
    address: "190 Berry Street, Brooklyn, NY 11249",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/4a828f8383e8c5c5b188546b5ff289a0e00963c1-1000x667.jpg?w=400&auto=format",
  },
  {
    id: 3,
    name: "Cobble Hill",
    title: "Brooklyn",
    address: "195 Pacific Street, Brooklyn, NY 11201",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/a32c7fdf868e8b0c9c85a8f5260093fdb1a8a5db-1500x1000.jpg?w=400&auto=format",
  },
  {
    id: 4,
    name: "Park Slope",
    title: "Brooklyn",
    address: "461 6th Avenue, Brooklyn, NY 11215",
    image:
      "https://cdn.sanity.io/images/y346iw48/production/a32c7fdf868e8b0c9c85a8f5260093fdb1a8a5db-1500x1000.jpg?w=400&auto=format",
  },
];


const Map = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="flex flex-col md:my-4 md:px-10 md:pb-20 md:pt-10 lg:flex-row ">
          <div className="bg-[#E8F8FA] p-4 lg:basis-1/3  lg:p-10">
            <h1 className="p-4 font-serif  text-6xl lg:text-8xl  ">
              Store Locator
            </h1>
            <p className="m-4 font-domine text-sm lg:text-base">
              Welcome to your happy place. We've got all your plant needs
              covered. Pick your plant, pick your planter. We pot it for you.
            </p>
            <div className="mx-4 my-4 flex lg:my-4 ">
              <Link to="/workshops">
                <button className="h-[60px] w-[160px] bg-[#00AB84] font-domine text-white hover:bg-[#0f7960] md:mx-0 md:w-[110px] lg:w-[180px]">
                  Workshops
                </button>
              </Link>
              <Link to="/shop">
                <button className="mx-6  h-[60px] w-[160px] bg-white  font-domine text-[#00AB84] hover:bg-[#c0ffef] md:mx-8 md:w-[110px] lg:mx-12 lg:w-[180px]">
                  All Events
                </button>
              </Link>
            </div>
          </div>
          <div className="mb-20 md:mb-0 md:basis-1/2 lg:basis-2/3">
            <Box />
          </div>
        </div>

        <div className="mt-12 border-t-[1px] border-gray-300">
          <div className="flex flex-col lg:flex-row">
            <div className="mx-4 my-8 lg:basis-1/2">
              <h1 className="m-4 font-domine text-4xl">New York</h1>
              <Link to="/store" className="hover:normal-case">
                {data.map((item) => {
                  return (
                    <div
                      className="flex items-center border-y-[1px] border-gray-200 py-4"
                      key={item.id}
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="mx-6 my-4 w-1/4 lg:mx-2"
                      />
                      <div className="mx-4">
                        <h3 className="font-domine text-xl text-[#00AB84]">
                          {item.name}
                        </h3>
                        <p className="my-1 font-domine text-base">
                          {item.title}
                        </p>
                        <p className="my-1 font-domine text-base">
                          {item.address}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Link>
            </div>

            <div className="my-8 lg:mx-4 lg:basis-1/2">
              <h1 className="m-4 font-domine text-4xl">California</h1>
              <div className="flex items-center border-y-[1px] border-gray-200">
                <img
                  src="https://cdn.sanity.io/images/y346iw48/production/725e8e85da90573fbbae6afbbe0919a0f86e9dbb-4500x3000.jpg?w=400&auto=format"
                  alt=""
                  className="mx-6 my-4 w-1/4 lg:mx-2"
                />
                <div className="mx-4">
                  <h3 className="font-domine text-xl text-[#00AB84]">
                    San Francisco
                  </h3>
                  <p className="my-1 font-domine text-base">Cow Hollow</p>
                  <p className="font-domine text-sm text-gray-500">
                    181A Union St, San Francisco, CA 94123
                  </p>
                </div>
              </div>

              <h1 className="mx-4 mb-4 mt-12 font-domine text-4xl">Illinois</h1>
              <div className="flex items-center border-y-[1px] border-gray-200 py-4">
                <img
                  src="https://cdn.sanity.io/images/y346iw48/production/f396df285f7b7531a4d29f0d33bc1f366cea7694-2048x1365.jpg?w=400&auto=format"
                  alt=""
                  className="mx-6 w-1/4 lg:mx-2"
                />
                <div className="mx-4">
                  <h3 className="font-domine text-xl text-[#00AB84]">
                    Chicago
                  </h3>
                  <p className="my-1 font-domine text-base">
                    Southport Corridor
                  </p>
                  <p className="font-domine text-sm text-gray-500">
                    1351 W Roscoe St, Chicago, IL 60657
                  </p>
                </div>
              </div>

              <h1 className="mx-4 mb-4 mt-12 font-domine text-4xl">Maryland</h1>
              <div className="flex items-center border-y-[1px] border-gray-200 py-4">
                <img
                  src="https://cdn.sanity.io/images/y346iw48/production/f396df285f7b7531a4d29f0d33bc1f366cea7694-2048x1365.jpg?w=400&auto=format"
                  alt=""
                  className="mx-6 w-1/4 lg:mx-2"
                />
                <div className="mx-4">
                  <h3 className="font-domine text-xl text-[#00AB84]">
                    Bethesda
                  </h3>
                  <p className="my-1 font-domine text-base">Bethesda Row</p>
                  <p className="font-domine text-sm text-gray-500">
                    1351 W Roscoe St, Chicago, IL 60657
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

       <DataMap />

        <div className="bg-[#efebe6] py-10">
          <div className="px-4 pt-12  md:p-10">
            <p className="font-domine text-3xl md:text-5xl">Upcoming Events</p>
          </div>
          <Events />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Map;
