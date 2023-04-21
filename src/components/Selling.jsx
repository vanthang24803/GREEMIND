import React from 'react'
import Item1 from '../assets/Item1.svg';
import Item2 from '../assets/Item2.svg';
import Item3 from '../assets/Item3.svg';
import { RiArrowRightLine } from "react-icons/ri";

const sell = {
    title: "Best Selling Plants",
    subtitle: "Easiest way to healthy life by buying your favorite plants", 
    btnText: "See more",
    brand: [
        {
            id: 1,
            image: Item1,
            name: "Natural Plants",
            price: "₱ 1,400.00",
        },
        {
            id: 2,
            image: Item2,
            name: "Artificial Plants",
            price: "₱ 900.00"
        },
        {
            id: 3,
            image: Item3,
            name: "Artificial Plants",
            price: "₱ 3,500.00"
        }
    ]
};

const Selling = () => {
    const { title, subtitle, btnText, brand } = sell;

    return (
        <div className='max-w-screen-2xl flex flex-row my-20 mx-10' id='products'>
            <div className="w-[26%] mr-20">
                <h1 className='text-4xl font-bold my-2 hover:underline'>{title}</h1>
                <span className='text-base text-gray-400'>{subtitle}</span>
                <button className='primary lg:my-4 md:my-8 w-[160px] h-[40px] rounded-md font-medium flex  justify-center items-center shadow hover:scale-110 transition'>{btnText}<RiArrowRightLine className='ml-2 text-[18px] hover:translate-x-1 transition ease-in-out' /></button> 
            </div>

                {brand.map((brand, index) => {
                    const { name, price , image } = brand;
                    return (
                        <div className="flex lg:mx-12 md:m-4" key={index}>
                            <div className="">
                                <img src={image} alt="" className='mb-4 hover:scale-105 transition cursor-pointer'/>
                                <span className='font-semibold text-lg my-4'>{name}</span>
                                <p className='text-gray-400 my-2'>{price}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default Selling
