import React from 'react';

const Banner =()=>{
    return(
        <>
            <div className="banner">
                <div className="container">
                    <div className="row banner__row">
                        <div className="col-md-6 banner__col">
                            <h2 className="banner__col--title">Helping People</h2>
                            <h2 className="banner__col--subtitle">Together</h2>
                            <p className="banner__col--text">
                                Lorem ipsum dolor sit amet consectetur. Odio ultrices odio maecenas purus.
                                Arcu sagittis in eleifend in blandit pretium dapibus ipsum.
                                Quam id nullam quisque nibh suscipit. Vitae vestibulum ac in amet. Sem 
                                lobortis id netus.
                            </p>
                            <button className="banner__col--btn">Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner