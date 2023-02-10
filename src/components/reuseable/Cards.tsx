import React from "react";

const Cards = () => {
    return(
        <> 
        <div className="row">
          <div className="col-md-3 campaigns__col">
            <div className="card p-2">
              <img src="/assets/p3.png" className="card-img-top" alt="" />
              <div className="card-body">
                <p className="mb-3">
                  Lorem ipsum dolor sit amet
                  consectetur.Odio ultrices odio maece
                  nas purus.
                </p>
                <button type="button" className="campaigns__col--btn">Donate</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 campaigns__col">
            <div className="card p-2">
              <img src="/assets/p4.png" className="card-img-top" alt="" />
              <div className="card-body">
                <p className="mb-3">
                  Lorem ipsum dolor sit amet
                  consectetur.Odio ultrices odio maece
                  nas purus.
                </p>
                <button type="button" className="campaigns__col--btn">Donate</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 campaigns__col">
            <div className="card p-2">
              <img src="/assets/p5.png" className="card-img-top" alt="" />
              <div className="card-body">
                <p className="mb-3">
                  Lorem ipsum dolor sit amet
                  consectetur.Odio ultrices odio maece
                  nas purus.
                </p>
                <button type="button" className="campaigns__col--btn">Donate</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 campaigns__col">
            <div className="card p-2">
              <img src="/assets/p6.png" className="card-img-top" alt="" />
              <div className="card-body">
                <p className="mb-3">
                  Lorem ipsum dolor sit amet
                  consectetur.Odio ultrices odio maece
                  nas purus.
                </p>
                <button type="button" className="campaigns__col--btn">Donate</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}
export default Cards;