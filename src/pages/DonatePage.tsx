import React from "react";
import Donations from "../components/donate/danations";
import BarMenu from "../components/reuseable/Bar";
import Footer from "../components/reuseable/Footer";
import Letters from "../components/reuseable/Letters";

const Donate = () => {
    return(
        <>
            <BarMenu />
            <Donations />
            <Letters />
            <Footer />
        </>
    )
}
export default Donate;