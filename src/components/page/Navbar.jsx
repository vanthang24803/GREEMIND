import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "/src/assets/Logo.svg";
import {
  RiShoppingCart2Line,
  RiUserLine,
  RiMenu2Fill,
  RiCloseLine,
} from "react-icons/ri";

import { FiMapPin } from "react-icons/fi";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const [show, setShow] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-10 flex max-w-screen-2xl justify-between p-10 ">
      <div className="">
        <a href="/">
          <img src={Logo} alt="" className="h-auto w-full" />
        </a>
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
              <p>About Us</p>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="flex ">
        <NavLink to="/shop" className="text-black">
          <RiShoppingCart2Line className="md:icon hidden md:block" />
        </NavLink>
        <NavLink to="/login" className="text-black">
          <RiUserLine className="icon hidden md:block" />
        </NavLink>
        <span className="mx-4 hidden h-[20px] w-[2px] bg-black md:block"></span>
        <NavLink to="/map" className="text-black">
          <FiMapPin className="icon hidden md:block" />
        </NavLink>
        <button
          onClick={handleOpen}
          className="transition-all duration-700 ease-in-out"
        >
          {open == true ? (
            <RiCloseLine className="ml-[11rem] block text-[25px] transition ease-in-out hover:scale-125 hover:cursor-pointer md:ml-0 md:hidden lg:text-[20px] " />
          ) : (
            <RiMenu2Fill className="icon z-10 block md:hidden" />
          )}
        </button>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="h-100vh absolute left-0 top-20 w-[100%] bg-[#ffffffdd]  shadow-lg transition-all lg:flex">
            <div className="nav-mb">
              <NavLink to="/">
                <p className="text-lg hover:font-semibold">Home</p>
              </NavLink>
            </div>
            <div className="nav-mb">
              <NavLink to="/shop">
                <p href="" className="text-lg hover:font-semibold ">
                  Products
                </p>
              </NavLink>
            </div>
            <div className="nav-mb">
              <NavLink to="/contact">
                <p href="#contact" className="text-lg hover:font-semibold">
                  Contact
                </p>
              </NavLink>
            </div>
            <div className="nav-mb">
              <NavLink to="/workshops">
                <p href="" className="text-lg hover:font-semibold">
                  WorkShops
                </p>
              </NavLink>
            </div>
            <div className="nav-mb">
              <NavLink to="/about">
                <p className="text-lg hover:font-semibold">About us</p>
              </NavLink>
            </div>
            <div className="nav-mb">
              <NavLink to="/login">
                <p className="text-lg hover:font-semibold">Sign up / Login</p>
              </NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
