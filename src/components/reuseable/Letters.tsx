import React from "react"
const Letters = () => {
    return(
        <>
            <div className="letters">
                <div className="container">
                    <div className="row mx-auto justify-content-center letters__row">
                        <h1 className="movement__text--title text-center">Latest News</h1>
                            <div className="movement__text--line mx-auto" />
                                <p>Lorem ipsum dolor sit amet consectetur. 
                                    Odio ultrices odio maecenas purus.Arcu sagittis 
                                    in eleifend in blandit pretium dapibus ipsum.
                                    Quam id nullam quisque nibh suscipit.
                                    Vitae vestibulum ac in amet. Sem 
                                lobortis id netus.
                             </p>
                            <div className="col-md-5 mt-5">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control letters__row--input" placeholder="Email Address..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="letters__row--btn border-0" type="button" id="button-addon2">Get Started</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Letters