import React from 'react'
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from "react-icons/ri";
import Img from "../assets/Img.svg"


const data = {
    image: Img,
    title: "Opp!!!",
    subtitle: "Sorry, we couldn't find the page you're looking for ",
    btnText: "Back to Home",
  }
  

const Home404 = () => {
    const {image , title, subtitle, btnText } = data;
    return (
    <div className='App max-w-2xl h-[80vh] flex lg:flex-row flex-col px-10'>
        <div className="my-10">
            <h1 className='text-8xl font-bold text-black text-shadow-lg lg:text-start text-center'>{title}</h1>
            <p className='md:my-12 md:mb-20 mb-0 lg:text-xl md:text-xl text-base md:text-start  md:mx-[100px] text-center lg:mx-2 my-10 '>{subtitle}</p>
            <Link to="/" ><button className='primary lg:my-4 md:my-8 my-8 lg:mx-0 md:mx-[100px] mx-16 w-[180px] h-[40px] rounded-md font-medium flex  justify-center items-center shadow hover:scale-110 transition'>{btnText} <RiArrowRightLine  className='icon mx-1'/> </button></Link>
        </div>
        <div className="lg:mb-0 mb-2">
            <img src={image} alt="" className='lg:mx-[24rem]  md:mx-[3rem] mx-0 '/>
        </div>
    </div>
  )
}

export default Home404
