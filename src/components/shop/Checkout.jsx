import React from "react";
import { Link } from "react-router-dom";
import { HiChevronLeft } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../state/slice/CheckoutSlice";
import { clear } from "../state/slice/CartSlice";
import CheckoutItems from "./CheckoutItems";
import { FaTrash } from "react-icons/fa";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);

  return (
    <div className="fixed left-0 top-0 z-30 h-screen w-full bg-transparentBlack ">
      <div className="primary h-full min-w-[15rem] overflow-y-auto sm:w-[40rem]">
        <div className="p-6">
          <div className="flex flex-col justify-between md:flex-row md:items-center">
            <div
              className="flex cursor-pointer items-center"
              onClick={() => dispatch(open())}
            >
              <HiChevronLeft className="flex items-center justify-center text-2xl " />
              <span className="mx-2 select-none font-rubik text-xl font-bold uppercase ">
                Continue Shopping
              </span>
            </div>
            <div className="font-semi my-2 font-rubik md:my-0">
              Shopping Bag ({amount})
            </div>
          </div>

          <div className="mt-8">
            {cartItems.length === 0 ? (
              <div className="flex h-[60vh] items-center justify-center font-rubik text-3xl uppercase text-gray-500">
                Your cart is empty
              </div>
            ) : (
              <>
                {cartItems.map((cartItem) => {
                  return (
                    <CheckoutItems key={cartItem.id} cartItem={cartItem} />
                  );
                })}
                <div className="mt-12 flex items-center justify-between">
                  <div className="flex">
                    <span className="mr-2 font-rubik text-lg">Total Cost:</span>
                    <p className="font-rubik text-lg font-medium">
                      ₱ {total.toFixed(2)}
                    </p>
                  </div>
                  <FaTrash
                    className="cursor-pointer text-2xl hover:scale-110"
                    onClick={() => dispatch(clear())}
                  />
                </div>
                <Link to="/buy">
                  <button className="my-8 h-[50px] w-full rounded-md bg-[#93E686] font-rubik text-lg font-bold text-white transition-all ease-in-out hover:scale-105 ">
                    Check Out
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
