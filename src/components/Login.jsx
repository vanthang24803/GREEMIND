import React, { useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Login1 from "../assets/Login1.svg"
import Login2 from "../assets/Login2.svg"
import Login3 from "../assets/Login3.svg"
import Login4 from "../assets/Login4.svg"
import { FcGoogle } from "react-icons/fc";

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
        image2: Login2,
        title2: "Login",
        subtitle2: "Welcome back Please enter your details .",
        btnText2: "Login",
        forgot2: "Forgot password ?",
        google2: "Sign up with Google",
        desc2: "Don't have an account ? ",
        main2: "Sign up"
    },

}


const Login = () => {
    const { login, create } = data;
    const { image, title, subtitle, btnText, google, desc, main } = create;
    const { image2, title2, subtitle2, btnText2, forgot2, google2, desc2, main2 } = login;

    const [loading, setLoading] = useState(false);
    const time = 500;

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, time);
    }, [])

    return (
        <>
            {loading ?
                <Loading /> :
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
                                <p className='text-base mx-2 md:my-4 my-6 text-gray-500 '>{desc}</p>
                                <Link to="/">
                                    <p className='font-semibold text-black hover:cursor-pointer hover:underline'>{main}</p>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:basis-3/5 md:basis-1/2">
                            <img src={image} alt="" className='w-full lg:h-[94.72vh] md:h-[96vh] md:rounded-r-xl md:rounded-bl-none rounded-bl-lg rounded-br-lg  ' />
                        </div>
                    </div>
                </Fragment>
            }
        </>
    )
}

export default Login
