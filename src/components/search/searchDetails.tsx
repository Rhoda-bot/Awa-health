import React from "react";
import Footer from "../reuseable/Footer";
import Navbar from "../reuseable/Navbar";

const SearchDetails = () => {
    return(
        <>
            <Navbar />
            <div className="searchdetails">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <p>Lorem ipsum dolor sit amet consectetur.Odio ultrices odio maece nas purus.</p>
                            <img src="/assets/patient.png" alt="" className="img-fluid h-50"/>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-2 shadow-sm h-100">
                                <img src="/assets/p6.png" className="card-img-top" alt="" />
                                    <div className="row">
                                        <div className="col-md-6 mt-2">
                                            <button type="button">Remind me</button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h4>Save A soul Today</h4>
                                        <p>Lorem ipsum dolor sit amet
                                        consectetur.Odio ultrices odio maece
                                        nas purus.
                                        </p>
                                        <button>Donate</button>
                                    </div>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <button className="signup--btn">Remind me</button>
                        </div>
                        <div className="row py-5">
                            <p>Lorem ipsum dolor sit amet consectetur. Odio ultrices odio maecenas purus.Arcu sagittis in eleifend in blandit pretium dapibus ipsum.
                             Quam id nullam quisque nibh suscipit. Vitae vestibulum ac in amet. Sem lobortis id netus.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur. Odio ultrices odio maecenas purus.Arcu sagittis in eleifend in blandit pretium dapibus ipsum.
                             Quam id nullam quisque nibh suscipit. Vitae vestibulum ac in amet. Sem lobortis id netus.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur. Odio ultrices odio maecenas purus.Arcu sagittis in eleifend in blandit pretium dapibus ipsum.
                             Quam id nullam quisque nibh suscipit. Vitae vestibulum ac in amet. Sem lobortis id netus.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur. Odio ultrices odio maecenas purus.Arcu sagittis in eleifend in blandit pretium dapibus ipsum.
                             Quam id nullam quisque nibh suscipit. Vitae vestibulum ac in amet. Sem lobortis id netus.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur. Odio ultrices odio maecenas purus.Arcu sagittis in eleifend in blandit pretium dapibus ipsum.
                             Quam id nullam quisque nibh suscipit. Vitae vestibulum ac in amet. Sem lobortis id netus.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur. Odio ultrices odio maecenas purus.Arcu sagittis in eleifend in blandit pretium dapibus ipsum.
                             Quam id nullam quisque nibh suscipit. Vitae vestibulum ac in amet. Sem lobortis id netus.
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur. Odio ultrices odio maecenas purus.Arcu sagittis in eleifend in blandit pretium dapibus ipsum.
                             Quam id nullam quisque nibh suscipit. Vitae vestibulum ac in amet. Sem lobortis id netus.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <img src="/assets/img1.png" className="img-fluid p-3" alt="" />
                            </div>
                            <div className="col-md-6">
                                <img src="/assets/img.png" className="img-fluid p-3" alt="" />
                            </div>
                            <div className="col-md-6">
                                <img src="/assets/img2.png" className="img-fluid p-3" alt="" />
                            </div>
                        </div>
                        <div className="row mx-auto justify-content-center">
                            <div className="col-3 p-2 mx-5">
                                <button className="searchdetails--btn shadow-sm p-4 w-100 rounded">Donate</button>
                            </div>
                            <div className="col-3 p-2 mx-5">
                                <button className="searchdetails--btn shadow-sm p-4 w-100 rounded">Share</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default SearchDetails;