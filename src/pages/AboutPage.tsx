import React from "react";
import Hero from "../components/about/hero";
import Mission from "../components/about/mission";
import Teams from "../components/about/teams";
import BarMenu from "../components/reuseable/Bar";
import Footer from "../components/reuseable/Footer";
import Letters from "../components/reuseable/Letters";
// import Navbar from "../components/reuseable/Navbar";

const About = () => {
    return(
        <>
            <BarMenu />
            <Hero />
            <Mission />
            <Teams />
            <Letters />
            <Footer />
        </>
    )
}
export default About;