import React, { useState, Fragment } from 'react'
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

const data = {
    title1: "Information",
    data1: [
        {
            id: 1,
            name: "Brands",
            title: "Abies"

        },
        {
            id: 2,
            name: "Activty",
            title: "Good"

        },
        {
            id: 3,
            name: "Country",
            title: "Japan"

        }
    ],
    title2: "Details",
    data2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima laborum possimus quo. Excepturi, inventore voluptatum!",
    title3: "Custorm",
    title4: "Reviews",
}


const Review = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const handleOpen = () => {
        setOpen(!open);

    }
    const handleOpen1 = () => {
        setOpen1(!open1);
    }

    const handleOpen2 = () => {
        setOpen2(!open2);
    }

    const handleOpen3 = () => {
        setOpen3(!open3);
    }

    const { title1, title2, title3, title4, data1, data2 } = data;

    return (
        <>
            {/* INFOMATION */}
            <div className="py-4 border-t-2 border-gray-200">
                {/* Title  */}
                <div className='flex' onClick={handleOpen}>
                    <button onClick={handleOpen}>
                        {open ? <RiSubtractLine className='flex justify-center items-center text-xl my-1 mr-2' /> : <RiAddLine className='flex justify-center items-center text-xl my-1 mr-2' />}
                    </button>
                    <p className='text-xl  font-bold uppercase cursor-pointer '>{title1}</p>
                </div>

                {/* Data */}
                {open ? (
                    <div className="m-6">
                        {data1.map((item) => {
                            const { id, name, title } = item;
                            return (
                                <div className="flex lg:w-1/4 md:w-1/2  justify-between" key={id}>
                                    <>
                                        <p className='uppercase font-semibold mb-2 '>{name}</p>
                                    </>
                                    <>
                                        <p className='text-[14px]'>{title}</p>
                                    </>
                                </div>
                            )
                        })}
                    </div>
                ) : null}
            </div>

            {/* DETAIL */}
            <div className="py-4 border-t-2 border-gray-200">
                {/* Title  */}
                <div className='flex' onClick={handleOpen1}>
                    <button onClick={handleOpen1}>
                        {open1 ? <RiSubtractLine className='flex justify-center items-center text-xl my-1 mr-2' /> : <RiAddLine className='flex justify-center items-center text-xl my-1 mr-2' />}
                    </button>
                    <p className='text-xl  font-bold uppercase cursor-pointer '>{title2}</p>
                </div>

                {/* Data */}
                {open1 ? (
                    <div className="m-6">
                        <span className='text-[14px] text-gray-600 font-medium'>{data2}</span>
                        <p className='text-[14px] my-4  text-gray-600 font-medium'>{data2}</p>
                    </div>
                ) : null}
            </div>

            {/* Custorm */}
            <div className="py-4 border-t-2 border-gray-200">
                {/* Title  */}
                <div className='flex' onClick={handleOpen2}>
                    <button onClick={handleOpen2}>
                        {open2 ? <RiSubtractLine className='flex justify-center items-center text-xl my-1 mr-2' /> : <RiAddLine className='flex justify-center items-center text-xl my-1 mr-2' />}
                    </button>
                    <p className='text-xl  font-bold uppercase cursor-pointer '>{title3}</p>
                </div>

                {/* Data */}
                {open2 ? (
                    <div className="m-6">
                        <span className='text-[14px] text-gray-600 font-medium'>{data2}</span>
                        <p className='text-[14px] my-4  text-gray-600 font-medium'>{data2}</p>
                    </div>
                ) : null}
            </div>


            {/* Review */}
            <div className="py-4 border-t-2 border-gray-200">
                {/* Title  */}
                <div className='flex' onClick={handleOpen3}>
                    <button onClick={handleOpen3}>
                        {open2 ? <RiSubtractLine className='flex justify-center items-center text-xl my-1 mr-2' /> : <RiAddLine className='flex justify-center items-center text-xl my-1 mr-2' />}
                    </button>
                    <p className='text-xl  font-bold uppercase cursor-pointer '>{title4}</p>
                </div>

                {/* Data */}
                {open3 ? (
                    <div className="m-6">
                        <span className='text-[14px] text-gray-600 font-medium'>{data2}</span>
                        <p className='text-[14px] my-4  text-gray-600 font-medium'>{data2}</p>
                    </div>
                ) : null}
            </div>

        </>
    )
}

export default Review
