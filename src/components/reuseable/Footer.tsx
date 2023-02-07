import React from "react";
const Footer = () => {
    return(
        <>
            <div className="footer py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="/assets/awaHealth.png" className="img-fluid" alt="" />
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet
                                consectetur.Odio ultrices odio maece
                                nas purus.
                            </p>
                        </div>
                        <div className="col-md-4 align-items-center p-3">
                            <h4>Contact</h4>
                                <p><img src="/assets/vec.png" className="img-fluid mx-3" alt="" /> Lorem ipsum dolor sit amet</p>
                                <p><img src="/assets/vec5.png" className="img-fluid mx-3" alt="" />Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Socials</h4>
                            <div className="d-flex">
                                <img src="/assets/vec2.png" className="img-fluid mx-3" alt="" />
                                <img src="/assets/vec3.png" className="img-fluid mx-3" alt="" />
                                <img src="/assets/vec4.png" className="img-fluid mx-3" alt="" />
                                <img src="/assets/vec6.png" className="img-fluid mx-3" alt="" />
                            </div>
                            {/* <p><i className="fa-sharp fa-solid fa-phone-rotary"/> Lorem ipsum dolor sit amet</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;