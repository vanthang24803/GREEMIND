import React, { useState, useEffect } from "react";
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
import Contact from "./components/contact/Contact";
import AboutPage from "./components/about/AboutPage";
import Gift from "./components/gift/Gift";
import WorkShops from "./components/work/WorkShops";
import Map from "./components/map/Map";
import Store from "./components/map/Store";
import AuthContextProvider from "./contexts/AuthContext";
import Dasboard from "./components/login/Dasboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";

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
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot" element={<Forgot />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/items" element={<Items />} />
              <Route path="/buy" element={<CheckoutFrom />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gift" element={<Gift />} />
              <Route path="/workshops" element={<WorkShops />} />
              <Route path="/map" element={<Map />} />
              <Route path="/store" element={<Store />} />
              <Route path="*" element={<Page404 />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/dash" element={<Dasboard />} exact />
              </Route>
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      )}
    </div>
  );
}

export default App;
