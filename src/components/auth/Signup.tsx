import React from "react"
import Footer from "../reuseable/Footer"
import Navbar from "./navbar"
const Signup = () => {
    return(
        <>
            <Navbar />
            <div className="signup py-5">
                <div className="container">
                    <div className="row justify-content-center mx-auto align-items-center text-center">
                        <div className="col-md-8">
                            <h1 className="mb-5">Sign up</h1>
                            <form>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <input type="text" className="form-control signup--input form-control-lg" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control signup--input form-control-lg" placeholder="Last name" aria-label="Last name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control signup--input form-control-lg" placeholder="First name" aria-label="First name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control signup--input form-control-lg" placeholder="Last name" aria-label="Last name" />
                                </div>
                                <div className="col-md-12">
                                    <textarea className="form-control signup--input form-control-lg" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                                </div>
                                <p>By Continuing, you agree the awaHealth <b style={{
                                    color: 'orange'
                                }}>terms</b> and <b style={{
                                    color: 'orange'
                                }}>conditions</b> <input type="checkbox" className="mt-1" name="check" id="" /></p>
                                <div className="col-md-12">
                                    <button className="signup--btn">Sign Up</button>
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
export default Signup