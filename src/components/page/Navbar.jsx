import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/Logo.svg";
import {
  RiShoppingCart2Line,
  RiUserLine,
  RiMenu2Fill,
  RiCloseLine,
} from "react-icons/ri";

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
              <a>Blogs</a>
            </li>
          </Link>
          <Link to="/about">
            <li className="nav">
              <a>Company</a>
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex ">
        <Link to="/shop" className="text-black">
          <RiShoppingCart2Line className="md:icon hidden md:block" />
        </Link>
        <Link to="/login" className="text-black">
          <RiUserLine className="icon hidden md:block" />
        </Link>
        <span className="mx-4 hidden h-[20px] w-[2px] bg-black md:block"></span>
        <button
          onClick={handleOpen}
          className="transition-all duration-700 ease-in-out"
        >
          {open == true ? (
            <RiCloseLine className="ml-[11rem] text-[25px] transition ease-in-out hover:scale-125 hover:cursor-pointer md:ml-0 lg:text-[20px] " />
          ) : (
            <RiMenu2Fill className="icon z-10" />
          )}
        </button>
      </div>

      {open ? (
        <div className="md:hidden">
          <ul className="h-100vh absolute left-0 top-20 w-[100%] bg-[#ffffffdd]  shadow-lg transition-all lg:flex">
            <li className="nav-mb">
              <Link to="/">
                <a className="text-lg hover:font-semibold">Home</a>
              </Link>
            </li>
            <li className="nav-mb">
              <Link to="/shop">
                <a href="" className="text-lg hover:font-semibold ">
                  Products
                </a>
              </Link>
            </li>
            <li className="nav-mb">
              <Link to="/contact">
                <a href="#contact" className="text-lg hover:font-semibold">
                  Contact
                </a>
              </Link>
            </li>
            <li className="nav-mb">
              <Link to="/items">
                <a href="" className="text-lg hover:font-semibold">
                  Category
                </a>
              </Link>
            </li>
            <li className="nav-mb">
              <Link to="/about">
                <a className="text-lg hover:font-semibold">Company</a>
              </Link>
            </li>
            <li className="nav-mb">
              <Link to="/login">
                <a className="text-lg hover:font-semibold">Sign up / Login</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
