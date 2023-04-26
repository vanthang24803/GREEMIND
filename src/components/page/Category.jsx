import React from 'react'
import Cate1 from '/src/assets/Cate1.svg';
import Cate2 from '/src/assets/Cate2.svg';
import Cate3 from '/src/assets/Cate3.svg';
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
        <div className='max-w-screen-2xl my-8' id='category'>
            <h1 className="text-center text-3xl font-bold my-2">{title}</h1>
            <p className='text-center text-gray-400 my-4 mb-20'>{subtitle}</p>
            <div className="lg:h-[760px] w-auto primary md:h-[560px] h-auto">
                <div className="flex md:flex-row flex-col">
                    {brand.map(({ id, image, name }) => {
                        return (
                            <div className="flex md:lg:w-[33.333%] " key={id}>
                                <div className="my-8 lg:mx-20 md:mx-8 mx-6">
                                    <img src={image} alt="" className='lg:h-[82%] lg:w-auto md:h-[80%] md:w-full rounded-lg lg:my-6 md:my-4 md:mb-4 mb-6 hover:translate-y-2  transition-all shadow-2xl' />
                                    <h1 className="text-center font-bold text-xl ">{name}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="md:py-0 py-8">
                    <p className='text-center text-gray-600 text-base md:mb-4 mb-8 md:mx-0 mx-2'>{desc}</p>
                    <button className='bg-[#FFFF] lg:my-4 md:my-8   lg:ml-[45%] md:ml-[42%] ml-[29%] w-[160px] h-[40px] rounded-md font-medium flex  justify-center items-center shadow hover:scale-110 transition'>{btnText}<RiArrowRightLine className='ml-2 text-[18px] lg:hover:translate-x-1 md:hover:translate-x-4 transition ease-in-out' /></button>
                </div>
            </div>
        </div>
    )
}

export default Category
