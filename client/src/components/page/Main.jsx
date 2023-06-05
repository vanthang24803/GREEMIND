import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Selling from "./Selling";
import About from "./About";
import Category from "./Category";
import Company from "./Company";
import Footer from "./Footer";
import NewNav from "../shop/NewNav";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
const Main = () => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);

  return (
    <Fragment>
      {isAuthenticated ? <NewNav /> : <Navbar />}
      <Home />
      <Selling />
      <About />
      <Category />
      <Company />
      <Footer />
    </Fragment>
  );
};

export default Main;
