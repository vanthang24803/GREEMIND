import React from "react";
import { HiX } from "react-icons/hi";
import { remove, increase, decrease } from "../state/slice/CartSlice";
import { useDispatch } from "react-redux";
import {
  RiAddLine,
  RiSubtractLine,
} from "react-icons/ri";

const CheckoutItems = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { id, price, amount, name, image } = cartItem;

  return (
    <div
      className="boder-glass mb-6 flex items-center justify-between border-2 border-solid  p-6"
      key={id}
    >
      <div className="flex items-center gap-0 ">
        <img src={image} alt="" className="h-20 w-20 object-cover" />
      </div>
      <div className="flex max-w-[6.8rem] flex-col items-center">
        <p className="flex text-center font-rubik text-lg font-semibold">{name}</p>
        <div className="mt-2 flex items-center  gap-4 ">
          <button onClick={() => dispatch(decrease(cartItem))}>
            <RiSubtractLine className="text-lg transition-all ease-in-out hover:scale-150 " />
          </button>
          <p className="text-center text-xl font-medium">{amount}</p>
          <button onClick={() => dispatch(increase(cartItem))}>
            <RiAddLine className="text-lg transition-all ease-in-out hover:scale-150 " />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <HiX
          className="cursor-pointer text-xl transition-all ease-in-out hover:scale-150"
          onClick={() => dispatch(remove(cartItem))}
        />
        <p className="font-rubik text-base font-bold">
          ₱ {(price * amount).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CheckoutItems;
