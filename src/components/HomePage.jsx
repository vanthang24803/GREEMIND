import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Selling from './Selling'
import About from './About'
import Category from './Category'
import Company from './Company'
import Footer from './Footer'
const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Home />
            <Selling />
            <About />
            <Category />
            <Company />
            <Footer />
        </Fragment>
    )
}

export default HomePage
