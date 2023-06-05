import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import Cart from "../../assets/Cart.svg";
import { TfiSearch } from "react-icons/tfi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

import Logo from "../../assets/Logo.svg";

const Dasboard = () => {
  const name = "May";
  const email = "mail@example.com";
  const password = "***********";
  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const isOder = true;
  const [isToggle, setToggle] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleToggle = () => {
    setToggle(!isToggle);
  };

  return (
    <>
      <div className="h-[40px] w-full max-w-[1124px] bg-[#009a7b] lg:max-w-none  ">
        <h1 className="cursor-pointer pt-2 text-center font-domine text-base font-bold text-white ">
          Free Shipping +30 Day-Guarantee
        </h1>
      </div>

      <div className="lg:h-[20vh] w-full">
        <div className="boder-gray-300 flex items-center justify-between border-b-[1px] pb-4 hover:cursor-pointer">
          <img src={Logo} className="basis-1/8 mx-12 mt-12" />
          <div className="font mt-12 flex items-center font-domine ">
            <div className="mx-8 lg:flex items-center hidden">
              <FiMapPin className="mr-2 text-[1.5rem]" />
              <div className="">
                <p className="text-sm">Store Location</p>
                <p className="text-sm italic text-gray-500">My Plant Shop</p>
              </div>
            </div>
            <div className="mx-8 flex items-center">
              <TfiSearch className="mr-2 text-[1.5rem]" />
              <div className="">
                <p className="text-sm">Store Location</p>
                <p className="text-sm italic text-gray-500">My Plant Shop</p>
              </div>
            </div>
            <div className="mx-8">
              <p className="text-sm">Hello , {name}</p>
              <p className="hidden text-sm italic text-gray-500">My Account</p>
            </div>
            <div className="mx-4 flex ">
              <img src={Cart} className="mx-1" />
              <p className="text-sm">(0)</p>
            </div>
          </div>
        </div>

        <div className="hidden mx-[18%] lg:flex items-center justify-between pt-2 font-domine font-semibold transition-all ease-in-out text-[15px]">
          <p className="hover:italic hover:text-[#009a7b] ">Stores</p>
          <p className="hover:italic hover:text-[#009a7b] ">Plats</p>
          <p className="hover:italic hover:text-[#009a7b] ">Planters</p>
          <p className="hover:italic hover:text-[#009a7b] ">Plant Care</p>
          <p className="hover:italic hover:text-[#009a7b] ">Faux</p>
          <p className="hover:italic hover:text-[#009a7b] ">Home & Decor</p>
          <p className="hover:italic hover:text-[#009a7b] ">Flowers & Bouquets</p>
          <p className="hover:italic hover:text-[#009a7b] ">Gift Ideas</p>
          <p className="hover:italic hover:text-[#009a7b] ">Workshops</p>
        </div>
      </div>

      <div className="h-[40px] w-full max-w-[1024px] bg-[#e0f5e5] lg:max-w-none  ">
        <h1 className="cursor-pointer pt-2 text-center font-domine text-lg font-medium">
          🔔 Olive Trees are Back in Stock!
        </h1>
      </div>

      <div className="flex h-[45vh] w-full items-center bg-[#e8f8fa] lg:h-[60vh]">
        <div className="mx-8 md:basis-1/2 lg:basis-1/3">
          <p className="font-domine text-lg font-normal text-[#3a9681] ">
            Sill Insider
          </p>

          <h1 className="my-4 font-serif text-3xl font-thin   md:text-5xl lg:my-0 lg:text-7xl">
            Welcome back , {name}
          </h1>
        </div>
      </div>
      <div className="my-4 items-center justify-between border-b-[1px] border-gray-300 md:mx-8 md:flex lg:mx-12 ">
        <div className="my-2 cursor-pointer font-domine">
          <span className="mx-4" onClick={handleToggle}>
            Order History
          </span>
          <span onClick={handleToggle}>My Account</span>
        </div>
        <div className="my-2 cursor-pointer font-domine">
          <span className="mx-4 cursor-text italic">Not {name}?</span>
          <span onClick={logout}>Log Out</span>
        </div>
      </div>

      <>
        {isToggle ? (
          <>
            {edit ? (
              <div className="mx-4 md:mx-0">
                <div className="my-20 font-domine  md:mx-8 lg:mx-48">
                  <h1 className="text-6xl">My Account</h1>
                  <div className="my-8 flex h-[36vh] w-full flex-col justify-center border-2 border-gray-200 bg-[#f8f9f7] md:h-[28vh] md:w-[90%] lg:h-[42vh]">
                    <div className="mx-4 flex h-[60px] w-[90%] items-center border-2 border-gray-200 md:mx-8 lg:mx-14">
                      <p className="mx-8 text-lg">{email}</p>
                    </div>

                    <div className="mx-4 mt-8 flex h-[60px] w-[90%] items-center border-2 border-gray-200 md:mx-8 lg:mx-14">
                      <span className="mx-8 mt-2 text-lg">{password}</span>
                    </div>

                    <div className="mx-6 mt-8 flex items-center justify-between md:mx-8 lg:mx-14">
                      <button className="bgfont-domine h-[50px] w-[150px] bg-[#3a9681] text-white hover:bg-[#40a58d]">
                        Rest Password
                      </button>

                      <button
                        className="h-[50px] w-[150px] text-lg font-medium text-red-500"
                        onClick={handleEdit}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mx-4 md:mx-0">
                <div className="my-20 font-domine  md:mx-8 lg:mx-48">
                  <h1 className="text-6xl">My Account</h1>
                  <div className="my-8 flex h-[100px] w-full items-center justify-between bg-gray-50 md:w-[80%]">
                    <div className="mx-8">
                      <p className="my-2">{email}</p>
                      <p>{password}</p>
                    </div>

                    <button
                      className="mx-8 text-lg text-[#317d6b]"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {isOder ? (
              <div className="mx-4 md:mx-0">
                <div className="my-20 font-domine  md:mx-8 lg:mx-48">
                  <h1 className="text-6xl">Order History</h1>
                  <p className="my-8">You haven't placed any orders yet.</p>
                  <Link to="/shop">
                    <button className="font-dominetext-sm  h-[40px] w-[160px]   bg-[#3a9681] text-white transition-all ease-in-out hover:bg-[#347e6d]">
                      Back to Shop
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        )}
      </>

      <div className="bg-[#F9F8F7]">
        <div className="flex">
          <img
            src="https://cdn.sanity.io/images/y346iw48/production/439f7681c104d6d291bb26f4627a7c9326015573-338x338.png?auto=format"
            className="m-8 h-[100px] w-[100px] md:h-[200px] md:w-[200px]"
          />
          <div className="my-8">
            <h1 className="font-serif md:text-5xl">
              Visit Us In A Store Near You
            </h1>
            <p className="my-2 font-domine text-sm md:my-4 md:text-base">
              Our stores around the US are open for plant shopping, repotting,
              curbside pickup, in-person workshops, and more.
            </p>
            <Link to="/shop">
              <button className="flex h-[60px] w-full items-center font-serif text-lg font-semibold text-black hover:italic hover:text-[#0C9E81] md:w-[320px]">
                Find Your Loacl Store{" "}
                <HiArrowLongRight className="mx-4 transition-all ease-in-out hover:translate-x-2" />
              </button>
            </Link>
          </div>
        </div>

        <div className="my-8 flex flex-col border-t-2 border-gray-300 md:mx-12 md:flex-row">
          <div className="mx-2 my-10  flex basis-3/5 justify-between md:mx-4 lg:items-center">
            <div className="basis-1/2 text-start font-domine lg:basis-1/4">
              <h1 className="text-lg font-bold">Customer Service</h1>
              <p className="my-2 cursor-pointer hover:text-[#3a9681]">FAQ</p>
              <p className="my-2 cursor-pointer hover:text-[#3a9681]">
                Shipping & Handling
              </p>
              <p className="my-2 cursor-pointer hover:text-[#3a9681]">
                30-Day Guarantee
              </p>
              <p className="cursor-pointer hover:text-[#3a9681]">Contact Us</p>
            </div>

            <div className="basis-1/2 text-start font-domine lg:basis-1/4">
              <h1 className="text-lg font-bold">Resources</h1>
              <p className="my-2 cursor-pointer hover:text-[#3a9681] ">
                Find Your Plant 🌱
              </p>
              <p className="my-2 cursor-pointer hover:text-[#3a9681]">
                Flant Care Library
              </p>
              <p className="my-2 cursor-pointer hover:text-[#3a9681]">Blog</p>
              <p className="cursor-pointer hover:text-[#3a9681]">
                Free Online Course
              </p>
            </div>

            <div className="basis-1/2 text-start font-domine lg:basis-1/4">
              <h1 className="text-lg font-bold">My Sill</h1>
              <p className="my-2 cursor-pointer hover:text-[#3a9681]">
                My Account
              </p>
              <p className="my-2 cursor-pointer hover:text-[#3a9681]">
                Workshops
              </p>
              <p className="my-2 cursor-pointer hover:text-[#3a9681]">
                Rewards Program
              </p>
              <p className="cursor-pointer hover:text-[#3a9681]">
                Track My Oder
              </p>
            </div>

            <div className="basis-1/2 text-start font-domine lg:basis-1/4">
              <h1 className="text-lg font-bold">Explore</h1>
              <p className="my-2 cursor-pointer hover:text-[#3a9681]">
                Our Story
              </p>
              <p className="my-2 cursor-pointer hover:text-[#3a9681]">
                Locations
              </p>
              <p className="my-2 cursor-pointer hover:text-[#3a9681]">
                Careers
              </p>
              <p className="cursor-pointer hover:text-[#3a9681]">
                Corporate Gifting
              </p>
            </div>
          </div>
          <form className="mx-4 my-8 basis-2/5 font-domine md:mx-0">
            <h1 className="font-serif text-4xl">Get the Dirt.</h1>
            <p className="my-2">
              {" "}
              Get plant care tips, exclusive offers, & event invites straight to
              your inbox. No spam, ever.
            </p>

            <input
              type="text"
              className="my-2 h-[60px] w-full px-6"
              placeholder="Enter your email here..."
            />

            <button
              type="submit"
              className="my-4 h-[60px] w-full bg-[#3a9681] text-lg text-white hover:bg-[#44ab93]"
            >
              Subsrible
            </button>
            <div className="my-4 flex items-center text-[22px]">
              <FaFacebookF className="mr-4 cursor-pointer hover:text-[#3a9681]" />
              <FaTwitter className="mr-4 cursor-pointer hover:text-[#3a9681]" />
              <FaInstagram className="mr-4 cursor-pointer hover:text-[#3a9681]" />
              <FaPinterest className="mr-4 cursor-pointer hover:text-[#3a9681]" />
              <FaYoutube className="mr-4 cursor-pointer hover:text-[#3a9681]" />
              <FaTiktok className="mr-4 cursor-pointer hover:text-[#3a9681]" />
              <FaLinkedinIn className="mr-4 cursor-pointer hover:text-[#3a9681]" />
            </div>
          </form>
        </div>

        <h1 className="mx-12 mt-8 text-3xl  font-bold">GREENMIND</h1>
        <div className="mx-12 mb-8 border-t-2 border-black">
          <p className="my-4 font-domine">Copyright 2023 - GREENMIND, Inc </p>
        </div>
      </div>
    </>
  );
};

export default Dasboard;
