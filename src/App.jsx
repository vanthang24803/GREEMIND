import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Loading from "./components/animation/Loading";
import Page404 from "./components/error/Page404";
import Main from "./components/page/Main";
import Login from "./components/login/Login";
import Forgot from "./components/login/Forgot";
import Shop from "./components/shop/Shop";
import Items from "./components/items/Items";
import CheckoutFrom from "./components/shop/CheckoutFrom";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/items" element={<Items />} />
            <Route path="/buy" element={<CheckoutFrom />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
