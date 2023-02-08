import React from "react";

const VolunteersForm = () => {
    return (
        <>
            <div className="teersform py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="/assets/voluntee.png" className="img-fluid h-100" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h1 className="text-center p-1 mb-4 pb-3">Volunteer with Us<img src="/assets/vec8.png" className="img-fluid mx-2" alt="" /></h1>
                            <form >
                                <div className="row">
                                    <div className="col-md-6 mb-5">
                                        <span>Full name</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6  mb-5">
                                        <span>Phone Number</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6  mb-5">
                                        <span>Occupation</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6  mb-5">
                                        <span>Email</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <span>Age</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6 mb-5">
                                        <span>location</span>
                                        <input type="text" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-12 mb-5">
                                        <span>Motivation</span>
                                    <textarea className="form-control  form-control-lg" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                                    </div>
                                    <div className="col-md-10"></div>
                                    <div className="col-md-2">
                                        <button className="donations--btn">Volunteer</button>
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
export default VolunteersForm;