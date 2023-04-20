import React from 'react'
import Logo from '../assets/Logo.svg';
import { RiFacebookCircleFill, RiTwitterFill, RiInstagramFill ,RiYoutubeFill } from "react-icons/ri";
import { FiArrowRight } from "react-icons/fi";

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
    <div className='primary p-10 '>
      <div className=" flex mb-10 mx-10">
        <div className="">
          <img src={logo} alt="" className='py-6' />
          <h3 className='text-gray-500 text-[14px] pb-4 mt-2'>{subtitle}</h3>
          <ul className="flex">
            <li className='hover:cursor-pointer '><RiFacebookCircleFill className='icon-ft' /></li>
            <li className='hover:cursor-pointer '><RiTwitterFill className='icon-ft ' /></li>
            <li className='hover:cursor-pointer '><RiYoutubeFill className='icon-ft ' /></li>
            <li className='hover:cursor-pointer '><RiInstagramFill className='icon-ft ' /></li>
          </ul>

        </div>
        <div className="flex mx-[50%] ">
          {main.map(({ id, title, ops1, ops2, ops3 }) => {
            return (
              <div className=" mx-8" key={id}>
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

      <div className="flex justify-between">
        <p className='text-gray-600 mx-10 my-4 text-[15px]'>{copyright}</p>
        <form className="flex mx-14">
          <input type="email" placeholder='Enter Email... ' className='w-[420px] h-[40px] rounded-lg px-4 text-[14px]'  />
          <button className="w-[20px] h-[20px] rounded absolute right-[4%] " ><FiArrowRight className='ml-[-3rem] mt-3 text-[18px] hover:scale-110 transition-all hover:translate-x-2' /></button>
        </form>
      </div>

    </div>
  )
}

export default Footer
