import React from "react";
import Navbar from "../page/Navbar";
import Footer from "../page/Footer";
import Events from "./Events";

const data = {
  title: "Workshops & Events",
  image1:
    "https://cdn.sanity.io/images/y346iw48/production/eed8c54eaa52f844c3597f71940839d6be215ab9-927x648.jpg?w=1536&h=1074&auto=format",
  desc: "The Sill offers a variety of in person or online workshops for beginners, experts, & everyone in between!",
  subtitle: "Upcoming Events",
};

const WorkShops = () => {
  const { title, desc, image1, subtitle } = data;
  return (
    <>
      <Navbar />
      <div className="lg:my-18 my-12">
        <div className="flex flex-col md:p-10 lg:flex-row">
          <div className="basis-1/2 bg-[#E8F8FA] md:p-20">
            <h1 className="m-4 my-4 font-rubik text-5xl font-semibold md:mx-0 md:text-6xl">
              {title}
            </h1>
            <p className="mx-4 font-domine text-sm md:mx-0 md:text-base">
              {desc}
            </p>
            <div className="my-8 flex">
              <button className="mx-4 h-[60px] w-[180px] bg-[#00AB84] font-domine text-white hover:bg-[#0f7960] md:mx-0">
                Workshops
              </button>
              <button className="mx-4 h-[60px] w-[180px] bg-white font-domine text-[#00AB84] hover:bg-[#c0ffef] md:mx-8">
                All Events
              </button>
            </div>
          </div>
          <div className="md:basis-1/2">
            <img src={image1} alt="" className="w-full" />
          </div>
        </div>

        <div className="px-4 pt-12 md:p-10">
          <p className="font-domine text-3xl md:text-5xl">{subtitle}</p>
        </div>

          <Events />
          
 
      </div>
      <Footer />
    </>
  );
};

export default WorkShops;
