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
                        <div className="col-md-4 p-3">
                            <div className="card p-3">
                                <img src="/assets/p4.png" className="card-img-top" alt="" />
                                <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col-md-10">
                                        <button className="campaigns__col--btn">Remind me</button>
                                    </div>
                                    <div className="col-md-2">
                                        <img src="/assets/hrt.png" alt="" />
                                    </div>
                                </div>
                                    <h5 className="card-subtitle">Save A soul Today</h5>
                                    <p className="card-text">
                                    Lorem ipsum dolor sit amet
                                    consectetur.Odio ultrices odio maece
                                    nas purus.
                                    </p>
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-label="Segment one" style={{
                                            width: '50%',
                                            backgroundColor: "orange"
                                        }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>                    
                                        <div className="progress-bar " role="progressbar" aria-label="Segment two" style={{width: '30%',
                                    backgroundColor: "#36B2BF"}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>                    
                                        </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            $2000  raised
                                        </div>
                                        <div className="col-md-6">
                                            Target  $300000
                                        </div>
                                        <div className="col-md-6">
                                            <button className="campaigns__col--btn">Donate</button>
                                        </div>
                                        <div className="col-md-6">
                                            Lagos
                                        </div>
                                    </div>
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
                                <button className="searchdetails--btn shadow-sm p-2 w-100 rounded">Donate</button>
                            </div>
                            <div className="col-3 p-2 mx-5">
                                <button className="searchdetails--btn shadow-sm p-2 w-100 rounded">Share</button>
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