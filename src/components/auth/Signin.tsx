import React from "react"
import { Link } from "react-router-dom"
import Footer from "../reuseable/Footer"
import Navbar from "./navbar"
const SignIn = () => {
    return(
        <>
            <Navbar />
            <div className="signup py-5">
                <div className="container">
                    <div className="row justify-content-center mx-auto align-items-center text-center">
                        <div className="col-md-5">
                            <h1 className="mb-5">Welcome back!</h1>
                                <p>Log into  your Account</p>
                            <form>
                            <div className="row g-4">
                                <div className="col-md-12">
                                    <input type="text" className="form-control signup--input form-control-lg" placeholder="Email" aria-label="First name" />
                                </div>
                                <div className="col-md-12">
                                    <input type="text" className="form-control signup--input form-control-lg" placeholder="Password" aria-label="Last name" />
                                </div>
                                <div className="col-md-6"></div>
                                <div className="col-md-6 text-end">
                                    <Link to="/auth/reset-password" style={{
                                        color: 'orange'
                                    }}>Forgot Password?</Link>
                                </div>
                                <div className="col-md-12">
                                    <button className="signup--btn">
                                        <Link to="/dashboard">Sign In</Link>
                                    </button>
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