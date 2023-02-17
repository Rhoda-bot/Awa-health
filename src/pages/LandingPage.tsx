import React from "react";
import Banner from "../components/reuseable/Banner";
import BarMenu from "../components/reuseable/Bar";
import Campaigns from "../components/reuseable/Campaigns";
import Footer from "../components/reuseable/Footer";
import Letters from "../components/reuseable/Letters";
import Movement from "../components/reuseable/Movement";

const LandingPage = () => {
    return(
        <>
        <BarMenu />
        <Banner />
        <Movement />
        <Campaigns />
        <Letters />
        <Footer />
        </>
    )
}
export default LandingPage;