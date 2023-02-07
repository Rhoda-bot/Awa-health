import React from "react";
import Hero from "../components/about/hero";
import Mission from "../components/about/mission";
import Footer from "../components/reuseable/Footer";
import Letters from "../components/reuseable/Letters";
import Navbar from "../components/reuseable/Navbar";

const About = () => {
    return(
        <>
            <Navbar/>
            <Hero />
            <Mission />
            <Letters />
            <Footer />
        </>
    )
}
export default About;