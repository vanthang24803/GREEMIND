import React from "react";
import Company1 from "/src/assets/Company1.svg";
import Company2 from "/src/assets/Company2.svg";
import Company3 from "/src/assets/Company3.svg";
import Company4 from "/src/assets/Company4.svg";
import Company5 from "/src/assets/Company5.svg";

const company = {
  title: "What company cooperate with GREEMIND?",
  brand: [
    {
      id: 1,
      image: Company1,
    },
    {
      id: 2,
      image: Company2,
    },
    {
      id: 3,
      image: Company3,
    },
    {
      id: 4,
      image: Company4,
    },
    {
      id: 5,
      image: Company5,
    },
  ],
};

const Company = () => {
  const { title, brand } = company;
  return (
    <div id="company" className=" max-w-screen-2xl">
      <div className="mx-10 mb-20 md:mt-20 lg:mt-24">
        <h1 className="text-4xl font-bold hover:underline md:text-center lg:w-[50%] lg:text-left">
          {title}
        </h1>
      </div>
      <div className="primary  mb-[8rem]  flex  h-[100px] w-full items-center justify-between">
        {brand.map(({ id, image }) => {
          return (
            <div className="" key={id}>
              <img
                src={image}
                alt=""
                className="mx-2 w-[80%]  hover:cursor-pointer md:mx-4 lg:mx-8"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Company;
