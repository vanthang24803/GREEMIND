import React from 'react'
import Company1 from "../assets/Company1.svg";
import Company2 from "../assets/Company2.svg";
import Company3 from "../assets/Company3.svg";
import Company4 from "../assets/Company4.svg";
import Company5 from "../assets/Company5.svg";


const company = {
  title: "What company cooperate with GREEMIND?",
  brand: [
    {
      id: 1,
      image: Company1
    }
    ,
    {
      id: 2,
      image: Company2
    }
    ,
    {
      id: 3,
      image: Company3
    }
    ,
    {
      id: 4,
      image: Company4
    }
    ,
    {
      id: 5,
      image: Company5
    }
  ]

};

const Company = () => {
  const { title, brand } = company;
  return (
    <div id='company'>
      <div className='mx-10 mt-24 mb-20'>
        <h1 className="text-4xl font-bold w-[50%] hover:underline">{title}</h1>
      </div>
      <div className="primary  flex  justify-between  items-center h-[100px] w-full mb-[8rem]">
        {brand.map(({ id, image }) => {
          return (
            <div className="" key={id}>
              <img src={image} alt="" className='mx-8 w-[80%] hover:cursor-pointer' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Company