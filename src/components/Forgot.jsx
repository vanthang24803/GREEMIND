import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Login2 from "../assets/Login2.svg"
import { FcGoogle } from "react-icons/fc";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";


const data = {
    image: Login2,
    title: "Forgot your password?",
    subtitle: "Please confirm your email address below and we will send you verification code.",
    btnText: "Contine",
    google: "Login with Google",
    desc: "Already have an account ? ",
    main: "Log in"
}



const Forgot = () => {
    const { image, title, subtitle, btnText, google, desc, main } = data;
    return (
        <div>
            <Fragment>
                <div className='flex md:flex-row flex-col p-5 primary md:h-[100vh] '>
                    <div className="lg:basis-3/5 md:basis-1/2">
                        <button className='absolute md:w-[40px] md:h-[55px] bg-transparent md:top-[46%]  lg:my-2 md:my-[0.75rem] '

                        ><BiChevronLeft className='text-[60px] text-white font-bold hover:-translate-x-3 transition-all ease-in-out hidden ' /></button>
                        <img src={image} alt="" className='w-full lg:h-[94.72vh] md:h-[96vh] md:rounded-l-xl md:rounded-tr-none rounded-tr-lg rounded-tl-lg  ' />
                        <button className='absolute w-[40px] h-[55px] bg-transparent mx-3 top-[46%] my-2 right-5 '

                        ><BiChevronRight className='text-[60px] text-white font-bold hover:translate-x-3 transition-all ease-in-out' /></button>
                    </div>

                    <div className="lg:basis-2/5 md:basis-1/2 bg-white   md:rounded-r-xl md:rounded-bl-none rounded-bl-lg rounded-br-lg ">
                        <div className="px-10">
                            <h1 className='lg:text-[2.5rem] md:text-2xl text-2xl  mt-10 mb-5 md:text-start text-center md:mt-20 md:mb-6 font-bold'>{title}</h1>
                            <p className='md:text-start text-center md:text-base text-[12px]'>{subtitle}</p>
                        </div>

                        <form className='m-10 flex-row'>
                            <input type="email" placeholder='Email' className='input' />
                        </form>

                        <div className="">
                            <button className='mx-10 lg:w-[67.5vh] md:w-[27.5vh] w-[32vh] h-[55px] rounded-xl bg-gray-700 md:my-2 my-0 text-white font-bold text-base hover:scale-105 transition-all ease-in'>{btnText}</button>
                            <button className='mx-10 lg:w-[67.5vh] md:w-[27.5vh] w-[32vh] h-[55px] rounded-xl border-2 border-black bg-white md:my-4 my-6 text-black 
                font-semibold text-base hover:scale-105 transition-all ease-in flex  justify-center items-center'>
                                <FcGoogle className='text-xl mx-2' />  {google}
                            </button>
                        </div>

                        <div className="flex justify-center items-center">
                            <p className='text-base mx-2 md:my-4 my-6 text-gray-500 '>{desc}</p>
                            <Link to="/login">
                                <p className='font-semibold text-black hover:cursor-pointer hover:underline'>{main}</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </Fragment>
        </div>
    )
}

export default Forgot
