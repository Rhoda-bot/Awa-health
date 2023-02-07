import React from "react";
import Footer from "../reuseable/Footer";
import Navbar from "./navbar";

const Success = () => {
   <>
    <Navbar />
     <div className="success">
        <div className="container">
            <div className="row justify-content-center text-center">
                <h1>A link has been sent to your mail</h1>
                    <p>if you didnt receive mail click on</p>
            </div>
            <div className="row py-5">
                <button type="button" className="signup--btn">Resend Link</button>
            </div>
        </div>
    </div>
    <Footer />
   </>
}
export default Success