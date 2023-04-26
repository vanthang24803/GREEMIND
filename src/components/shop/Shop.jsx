import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import NavBar from "../page/Navbar"
import Footer from "../page/Footer"
import Data from "./Data"



const Shop = () => {

    const [items, setItems] = useState(Data);
    const fiterItem = (categoryItem) => {
        const updatedItems = Data.filter((item) => {
            return item.category === categoryItem;
        })

        setItems(updatedItems);
    }

    return (
        <>
            <NavBar />
            <Fragment>
                <div className="">
                    <div className="flex md:flex-row py-10 px-8 my-2">
                        <span className='title-shop' onClick={() => setItems(Data)}>All Products</span>
                        <span className='title-shop' onClick={() => fiterItem("Big")}>Big</span>
                        <span className='title-shop' onClick={() => fiterItem("Medium")}>Medium</span>
                        <span className='title-shop' onClick={() => fiterItem("Small")}>Small</span>
                    </div>

                    <div className="grid lg:grid-cols-4  md:grid-cols-3 gap-8 p-10">
                        {items.map((item) => {
                            const { id, image, btnText, name, price } = item;
                            return (
                                <div className="group" key={id}>
                                    <Link to="/items">
                                        <button className='absolute uppercase lg:mx-4 md:mx-6 mx-5 lg:my-[40vh] md:my-[22vh] mt-[24vh] w-[32vh] lg:w-[40vh] md:w-[16vh] h-[40px] bg-[#fffefedd] shadow text-[#6aaeae] font-bold text-lg hidden group-hover:block md:hover:-translate-y-2 transition-all ease-in-out rounded-sm'>{btnText}</button>
                                    </Link>
                                    <img src={image} alt="" className='object-fill lg:h-[50vh] md:h-[27vh] w-full hover:cursor-pointer transition-all ' />
                                    <p className='md:text-start text-center font-semibold text-xl my-4'>{name}</p>
                                    <p className='md:text-start text-center text-gray-400 my-2'>{price}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Fragment>
            <Footer />
        </>
    )
}

export default Shop
