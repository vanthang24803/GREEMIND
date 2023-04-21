import React from 'react'
import Logo from "../assets/Logo.svg";
import { RiShoppingCart2Line, RiUserLine, RiMenu2Fill } from "react-icons/ri";
const Navbar = () => {

    return (
        <nav className='flex p-10 justify-between sticky top-0 z-10 '>
            <div className="">
                <a href="/"><img src={Logo} alt="" /></a>
            </div>
            <div className="mx-20">
                <ul className="flex">
                    <li className='nav'><a href="#">Home</a></li>
                    <li className='nav'><a href="">Products</a></li>
                    <li className='nav'><a href="">Contact</a></li>
                    <li className='nav'><a href="">Category</a></li>
                    <li className='nav'><a href="">Company</a></li>
                </ul>
            </div>
            <div className="flex ">
                <RiShoppingCart2Line className='icon' />
                <RiUserLine className='icon' />
                <span className='w-[2px] h-[20px] bg-black mx-4'></span>
                <RiMenu2Fill className='icon' />
            </div>
        </nav>
    )
}

export default Navbar
