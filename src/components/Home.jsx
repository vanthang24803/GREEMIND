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
        <div className='primary mx-10 my-4 h-[28.6rem] w-auto rounded-3xl flex'>
            <div className="">
                <h1 className='font-bold text-7xl text px-16 py-8 max-w-[800px] text-[#000000] text-shadow-md'>{title}</h1>
                <div className="flex px-8">
                    <div className="border-r-2  border-black px-8">
                        <h3 className='font-semibold text-[30px]'>{subtitle1}</h3>
                        <span className=' font-semibold'>{text1}</span>
                    </div>

                    <div className="px-8">
                        <h3 className='font-semibold text-[30px]'>{subtitle2}</h3>
                        <span className=' font-semibold'>{text2}</span>
                    </div>

                </div>

                <form className='px-16 my-12' >
                    <input type="text" placeholder='What are you looking for?' className='w-[425px] h-[50px] rounded-lg px-4' />
                    <button className="primary w-[34px] h-[34px] rounded absolute top-[60%] left-[33%] text-[16px]"><FiSearch className='mx-2 text-[17px] hover:scale-125 transition-all' /></button>
                </form>
            </div>

            <img src={Left} alt="" className='absolute w-[12%] top-[55%] right-[50%]' />

            <div className="flex    ">
                <img src={Dark} alt="" className='absolute top-[25%] ' />
                <img src={Main} alt="" className='absolute top-[22%] right-[12%] h-[25.8rem]'/>
            </div>

            <img src={Right} alt="" className='absolute w-[80px] right-[8%] top-[20%] ' />

        </div>
    )
}

export default Home
