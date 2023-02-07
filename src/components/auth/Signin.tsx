import React from "react"
import Footer from "../reuseable/Footer"
import Navbar from "./navbar"
const SignIn = () => {
    return(
        <>
            <Navbar />
            <div className="signup py-5">
                <div className="container">
                    <div className="row justify-content-center mx-auto align-items-center text-center">
                        <div className="col-md-8">
                            <h1 className="mb-5">Welcome back!</h1>
                                <p>Log into  your Account</p>
                            <form>
                            <div className="row g-4">
                                <div className="col-md-12">
                                    <input type="text" className="form-control signup--input form-control-lg" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col-md-12">
                                    <input type="text" className="form-control signup--input form-control-lg" placeholder="Last name" aria-label="Last name" />
                                </div>
                                <div className="col-md-6"></div>
                                <div className="col-md-6 text-end">
                                    <p style={{
                                        color: 'orange'
                                    }}>Forgot Password?</p>
                                </div>
                                <div className="col-md-12">
                                    <button className="signup--btn">Sign In</button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default SignIn