import React from "react";
import Donations from "../components/donate/danations";
import Footer from "../components/reuseable/Footer";
import Letters from "../components/reuseable/Letters";
import Navbar from "../components/reuseable/Navbar";

const Donate = () => {
    return(
        <>
            <Navbar />
            <Donations />
            <Letters />
            <Footer />
        </>
    )
}
export default Donate;