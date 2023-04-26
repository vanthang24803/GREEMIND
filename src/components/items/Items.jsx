import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../page/Navbar'
import Footer from '../page/Footer'
import Silder from './Silder'
import { RiArrowRightSLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
const data = {
    home: "Home",
    shop: "Shop",
    info: "Info",
    name: "Abies",
    price: "₱ 1,400.00",
    subprice: "₱ 1.320.00",
    sale: "32%",
    title: "Abies ballpoint pen smooth writing expensive",
    reviewText: "2,251 reviews ",
    addReviewText: "Add Your Review",
    btnText: "Add to cart",

}


const Info = () => {
    const { home, shop, info, name, price, title, subprice, btnText, reviewText, addReviewText } = data;
    return (
        <>
            <Navbar />
            <Fragment>
                <div className="flex md:flex-row flex-col h-[100vh]">
                    <div className="md:basis-1/3 h-[30vh] w-1/2">
                        <div className="flex my-4 lg:mx-[5.75rem] md:mx-[2rem]">
                            <Link to="/">
                                <p className='flex text-black'>{home}<RiArrowRightSLine className='my-1 mx-2' /> </p>
                            </Link>
                            <Link to='/shop'>
                                <p className='flex text-black'>{shop}<RiArrowRightSLine className='my-1 mx-2' /></p>
                            </Link>
                            <p className='flex'>{info}<RiArrowRightSLine className='my-1 mx-2' /></p>
                            <p className=' text-gray-500'>{name}</p>
                        </div>
                        <Silder />
                    </div>

                    <div className="basis-2/3 my-8">
                        <div className="">
                            <h1 className='text-4xl font-bold '>{title}</h1>
                            <div className="flex mt-8 hover:cursor-pointer">
                                <FcLike className='text-lg' />
                                <FcLike className='text-lg' />
                                <FcLike className='text-lg' />
                                <FcLike className='text-lg' />
                                <FcLike className='text-lg mr-4' />

                                <h3 className='mx-2 text-[12px] font-normal text-gray-600'>{reviewText}</h3>
                                <p className='text-[12px] font-medium'>{addReviewText}</p>
                            </div>
                            <div className="flex items-center">
                                <p className='text-3xl my-8 text-[#72e3e3] font-bold'>{subprice}</p>
                                <p className='mx-6 text-xl font-semibold line-through text-gray-400'>{price}</p>
                            </div>
                            <div className="">
                                <div className="">
                                    <button className='w-[320px] h-[50px] primary font-bold text-xl hover:scale-110 transition-all ease-in-out text-white rounded-2xl'>{btnText}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
            <Footer />
        </>
    )
}

export default Info
