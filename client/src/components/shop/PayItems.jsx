import React from "react";

const PayItems = ({ cartItem }) => {
  const { id, price, amount, name, image } = cartItem;
  return (
    <div className="flex p-6" key={id}>
      <img src={image} alt="" className="h-32 w-32" />
      <div className="mx-4 my-2">
        <p className="text-xl font-semibold font-domine">{name}</p>
        <p className="my-1 font-rubik text-base text-gray-400">
          $ {price.toFixed(2)}
        </p>
        <p className="font-rubik text-base text-gray-400">x{amount}</p>
      </div>
    </div>
  );
};

export default PayItems;
