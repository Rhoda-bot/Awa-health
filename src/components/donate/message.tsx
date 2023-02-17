import React from "react";
import Footer from "../reuseable/Footer";
import Letters from "../reuseable/Letters";
import Navbar from "../reuseable/Navbar";

const DonateMsg = () => {
    return (
        <>
            <Navbar />
            <div className="thanks py-5">
                <div className="container py-5">
                    <div className="row align-items-center justify-content-center mx-auto text-center">
                        <div className="col-md-8">
                            <h1>Thank You for Donating</h1>
                            <img src="/assets/vec7.png" width={50} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Letters />
            <Footer />
        </>
    )
}
export default DonateMsg