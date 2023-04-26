import React from 'react'
import Logo from '/src/assets/Logo.svg';
import { RiFacebookCircleFill, RiTwitterFill, RiInstagramFill ,RiYoutubeFill } from "react-icons/ri";
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
      ops3: "Blog"
    },
    {
      id: 2,
      title: "Company",
      ops1: "Community",
      ops2: "Career",
      ops3: "Our story"
    },
    {
      id: 3,
      title: "Contact",
      ops1: "Started",
      ops2: "Prycing",
      ops3: "Resources"
    }
  ],
  copyright: "2023 © all Right Reserved Term of use GREENMIND"
}

const Footer = () => {
  const { logo, subtitle, main, copyright } = footer;
  return (
    <div className='primary lg:p-10 md:p-6 p-4 max-w-screen-2xl'>
      <div className=" flex md:flex-row flex-col lg:mb-10 lg:mx-10 md:mb-6 md:mx-6">
        <div className="">
          <img src={logo} alt="" className='lg:py-6 md:py-4  md:mx-0 mx-[7rem] py-4' />
          <h3 className='text-gray-500 text-[14px] lg:pb-4 md:pb-2 mt-2 md:text-start text-center'>{subtitle}</h3>
          <ul className="flex md:mx-0 mx-[6.25rem]">
            <li className='hover:cursor-pointer '><RiFacebookCircleFill className='icon-ft' /></li>
            <li className='hover:cursor-pointer '><RiTwitterFill className='icon-ft ' /></li>
            <li className='hover:cursor-pointer '><RiYoutubeFill className='icon-ft ' /></li>
            <li className='hover:cursor-pointer '><RiInstagramFill className='icon-ft ' /></li>
          </ul>

        </div>
        <div className="flex md:flex-row flex-col lg:mx-[50%] md:mx-[10%] md:text-start text-center">
          {main.map(({ id, title, ops1, ops2, ops3 }) => {
            return (
              <div className="mx-8" key={id}>
                <h1 className='font-bold my-6 hover:underline hover:cursor-context-menu'>{title}</h1>
                <ul>
                  <li className='social'>{ops1}</li>
                  <li className='social'>{ops2}</li>
                  <li className='social'>{ops3}</li>
                </ul>
              </div>
            )
          })}
        </div>

      </div>

      <div className="flex  justify-between">
        <p className='text-gray-600 lg:mx-10 md:mx-6 my-4 mx-10 lg:text-[15px] md:text-[13px] text-[12px]'>{copyright}</p>
        <form className="hidden md:flex lg:mx-14 md:mx-10">
          <input type="email" placeholder='Enter Email... ' className='lg:w-[420px] md:w-[320px] h-[40px] rounded-lg px-4  text-[14px]'  />
          <button className="w-[20px] h-[20px] rounded absolute right-[4%] " ><FiArrowRight className='ml-[-3rem] mt-3 text-[18px] hover:scale-110 transition-all hover:translate-x-2' /></button>
        </form>
      </div>

          <ScrollButton />
    </div>
  )
}

export default Footer
