import React from "react";
import { Link } from "react-router-dom";
import BarMenu from "../reuseable/Bar";

const DonateQuestion = () => {
    return (
        <>
            <BarMenu />
            <div className="thanks py-5">
                <div className="container py-5">
                    <div className="row align-items-center justify-content-center mx-auto text-center">
                        <div className="col-md-6 p-2">
                            <div className="card shadow-sm p-2">
                               <div className="card-body">
                                <h5>Do you have a specific cause for donation?</h5>
                                    {/* <div className="d-flex"> */}
                                            <Link to="/donation">
                                        <button className="mx-3 signup--btn">
                                                No
                                        </button>
                                            </Link>
                                        <Link to="/search">
                                        <button className="mx-3 signup--btn">
                                                Yes
                                        </button>
                                        </Link>
                                    {/* </div> */}
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DonateQuestion;