import React from 'react'
import Cate1 from '../assets/Cate1.svg';
import Cate2 from '../assets/Cate2.svg';
import Cate3 from '../assets/Cate3.svg';
import { RiArrowRightLine } from "react-icons/ri";


const category = {
    title: "Category",
    subtitle: "Find what you are looking for",
    brand: [
        {
            id: 1,
            image: Cate1,
            name: "Natural Plants"
        },
        {
            id: 2,
            image: Cate2,
            name: "Plant Accessories",

        },
        {
            id: 3,
            image: Cate3,
            name: "Artificial Plants"
        }
    ],

    desc: "Horem ipsum dolor sit amet, consectetur adipiscing elit.",
    btnText: "Explore",
};


const Category = () => {
    const { title, subtitle, brand , desc , btnText} = category;
    return (
        <div className='my-8'>
            <h1 className="text-center text-3xl font-bold my-2">{title}</h1>
            <p className='text-center text-gray-400 my-4 mb-20'>{subtitle}</p>
            <div className="h-[760px] w-auto primary">
                <div className="flex">
                    {brand.map(({ id, image, name }) => {
                        return (
                            <div className="flex w-[33.333%]" key={id}>
                                <div className="my-8 mx-20">
                                    <img src={image} alt="" className='h-[82%] rounded-lg my-6 hover:translate-y-2  transition-all shadow-2xl' />
                                    <h1 className="text-center font-bold text-xl">{name}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="">
                    <p className='text-center text-gray-600 text-base mb-4'>{desc}</p>
                    <button className='bg-[#FFFF] my-4  ml-[45%] w-[160px] h-[40px] rounded-md font-medium flex  justify-center items-center shadow hover:scale-110 transition'>{btnText}<RiArrowRightLine className='ml-2 text-[18px] hover:translate-x-1 transition ease-in-out' /></button>
                </div>
            </div>
        </div>
    )
}

export default Category
