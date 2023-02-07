import React from "react"

const Donations = () => {
    return(
        <div className="donation mt-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img src="/assets/donate.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-8">
                        <h1 className="text-center">Make your Donation <img src="/assets/coins.png" className="img-fluid" alt="" /></h1>
                        <div className="row mt-3">
                            <div className="col-10 mb-4">
                                <span>Enter Amount</span>
                                <input type="text" className="form-control form-control-lg"/>
                            </div>
                            <div className=" mt-3">
                                <span>Select Currency</span>
                            </div>
                            <div className="col-md-3">
                                <button type="button" className="donations--btn">Naira</button>
                            </div>
                            <div className="col-md-3">
                                <button type="button" className="donations--btn">Dollar</button>
                            </div>
                            <div className="col-md-3">
                                <button type="button" className="donations--btn">Pounds</button>
                            </div>
                            <div className="col-md-3">
                                <button type="button" className="donations--btn">Euro</button>
                            </div>
                           <div className="col py-5 mt-3">
                            <p>Choose your payment method:</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Donations