import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { RiShoppingCart2Line, RiUserLine, RiMenu2Fill, RiCloseLine } from "react-icons/ri";



const Navbar = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    const [show, setShow] = useState(false);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    return (
        <nav className='max-w-screen-2xl flex p-10 justify-between sticky top-0 z-10 '>
            <div className="">
                <a href="/"><img src={Logo} alt="" className='w-full h-auto' /></a>
            </div>

            <div className="lg:mx-20 hidden lg:block">
                <ul className="lg:flex">
                    <Link to="/"><li className='nav'><a href='/'>Home</a></li></Link>
                    <Link to="/dakjdha"><li className='nav'><a>Products</a></li></Link>
                    <Link to="/"><li className='nav'><a>Contact</a></li></Link>
                    <Link to="/"><li className='nav'><a>Category</a></li></Link>
                    <Link to="/"><li className='nav'><a>Company</a></li></Link>
                </ul>
            </div>

            <div className="flex ">
                <RiShoppingCart2Line className='md:icon md:block hidden' />
                <Link to="/login" className='text-black'><RiUserLine className='icon md:block hidden' /></Link>
                <span className='w-[2px] h-[20px] bg-black mx-4 md:block hidden'></span>
                <button onClick={handleOpen} className='transition-all ease-in-out duration-700'>
                    {open == true ? <RiCloseLine className='lg:text-[20px] text-[25px] md:ml-0 ml-[11rem] hover:cursor-pointer hover:scale-125 transition ease-in-out ' /> : <RiMenu2Fill className='icon z-10' />}
                </button>
            </div>

            {open ? (
                <div className='md:hidden'>
                    <ul className="lg:flex bg-[#ffffffdd] w-[100%] h-100vh absolute top-20  left-0 transition-all shadow-lg">
                        <li className='nav-mb'><a href="#" className="text-lg hover:font-semibold">Home</a></li>
                        <li className='nav-mb'><a href="#products" className='text-lg hover:font-semibold '>Products</a></li>
                        <li className='nav-mb'><a href="#contact" className='text-lg hover:font-semibold'>Contact</a></li>
                        <li className='nav-mb'><a href="#category" className='text-lg hover:font-semibold'>Category</a></li>
                        <li className='nav-mb'><a href="#company" className='text-lg hover:font-semibold'>Company</a></li>
                    </ul>
                </div>
            ) : null}

        </nav>
    )
}

export default Navbar
