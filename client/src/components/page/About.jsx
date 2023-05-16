import React from "react";
import About1 from "/src/assets/About1.svg";
import About2 from "/src/assets/About2.svg";
import About3 from "/src/assets/About3.svg";

const about = {
  title: "About us",
  subtitle: "Order now and appreciate the beauty of nature order and support",
  brand: [
    {
      id: 1,
      image: About1,
      name: "Large Assortment",
      desc: "we offer many different types of products with fewer variations in each category.",
    },
    {
      id: 2,
      image: About2,
      name: "Fast & Free Shipping",
      desc: "4-day or less delivery time, free shipping and an expedited delivery option.",
    },
    {
      id: 3,
      image: About3,
      name: "24/7 Support Now",
      desc: "answers to any business related inquiry 24/7 and in real-time.",
    },
  ],
};

const About = () => {
  const { title, subtitle, brand } = about;
  return (
    <div className="mb-24 max-w-screen-2xl" id="about">
      <h1 className="my-2 text-center text-3xl font-bold" id="contact">
        {title}
      </h1>
      <p className="mx-4 my-4 text-center text-gray-400 md:mx-0">{subtitle}</p>

      <div className="flex flex-col md:flex-row md:items-center md:justify-center ">
        {brand.map(({ id, image, name, desc }) => {
          return (
            <div
              className="my-8 md:mx-2  md:basis-1/3 lg:mx-10 lg:w-[33.33333%]"
              key={id}
            >
              <img
                src={image}
                alt=""
                className="mx-[9rem] my-4 transition hover:scale-105  hover:cursor-pointer md:mx-[4.1rem] md:my-0 lg:mx-[10rem]"
              />
              <h3 className="my-2 text-center  text-lg font-bold md:my-4  md:mr-[0.5rem] lg:mx-16 lg:py-2">
                {name}
              </h3>
              <p className="text-center text-[14px] text-gray-400 md:text-[12px] lg:text-[14px]">
                {desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
