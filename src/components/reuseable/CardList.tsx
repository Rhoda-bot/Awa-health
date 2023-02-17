import React from "react";

const CardList = () => {
    return(
        <>
            <div className="cardlist">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <img src="/assets/p4.png" className="card-img-top" alt="" />
                                <div className="row">
                                    <div className="col-md-6">
                                        <button>Remind me</button>
                                    </div>
                                    <div className="col-md-6">
                                        <img src="/assets/hrt.png" alt="" />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-subtitle">Save A soul Today</h5>
                                    <p className="card-text">
                                    Lorem ipsum dolor sit amet
                                    consectetur.Odio ultrices odio maece
                                    nas purus.
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            $2000  raised
                                        </div>
                                        <div className="col-md-6">
                                            Target  $300000
                                        </div>
                                        <div className="col-md-6">
                                            <button>Donate</button>
                                        </div>
                                        <div className="col-md-6">
                                            Lagos
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardList;