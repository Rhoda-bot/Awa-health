import React from "react"
import Footer from "../reuseable/Footer"
import Navbar from "./navbar"
const ResetPassword = () => {
    return(
        <>
            <Navbar />
            <div className="signup py-5">
                <div className="container">
                    <div className="row justify-content-center mx-auto align-items-center text-center">
                        <div className="col-md-8">
                            <h1 className="mb-5">Reset password</h1>
    
                            <form>
                            <div className="row g-4">
                                <div className="col-md-12">
                                    <input type="text" className="form-control signup--input form-control-lg" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col-md-12 mt-5">
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
export default ResetPassword