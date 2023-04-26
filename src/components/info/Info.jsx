import React, { Fragment } from 'react'
import Navbar from '../page/Navbar'
import Footer from '../page/Footer'

const data = {
    home : "Home",
    shop : "Shop",
    info : "Info",
    name : "Abies",
    price : "₱ 1,400.00",
    subprice : "₱ 1.320.00",
    sale : "32%",
    title : "Abies ballpoint pen smooth writing expensive",
    reviewText : "2,251 reviews ",
    addReviewText : "Add Your Review",
    btnText: "Add to cart",

}


const Info = () => {
    return (
        <>
            <Navbar />
            <Fragment>
                <div className="">
                    <div className="basis-1/2">

                    </div>

                    <div className="basis-1/2">

                    </div>
                </div>
            </Fragment>
            <Footer />
        </>
    )
}

export default Info
