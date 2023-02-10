import React from "react";
import Footer from "../components/reuseable/Footer";
import Letters from "../components/reuseable/Letters";
import Navbar from "../components/reuseable/Navbar";

const Contact = () => {
    return(
        <>
        <Navbar />
        <div className="contact py-5">
            <div className="container">
                <div className="row justify-content-center mx-auto">
                    <div className="col-md-10">
                        <h1>Contact Us</h1>
                            <p>We are happy to help you at anytime, or let us know
                            how we can help and  will get righy back
                            </p>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <span>Name</span>
                                        <input type="text" name="name" id="" className="form-control form-control-lg" />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <span>Email</span>
                                        <input type="text" name="name" id="" className="form-control form-control-lg" />
                                    </div>
                                   
                                    <div className="col-md-12 mb-5">
                                        <span>Drop Enquity</span>
                                        <textarea name="" id="" className="form-control form-control-lg"></textarea>
                                    </div>
                                    <div className="col-md-10"></div>
                                    <div className="col-md-2">
                                        <button className="searchdetails--btn px-4 py-3 rounded">submit</button>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
        <Letters />
        <Footer />
        </>
    )
}
export default Contact;