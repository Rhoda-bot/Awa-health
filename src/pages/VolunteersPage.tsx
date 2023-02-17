import React from "react";
import BarMenu from "../components/reuseable/Bar";
import Footer from "../components/reuseable/Footer";
import Letters from "../components/reuseable/Letters";
import VolunteersForm from "../components/volunteers/volunteersForm";

const Volunteers = () => {
    return(
        <>
            <BarMenu />
            <VolunteersForm />
            <Letters />
            <Footer />
        </>
    )
}
export default Volunteers;