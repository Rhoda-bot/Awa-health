import React from "react";
import Footer from "../components/reuseable/Footer";
import Letters from "../components/reuseable/Letters";
import Navbar from "../components/reuseable/Navbar";
import VolunteersForm from "../components/volunteers/volunteersForm";

const Volunteers = () => {
    return(
        <>
            <Navbar />
            <VolunteersForm />
            <Letters />
            <Footer />
        </>
    )
}
export default Volunteers;