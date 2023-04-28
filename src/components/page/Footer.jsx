import React from "react";
import Logo from "/src/assets/Logo.svg";
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";
import ScrollButton from "../animation/ScrollButton";
const footer = {
  logo: Logo,
  subtitle: "We help you find your dream plant",
  main: [
    {
      id: 1,
      title: "Information",
      ops1: "About",
      ops2: "Product",
      ops3: "Blog",
    },
    {
      id: 2,
      title: "Company",
      ops1: "Community",
      ops2: "Career",
      ops3: "Our story",
    },
    {
      id: 3,
      title: "Contact",
      ops1: "Started",
      ops2: "Prycing",
      ops3: "Resources",
    },
  ],
  copyright: "2023 © all Right Reserved Term of use GREENMIND",
};

const Footer = () => {
  const { logo, subtitle, main, copyright } = footer;
  return (
    <div className="primary max-w-screen-2xl p-4 md:p-6 lg:p-10">
      <div className=" flex flex-col md:mx-6 md:mb-6 md:flex-row lg:mx-10 lg:mb-10">
        <div className="">
          <img
            src={logo}
            alt=""
            className="mx-[7rem] py-4  md:mx-0 md:py-4 lg:py-6"
          />
          <h3 className="mt-2 text-center text-[14px] text-gray-500 md:pb-2 md:text-start lg:pb-4">
            {subtitle}
          </h3>
          <ul className="mx-[6.25rem] flex md:mx-0">
            <li className="hover:cursor-pointer ">
              <RiFacebookCircleFill className="icon-ft" />
            </li>
            <li className="hover:cursor-pointer ">
              <RiTwitterFill className="icon-ft " />
            </li>
            <li className="hover:cursor-pointer ">
              <RiYoutubeFill className="icon-ft " />
            </li>
            <li className="hover:cursor-pointer ">
              <RiInstagramFill className="icon-ft " />
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-center md:mx-[10%] md:flex-row md:text-start lg:mx-[50%]">
          {main.map(({ id, title, ops1, ops2, ops3 }) => {
            return (
              <div className="mx-8" key={id}>
                <h1 className="my-6 font-bold hover:cursor-context-menu hover:underline">
                  {title}
                </h1>
                <ul>
                  <li className="social">{ops1}</li>
                  <li className="social">{ops2}</li>
                  <li className="social">{ops3}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex  justify-between">
        <p className="mx-10 my-4 text-[12px] text-gray-600 md:mx-6 md:text-[13px] lg:mx-10 lg:text-[15px]">
          {copyright}
        </p>
        <form className="hidden md:mx-10 md:flex lg:mx-14">
          <input
            type="email"
            placeholder="Enter Email... "
            className="h-[40px] rounded-lg px-4 text-[14px] md:w-[320px]  lg:w-[420px]"
          />
          <button className="absolute right-[4%] h-[20px] w-[20px] rounded ">
            <FiArrowRight className="ml-[-3rem] mt-3 text-[18px] transition-all hover:translate-x-2 hover:scale-110" />
          </button>
        </form>
      </div>

      <ScrollButton />
    </div>
  );
};

export default Footer;
