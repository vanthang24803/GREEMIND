import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Login1 from "/src/assets/Login1.svg"
import Login4 from "/src/assets/Login4.svg"
import { FcGoogle } from "react-icons/fc";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const data = {
    create: {
        image: Login1,
        title: "Create an account",
        subtitle: "Let's get started with your 30 day free trial.",
        btnText: "Create an account",
        google: "Sign up with Google",
        desc: "Already have an account ? ",
        main: "Log in"
    },
    login: {
        image2: Login4,
        title2: "Login",
        subtitle2: "Welcome back Please enter your details .",
        btnText2: "Login",
        forgot2: "Forgot password ?",
        google2: "Login with Google",
        desc2: "Don't have an account ? ",
        main2: "Sign up"
    },

}


const Login = () => {
    const { login, create } = data;
    const { image, title, subtitle, btnText, google, desc, main } = create;
    const { image2, title2, subtitle2, btnText2, forgot2, google2, desc2, main2 } = login;

    const [success, setSuccess] = useState(false);

    const handleSuccess = () => {
        setSuccess(!success);
    }

    return (
        <>
            {success ?
                // Create
                <Fragment>
                    <div className='flex md:flex-row flex-col p-5 primary md:h-[100vh] '>
                        <div className="lg:basis-2/5 md:basis-1/2 bg-white md:rounded-l-xl md:rounded-tr-none rounded-tr-lg rounded-tl-lg">
                            <div className="px-10">
                                <h1 className='lg:text-[2.5rem] md:text-2xl text-2xl  mt-10 mb-5 md:text-start text-center md:mt-20 md:mb-6 font-bold'>{title}</h1>
                                <p className='md:text-start text-center md:text-base text-[12px]'>{subtitle}</p>
                            </div>

                            <form className='m-10 flex-row'>
                                <input type="text" placeholder='Name' className="input" />
                                <input type="email" placeholder='Email' className='input' />
                                <input type="text" placeholder='Password' className='input' />
                            </form>

                            <div className="">
                                <button className='mx-10 lg:w-[67.5vh] md:w-[27.5vh] w-[32vh] h-[55px] rounded-xl bg-gray-700 md:my-2 my-0 text-white font-bold text-base hover:scale-105 transition-all ease-in'>{btnText}</button>
                                <button className='mx-10 lg:w-[67.5vh] md:w-[27.5vh] w-[32vh] h-[55px] rounded-xl border-2 border-black bg-white md:my-4 my-6 text-black 
                font-semibold text-base hover:scale-105 transition-all ease-in flex  justify-center items-center'>
                                    <FcGoogle className='text-xl mx-2' />  {google}
                                </button>
                            </div>

                            <div className="flex justify-center items-center">
                                <p onClick={handleSuccess} className='text-base mx-2 md:my-4 my-6 text-gray-500 '>{desc}</p>
                                <p onClick={handleSuccess} className='font-semibold text-black hover:cursor-pointer hover:underline'>{main}</p>
                            </div>
                        </div>

                        <div className="lg:basis-3/5 md:basis-1/2">
                            <button className='absolute md:w-[40px] md:h-[55px] bg-transparent md:top-[46%]  lg:my-2 md:my-[0.75rem]'
                                onClick={handleSuccess}
                            ><BiChevronLeft className='text-[60px] text-white font-bold hover:-translate-x-3 transition-all ease-in-out md:block hidden ' /></button>
                            <img src={image} alt="" className='w-full lg:h-[94.72vh] md:h-[96vh] md:rounded-r-xl md:rounded-bl-none rounded-bl-lg rounded-br-lg  ' />
                            <button className='absolute w-[40px] h-[55px] bg-transparent mx-3 top-[46%] my-2 right-5 '
                                onClick={handleSuccess}
                            ><BiChevronRight className='text-[60px] text-white font-bold hover:translate-x-3 transition-all ease-in-out' /></button>
                        </div>
                    </div>
                </Fragment>
                :
                <Fragment>
                    {/* Login */}
                    <div className='flex md:flex-row flex-col p-5 primary md:h-[100vh] '>
                        <div className="lg:basis-2/5 md:basis-1/2 bg-white md:rounded-l-xl md:rounded-tr-none rounded-tr-lg rounded-tl-lg">
                            <div className="px-10">
                                <h1 className='lg:text-[2.5rem] md:text-2xl text-2xl  mt-10 mb-5 md:text-start text-center md:mt-20 md:mb-6 font-bold'>{title2}</h1>
                                <p className='md:text-start text-center md:text-base text-[12px]'>{subtitle2}</p>
                            </div>

                            <form className='m-10 flex-row'>
                                <input type="email" placeholder='Email' className='input' />
                                <input type="text" placeholder='Password' className='input' />
                                <Link to="/forgot">
                                    <p className='text-[12px] text-end font-normal text-gray-400 cursor-pointer hover:text-gray-800 hover:font-semibold '>{forgot2}</p>
                                </Link>
                            </form>

                            <div className="">
                                <button className='mx-10 lg:w-[67.5vh] md:w-[27.5vh] w-[32vh] h-[55px] rounded-xl bg-gray-700 md:my-2 my-0 text-white font-bold text-base hover:scale-105 transition-all ease-in'>{btnText2}</button>
                                <button className='mx-10 lg:w-[67.5vh] md:w-[27.5vh] w-[32vh] h-[55px] rounded-xl border-2 border-black bg-white md:my-4 my-6 text-black 
                font-semibold text-base hover:scale-105 transition-all ease-in flex  justify-center items-center'>
                                    <FcGoogle className='text-xl mx-2' /> {google2}
                                </button>
                            </div>

                            <div className="flex justify-center items-center">
                                <p className='text-base mx-2 md:my-4 my-6 text-gray-500 '>{desc2}</p>
                                <p onClick={handleSuccess} className='font-semibold text-black hover:cursor-pointer hover:underline'>{main2}</p>
                            </div>
                        </div>

                        <div className="lg:basis-3/5 md:basis-1/2">
                            <button className='absolute md:w-[40px] md:h-[55px] bg-transparent top-[46%] lg:my-2 md:my-[0.75rem] '
                                onClick={handleSuccess}
                            ><BiChevronLeft className='text-[60px] text-white font-bold hover:-translate-x-3 transition-all ease-in-out' /></button>
                            <img src={image2} alt="" className='w-full lg:h-[94.72vh] md:h-[96vh] md:rounded-r-xl md:rounded-bl-none rounded-bl-lg rounded-br-lg  ' />
                            <button className='absolute w-[40px] h-[55px] bg-transparent mx-3 top-[46%] my-2 right-5 '
                                onClick={handleSuccess}
                            ><BiChevronRight className='text-[60px] text-white font-bold hover:translate-x-3 transition-all ease-in-out' /></button>
                        </div>
                    </div>
                </Fragment>
            }
        </>
    )
}

export default Login
