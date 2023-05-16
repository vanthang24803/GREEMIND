import React, { useEffect } from "react";
import NewNav from "../shop/NewNav";
import Footer from "../page/Footer";
import Checkout from "../shop/Checkout";
import { useSelector, useDispatch } from "react-redux";
import { total } from "../state/slice/CartSlice";
import GiftContainer from "./GiftContainer";

const Gift = () => {
  const { isOpen } = useSelector((state) => state.checkout);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);
  return (
    <>
      <NewNav />
      <GiftContainer />
      {isOpen && <Checkout />}
      <Footer />
    </>
  );
};

export default Gift;
