import React from 'react'
import Main from "../assets/Main.svg";
import Dark from "../assets/Dark.svg";
import Left from "../assets/VectorLeft.svg";
import Right from "../assets/VectorRight.svg";
import { FiSearch } from "react-icons/fi";

const home = {
    title: "Buy your dream plants",
    subtitle1: "50+",
    text1: "Plant Species",
    subtitle2: "100+",
    text2: "Customers",
}

const Home = () => {
    const { title, subtitle1, text1, subtitle2, text2 } = home;
    return (
        <div className='max-w-screen-2xl primary mx-10 my-4 h-[28.6rem] w-auto rounded-3xl flex'>
            <div className="">
                <h1 className='font-bold lg:text-7xl md:text-6xl px-16 py-8 lg:max-w-[800px] md:max-w-[600px] text-[#000000] text-shadow-md'>{title}</h1>
                <div className="flex px-8">
                    <div className="border-r-2  border-black px-8">
                        <h3 className='font-semibold lg:text-[30px] text-[18px]'>{subtitle1}</h3>
                        <span className=' font-semibold text-base'>{text1}</span>
                    </div>

                    <div className="px-8">
                        <h3 className='font-semibold lg:text-[30px] text-[18px]'>{subtitle2}</h3>
                        <span className=' font-semibold text-base'>{text2}</span>
                    </div>

                </div>

                <form className='px-16 my-12' >
                    <input type="text" placeholder='What are you looking for?' className='lg:w-[425px] h-[50px] rounded-lg px-4 md:w-[360px] sm:[240px]' />
                    <button className="primary w-[34px] h-[34px] rounded absolute lg:top-[60%] lg:left-[33%] md:left-[54.5%] md:top-[40%] text-[16px]"><FiSearch className='mx-2 text-[17px] hover:scale-125 transition-all' /></button>
                </form>
            </div>


            <div className="hidden md:flex">
                <img src={Dark} alt="" className='absolute  lg:top-[25%] lg:w-auto  lg:right-[12%] hidden lg:block' />
                <img src={Main} alt="" className='absolute lg:top-[22%] lg:right-[12%] lg:h-[25.8rem] md:top-[17%] md:right-0 md:h-[39.3%]' />
            </div>
            <div className="hidden lg:block">
                <img src={Left} alt="" className='absolute w-[12%] top-[55%] right-[50%] ' />

                <img src={Right} alt="" className=' absolute w-[80px] right-[4%] top-[20%]' />
            </div>

        </div>
    )
}

export default Home
