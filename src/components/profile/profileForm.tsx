import React from "react";

const ProfileForm = () => {
    return(
        <>
            <div className="profileform py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 p-4">
                            <div className="card border p-3 align-items-center">
                                <img src="/assets/profile-img.png" className="img-fluid w-75" alt="" />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-8 py-4 border">
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
                                    <p>I’d like to receive Email about <span className="bg-warming">AwaHealth</span> <input type="checkbox" name="checked" id="" /></p>
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