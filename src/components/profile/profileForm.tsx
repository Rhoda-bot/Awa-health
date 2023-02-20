import React from "react";

const ProfileForm = () => {
    return(
        <>
            <div className="profileform py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3 p-4 ">
                            <div className="card border p-3 align-items-center position-relative">
                                <img src="/assets/profile-img.png" className="img-fluid w-75" alt="" />
                                <img src="/assets/camera.png" className="img-fluid position-absolute top-50 end-75" alt="" />

                            </div>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-6 py-4 border rounded">
                            <form className="py-3 mx-3">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <span>First Name</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <span>Last Name</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <span>Age</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <span>Email</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <span>Gender</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <span>Location</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <p>I’d like to receive Email about <span className="bg-warming">AwaHealth</span> <div className="form-check" >
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                            <span>
                                                <label className="form-check-label" htmlFor="flexCheckIndeterminate" />
                                            </span>
                                        </div>
                                    </p>
                                    <div className="col-md-10"></div>
                                    <div className="col-md-2">
                                        <button className="px-4 py-2 searchdetails--btn">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProfileForm;