import React from "react";
import ProfileForm from "../components/profile/profileForm";
import Footer from "../components/reuseable/Footer";
import Letters from "../components/reuseable/Letters";
import Navbar from "../components/reuseable/Navbar";

const Profile = () => {
    return(
        <>
            <Navbar />
            <ProfileForm />
            <Letters />
            <Footer />
        </>
    )
}
export default Profile;