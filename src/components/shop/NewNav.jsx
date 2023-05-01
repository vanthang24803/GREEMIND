import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/Logo.svg";
import { RiShoppingCart2Line, RiUserLine, RiMenu2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { open } from "/src/components/state/slice/CheckoutSlice"

const NewNav = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav className="sticky top-0 z-10 flex max-w-screen-2xl justify-between p-10 ">
      <div className="">
        <a href="/">
          <img src={Logo} alt="" className="h-auto w-full" />
        </a>
      </div>

      <div className="hidden lg:mx-20 lg:block">
        <ul className="lg:flex">
          <Link to="/">
            <li className="nav">
              <a href="/">Home</a>
            </li>
          </Link>
          <Link to="/shop">
            <li className="nav">
              <a>Products</a>
            </li>
          </Link>
          <Link to="/contact">
            <li className="nav">
              <a>Contact</a>
            </li>
          </Link>
          <Link to="/blog">
            <li className="nav">
              <a>WorkShops</a>
            </li>
          </Link>
          <Link to="/about">
            <li className="nav">
              <a>About us</a>
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex ">
        <div className="text-black" onClick={() => dispatch(open())}>
          <RiShoppingCart2Line className="icon" />
          <div className="primary absolute right-[8%] top-[30%] z-10 h-4 w-4 rounded-full text-center  text-[12px] md:right-[25%] lg:right-[12.5%]">
            {amount}
          </div>
        </div>
        <Link to="/login" className="text-black">
          <RiUserLine className="icon hidden md:block" />
        </Link>
        <span className="mx-4 hidden h-[20px] w-[2px] bg-black md:block"></span>
        <button className="transition-all duration-700 ease-in-out">
          <RiMenu2Fill className="md:icon hidden md:block " />
        </button>
      </div>
    </nav>
  );
};

export default NewNav;
