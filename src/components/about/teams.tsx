import React from "react";

const Teams = () => {
    return (
        <div className="team py-5 position-relative bg-light">
            <div className="container text-center py-5">
                <h3 className="movement__text--title text-dark">Teams</h3>
                <div className="row position-relative justify-content-center">
                   <div className="col-md-4">
                    <img src="/assets/team.png" className="img-fluid" alt="" />
                        <h5>Olatunde Okegbemi</h5>
                        <span>Team Lead</span>
                   </div>
                   <div className="col-md-4">
                    <img src="/assets/team2.png" className="img-fluid" alt="" />
                    <h5>Divid Ajiboye</h5>
                        <span>UI / UX Designer</span>
                   </div>
                </div>
                <div className="row position-relative justify-content-center">
                   <div className="col-md-4">
                    <img src="/assets/team3.png" className="img-fluid" alt="" />
                    <h5>Janet Who</h5>
                        <span>___________________</span>
                   </div>
                   <div className="col-md-4">
                    <img src="/assets/team4.png" className="img-fluid" alt="" />
                    <h5>Favour Duru</h5>
                        <span>Product Manager</span>
                   </div>
                   <div className="col-md-4">
                    <img src="/assets/team5.png" className="img-fluid" alt="" />
                    <h5>Caleb Olajire</h5>
                        <span>Frontend Developer</span>
                   </div>
                </div>
                <div className="row position-relative justify-content-center">
                   <div className="col-md-4">
                    <img src="/assets/team6.png" className="img-fluid" alt="" />
                   </div>
                   <div className="col-md-4">
                    <img src="/assets/team7.png" className="img-fluid" alt="" />
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Teams;