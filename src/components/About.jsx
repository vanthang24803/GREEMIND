import React from 'react'
import About1 from '../assets/About1.svg';
import About2 from '../assets/About2.svg';
import About3 from '../assets/About3.svg';

const about = {
    title: "About us",
    subtitle: "Order now and appreciate the beauty of nature",
    brand: [
        {
            id: 1,
            image: About1,
            name: "Large Assortment",
            desc: "we offer many different types of products with fewer variations in each category."
        },
        {
            id: 2,
            image: About2,
            name: "Fast & Free Shipping",
            desc: "4-day or less delivery time, free shipping and an expedited delivery option."
        },
        {
            id: 3,
            image: About3,
            name: "24/7 Support Now",
            desc: "answers to any business related inquiry 24/7 and in real-time."
        }
    ],
}


const About = () => {
    const { title, subtitle, brand } = about;
    return (
        <div className='mb-24'>
            <h1 className="text-center text-3xl font-bold my-2" id='contact'>{title}</h1>
            <p className='text-center text-gray-400 my-4'>{subtitle}</p>
       
            <div className="flex justify-center items-center">
                {brand.map(({ id, image, name, desc }) => {
                    return (
                        <div className="w-[33.33%] mx-10 my-8" key={id}>
                            <img src={image} alt="" className='mx-[10rem] hover:cursor-pointer hover:scale-105 transition'/>
                            <h3 className='mx-16 py-2 font-bold text-lg text-center'>{name}</h3>
                            <p className='text-[14px] text-center text-gray-400'>{desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default About
