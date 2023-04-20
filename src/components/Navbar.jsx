import React from 'react'
import Logo from "../assets/Logo.svg";
import { RiShoppingCart2Line , RiUserLine , RiMenu2Fill} from "react-icons/ri";
const Navbar = () => {
    return (
        <nav className='flex p-10 justify-between'>
            <div className="">
                <a href="/"><img src={Logo} alt="" /></a>
            </div>
            <div className="mx-20">
                <ul className="flex">
                    <li className='mx-4'><a href="#">Home</a></li>
                    <li className='mx-4'><a href="#products">Products</a></li>
                    <li className='mx-4'><a href="#contact">Contact</a></li>
                    <li className='mx-4'><a href="#contact">Contact</a></li>
                    <li className='mx-4'><a href="#company">Company</a></li>
                </ul>
            </div>
            <div className="flex ">
                <RiShoppingCart2Line  className='icon'/>
                <RiUserLine  className='icon'/>
                <span className='w-[2px] h-[20px] bg-black mx-4'></span>
                <RiMenu2Fill className='icon'/>
            </div>
        </nav>
    )
}

export default Navbar
