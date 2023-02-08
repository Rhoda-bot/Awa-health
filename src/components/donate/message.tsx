import React from "react";
import Footer from "../reuseable/Footer";
import Letters from "../reuseable/Letters";
import Navbar from "../reuseable/Navbar";

const DonateMsg = () => {
    return (
        <>
            <Navbar />
            <div className="thanks">
                <div className="container">
                    <div className="row align-items-center justify-content-center mx-auto">
                        <h1>Thank You for Donating</h1>
                            <img src="/assets/vec2.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
            <Letters />
            <Footer />
        </>
    )
}
export default DonateMsg