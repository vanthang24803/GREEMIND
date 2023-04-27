import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../page/Navbar'
import Footer from '../page/Footer'
import Silder from './Silder'
import { RiArrowRightSLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { RiAddLine, RiSubtractLine  , RiHeartLine , RiShareFill } from "react-icons/ri";
import Review from './Review'
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
    btnText: "Add to cart ",

}


const Info = () => {
    const [item, setItem] = useState(1);
    const augment = () => {
        setItem(item + 1);
    }

    const reduce = () => {
        if (item > 1) {
            setItem(item - 1);
        }
    }

    const { home, shop, info, name, price, title, subprice, btnText, reviewText, addReviewText } = data;
    return (
        <>
            <Navbar />
            <Fragment>
                <div className="flex md:flex-row flex-col  lg:max-w-full md:max-w-[1024px]">
                    <div className="lg:basis-1/3 md:basis-1/2 h-[30vh] w-1/2">
                        <div className="flex my-4 lg:mx-[5.75rem] mx-[2rem]">
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

                    <div className="lg:basis-2/3 md:basis-1/2 my-8">
                       {/* Title  */}
                        <div className="md:mx-0 mx-4">
                            <h1 className='md:text-4xl text-3xl font-bold  '>{title}</h1>
                            
                            {/* Icon */}
                            <div className="flex mt-8 hover:cursor-pointer">
                                <FcLike className='text-lg' />
                                <FcLike className='text-lg' />
                                <FcLike className='text-lg' />
                                <FcLike className='text-lg' />
                                <FcLike className='text-lg mr-4' />
                                <h3 className='mx-2 text-[12px] font-normal text-gray-600'>{reviewText}</h3>
                                <p className='text-[12px] font-medium'>{addReviewText}</p>
                            </div>

                            {/* Review Text */}
                            <div className="flex items-center">
                                <p className='text-3xl my-8 text-[#72e3e3] font-bold'>{subprice}</p>
                                <p className='mx-6 text-xl font-semibold line-through text-gray-400'>{price}</p>
                            </div>

                            {/* Button */}
                            <div className="flex lg:flex-row flex-col">
                                {/* Handle */}
                                <div className="w-[160px] h-[55px] border-2 border-gray-100 flex justify-between items-center lg:mx-0 mx-4">
                                    <button className='w-[40px] h-[40px] rounded-full bg-gray-300 mx-1 flex justify-center items-center'
                                        onClick={reduce}
                                    >
                                        <RiSubtractLine className="text-xlg hover:scale-110 transition-all ease-in-out " />
                                    </button>
                                    <p className='text-xl font-medium text-center'>{item}</p>
                                    <button className='w-[40px] h-[40px] rounded-full bg-gray-300 mx-1 flex justify-center items-center'
                                        onClick={augment}
                                    >
                                        <RiAddLine className='text-lg hover:scale-110 transition-all ease-in-out' />
                                    </button>
                                </div>
                                <div className="lg:mx-24 lg:my-0 my-10">
                                    <Link to="/cart">
                                    <button className='w-[320px] h-[55px] primary font-bold text-xl hover:scale-110 transition-all ease-in-out text-white rounded-2xl'>{btnText}</button>
                                    </Link>
                                </div>
                            </div>

                            {/* Share */}
                            <div className="lg:my-12 my-6 flex">
                                <button className='uppercase text-lg font-bold flex'><RiHeartLine className='text-2xl mr-3' />Wishlist</button>
                                <button className='uppercase text-lg font-bold md:mx-16 mx-20 flex'><RiShareFill className='text-2xl mr-3'/>Share</button>
                            </div>
                            
                        </div>

                        {/* Reviews */}
                        <div className="">
                            <Review />
                        </div>
                    </div>
                </div>
            </Fragment>
            <Footer />
        </>
    )
}

export default Info
