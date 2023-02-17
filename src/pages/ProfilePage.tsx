import React from "react";
import ProfileForm from "../components/profile/profileForm";
import BarMenu from "../components/reuseable/Bar";
import Footer from "../components/reuseable/Footer";
import Letters from "../components/reuseable/Letters";
import Navbar from "../components/reuseable/Navbar";

const Profile = () => {
    return(
        <>
            <BarMenu />
            <ProfileForm />
            <Letters />
            <Footer />
        </>
    )
}
export default Profile;