import React, { useEffect } from "react";
import Footer from "../page/Footer";
import NewNav from "./NewNav";
import Checkout from "./Checkout";
import { useSelector, useDispatch } from "react-redux";
import ShopContainer from "./ShopContainer";
import { total } from "../state/slice/CartSlice";

const Shop = () => {
  const { isOpen } = useSelector((state) => state.checkout);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);
  return (
    <>
      <NewNav />
      <ShopContainer />
      {isOpen && <Checkout />}
      <Footer />
    </>
  );
};

export default Shop;
