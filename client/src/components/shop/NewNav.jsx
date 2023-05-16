import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/src/assets/Logo.svg";
import { RiShoppingCart2Line, RiUserLine } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { open } from "/src/components/state/slice/CheckoutSlice";

const NewNav = () => {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.cart);

  return (
    <nav className="sticky top-0 z-10 flex max-w-screen-2xl justify-between p-10 ">
      <div className="">
        <NavLink to="/">
          <p>
            <img src={Logo} alt="" className="h-auto w-full" />
          </p>
        </NavLink>
      </div>

      <div className="hidden lg:mx-20 lg:block">
        <div className="lg:flex">
          <NavLink to="/">
            <div className="nav">
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/shop">
            <div className="nav">
              <p>Products</p>
            </div>
          </NavLink>
          <NavLink to="/contact">
            <div className="nav">
              <p>Contact</p>
            </div>
          </NavLink>
          <NavLink to="/workshops">
            <div className="nav">
              <p>WorkShops</p>
            </div>
          </NavLink>
          <NavLink to="/about">
            <div className="nav">
              <p>About us</p>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="flex ">
        <div className="text-black" onClick={() => dispatch(open())}>
          <RiShoppingCart2Line className="icon" />
          <div className="primary absolute right-[8%] top-[30%] z-10 h-4 w-4 rounded-full text-center  text-[12px] md:right-[25%] lg:right-[12%]">
            {amount}
          </div>
        </div>
        <NavLink to="/login" className="text-black">
          <RiUserLine className="icon hidden md:block" />
        </NavLink>
        <span className="mx-4 hidden h-[20px] w-[2px] bg-black md:block"></span>
        <NavLink to="/map" className="text-black">
          <FiMapPin className="icon hidden md:block" />
        </NavLink>
      </div>
    </nav>
  );
};

export default NewNav;
