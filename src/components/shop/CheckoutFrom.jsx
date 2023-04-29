import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "/src/components/page/Navbar"
import Footer from "../page/Footer";
import { useSelector } from "react-redux";
import Checkout from "./Checkout";
import PayItems from "./PayItems";
import {
  RiArrowRightSLine,
} from "react-icons/ri";
const CheckoutFrom = () => {
  const { cartItems, total } = useSelector((state) => state.cart);

  return (
    <>
      <Navbar />
      <div className="flex flex-col px-12 py-4 md:flex-row">
        <div className="w-full basis-1/2">
        <div className="md:mx-[2rem] my-4 flex lg:mx-[5.75rem]">
          <Link to="/">
            <p className="flex text-black">
             Home
              <RiArrowRightSLine className="mx-2 my-1" />{" "}
            </p>
          </Link>
          <Link to="/shop">
            <p className="flex text-black">
              Shop
              <RiArrowRightSLine className="mx-2 my-1" />
            </p>
          </Link>
          <p className="flex">
            Check out
          </p>
        </div>
          <div className="w-full  bg-gray-50 shadow-xl lg:mx-20 lg:w-5/6">
            <div className="border-b-[1px] border-gray-400 p-4 md:p-8">
              <h1 className="font-rubik text-4xl font-thin text-black">
                Shipping Address
              </h1>
              <form className="my-8">
                <span className="font-rubik font-medium">Email Address</span>
                <input
                  type="text"
                  className="mb-8 mt-2 h-[40px] w-full rounded border-b-2 border-gray-400"
                />
                <span className="font-rubik font-medium">First Name</span>
                <input
                  type="text"
                  className="mb-8 mt-2 h-[40px] w-full rounded border-b-2 border-gray-400"
                />
                <span className="font-rubik font-medium">Last Name</span>
                <input
                  type="text"
                  className="mb-8 mt-2 h-[40px] w-full rounded border-b-2 border-gray-400"
                />
                <span className="font-rubik font-medium">Company Name</span>
                <input
                  type="text"
                  className="mb-8 mt-2 h-[40px] w-full rounded border-b-2 border-gray-400"
                />
                <span className="font-rubik font-medium">Street Address</span>
                <input
                  type="text"
                  className="mb-8 mt-2 h-[40px] w-full rounded border-b-2 border-gray-400"
                />
                <span className="font-rubik font-medium">City</span>
                <input
                  type="text"
                  className="mb-8 mt-2 h-[40px] w-full rounded border-b-2 border-gray-400"
                />
                <span className="font-rubik font-medium">State/Province</span>
                <input
                  type="number"
                  className="mb-8 mt-2 h-[40px] w-full rounded border-b-2 border-gray-400"
                />
                <span className="font-rubik font-medium">
                  Zip / Postal Code
                </span>
                <input
                  type="number"
                  className="mb-8 mt-2 h-[40px] w-full rounded border-b-2 border-gray-400"
                />
                <span className="font-rubik font-medium">Phone Number</span>
                <input
                  type="number"
                  className="mb-8 mt-2 h-[40px] w-full rounded border-b-2 border-gray-400"
                />
                <label for="country" className="font-rubik font-medium">
                  Country
                </label>
                <select
                  name="country"
                  id="country"
                  className="mb-8 mt-2 h-[40px] w-full rounded border-b-2 border-gray-400 px-4"
                >
                  <option value="1">Germany</option>
                  <option value="2">UK</option>
                  <option value="3">Poland</option>
                  <option value="4" selected="selected">
                    USA
                  </option>
                  <option value="5">Others</option>
                </select>

                <div className="mb-8 mt-2 flex flex-col">
                  <span className="font-rubik font-medium">
                    Order Notes (Optional)
                  </span>
                  <textarea
                    cols="30"
                    rows="10"
                    className="ounded mt-2 border-b-2 border-gray-400"
                  />
                </div>
              </form>

              <Link to="/login" className="">
                <button className="font-rubik text-sm font-medium text-black ">
                  Create An Account?
                </button>
              </Link>
            </div>
            <div className="m-8">
              <h1 className="font-rubik text-4xl font-bold text-black">
                Shipping Methods
              </h1>
              <form className="mt-8 flex pb-10">
                <input type="radio" />
                <p className="mx-4 text-sm">$5.00 Flate Rate</p>
              </form>
              <button className="primary mb-14 h-[50px] w-full rounded-3xl font-medium hover:bg-gray-600 hover:text-white md:mx-12 md:w-[55%] lg:mx-24">
                Place Order
              </button>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="mt-14 w-full md:mx-4 lg:w-3/4">
            <div className="border-gray border-t-2">
              <p className="my-4 text-center font-rubik text-5xl font-bold">
                Order Summary
              </p>

              <div className="flex justify-between">
                <div className="">
                  <p className="my-2 text-lg font-medium text-gray-500">
                    Subtotal
                  </p>
                  <p className="my-2 text-lg font-medium text-gray-500">
                    Discount
                  </p>
                  <p className="my-2 text-lg font-medium text-gray-500">
                    Shipping: Flat
                  </p>
                </div>
                <div className="text-end">
                  <p className="my-2 font-rubik text-lg font-bold">
                    ₱ {total.toFixed(2)}
                  </p>
                  <p className="my-2 font-rubik text-lg font-bold">₱ -10.00</p>
                  <p className="my-2 font-rubik text-lg font-bold">₱ 10.00</p>
                </div>
              </div>
              <div className="my-6 flex items-center justify-between border-b-2 border-black pb-8">
                <p className="font-rubik text-base font-bold">Total</p>
                <p className="font-rubik text-2xl font-bold lg:text-5xl">
                  ₱ {total.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            {cartItems.map((cartItem) => {
              return <PayItems key={cartItem.id} cartItem={cartItem} />;
            })}
          </div>
          <Link to="/shop">
            <button className="primary my-8 h-[50px] w-full rounded-3xl font-rubik font-bold text-black transition-all ease-in-out hover:bg-gray-400 hover:text-white lg:w-1/3">
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutFrom;
