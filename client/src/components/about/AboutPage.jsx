import React from "react";
import NavBar from "../page/Navbar";
import Footer from "../page/Footer";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const data = {
  content1: {
    title1: "Who we are?",
    desc1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image1:
      "https://images.pexels.com/photos/15018891/pexels-photo-15018891.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  content2: {
    title2: "GREENMIND Company Mission",
    desc2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image2:
      "https://images.pexels.com/photos/14553895/pexels-photo-14553895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  content3: {
    title3: "Quanlity Assurance",
    desc3:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima laborum possimus quo. Excepturi, inventore voluptatum!",
    image3:
      " https://images.pexels.com/photos/16345886/pexels-photo-16345886.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
};

const About = () => {
  const { content1, content2, content3 } = data;
  const { title1, desc1, image1 } = content1;
  const { title2, desc2, image2 } = content2;
  const { title3, desc3, image3 } = content3;
  return (
    <>
      <NavBar />
      <div className="">
        <div className="px-10 py-2">
          <h1 className="text-center font-domine text-6xl font-bold">
            About us
          </h1>
          <div className="mt-8 flex flex-col md:mt-20 md:flex-row">
            <div className="basis-1/2">
              <h1 className="my-4 font-rubik text-5xl font-bold hover:underline">
                {title1}
              </h1>
              <p className="my-8 font-rubik text-gray-600 lg:text-justify lg:text-lg">
                {desc1}
              </p>
            </div>
            <div className="basis-1/2">
              <img
                src={image1}
                alt=""
                className="my-4 h-2/3 md:mx-16 md:my-8 lg:mx-48"
              />
            </div>
          </div>

          <div className="my-4 flex flex-col md:flex-row">
            <div className="basis-1/2">
              <img
                src={image2}
                alt=""
                className="my-4 h-4/5 md:my-0 lg:mx-24"
              />
            </div>

            <div className="basis-1/2">
              <h1 className="font-rubik text-5xl font-bold hover:underline">
                {title2}
              </h1>
              <p className="my-4 font-rubik text-[18px] text-gray-600 lg:text-justify lg:text-lg">
                {desc2}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:mt-20 md:flex-row">
            <div className="basis-1/2">
              <h1 className="my-8 font-rubik text-5xl font-bold hover:underline">
                {title3}
              </h1>
              <p className="my-4 font-rubik text-gray-600 lg:text-justify lg:text-lg">
                {desc3}
              </p>
              <p className="my-4 font-rubik text-gray-600 lg:text-justify lg:text-lg">
                {desc3}
              </p>
              <p className="my-4 font-rubik text-gray-600 lg:text-justify lg:text-lg">
                {desc3}
              </p>
            </div>
            <div className="basis-1/2">
              <img
                src={image3}
                alt=""
                className="my-4 h-2/3 md:mx-16 md:my-8 lg:mx-48"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-8">
          <Link to="/contact">
            <button className="flex h-[40px] w-[130px] items-center justify-center border-[1px] border-black font-domine text-black transition-all ease-in-out hover:bg-black hover:text-white md:w-[220px]">
              <AiOutlineArrowLeft className="mr-2 transition-all ease-in-out hover:-translate-x-1" />
              Contact
            </button>
          </Link>
          <Link to="/workshops">
            <button className="flex h-[40px] w-[130px] items-center justify-center border-[1px] border-black font-domine text-black transition-all ease-in-out hover:bg-black hover:text-white md:w-[220px]">
              WorkShops
              <AiOutlineArrowRight className=" ml-2 transition-all ease-in-out hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
