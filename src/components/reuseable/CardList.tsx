import React from "react";

const CardList = () => {
    return(
        <>
            <div className="cardlist">
                <div className="container"> 
                    <div className="row justify-content-center">
                        <div className="col-md-5 p-3 mx-3">
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
                                    <div className="row">
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-label="Segment one" style={{
                                            width: '50%',
                                            backgroundColor: "orange"
                                        }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>                    
                                        <div className="progress-bar " role="progressbar" aria-label="Segment two" style={{width: '30%',
                                    backgroundColor: "#36B2BF"}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>                    
                                        </div>
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
                        <div className="col-md-5 p-3  mx-3">
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
                                    <div className="row">
                                        <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-label="Segment one" style={{
                                            width: '50%',
                                            backgroundColor: "orange"
                                        }} aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></div>                    
                                        <div className="progress-bar " role="progressbar" aria-label="Segment two" style={{width: '30%',
                                    backgroundColor: "#36B2BF"}} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></div>                    
                                        </div>
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
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardList;