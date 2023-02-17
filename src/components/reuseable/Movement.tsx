import React from 'react';

function Movement() {
  return (
    <div className="movement py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="movement__text">
            <h1 className="movement__text--title text-center">Join Our Movement</h1>
            <div className="movement__text--line mx-auto" />
          </div>
        </div>
        <div className="row justify-content-center g-3">
          <div className="col-md-4 border-0 mx-3 px-3">
              <div className="card">
                <div className="card-body px-2">
                  <div className="row movement__row">
                    <img src="/assets/ico.png" alt="" className='movement__row--img'/>
                  </div>
                    <h3 className="card-title text-center">Donate</h3>
                    <p className="movement__col--text text-sm-center text-md-start">
                      Lorem ipsum dolor sit amet consectetur.
                      Odio ultrices odio maecenas purus.
                    </p>
                </div>
              </div>
          </div>
          <div className=" col-md-4 border-0 mx-3 px-3">
             <div className="card">
              <div className="card-body px-2">
                  <div className="row movement__row">
                    <img src="/assets/icon.png" alt="" className='movement__row--img'/>
                  </div>
                    <h3 className="card-title text-center">Volunteer</h3>
                    <p className="movement__col--text text-sm-center text-md-start">
                      Lorem ipsum dolor sit amet consectetur.
                      Odio ultrices odio maecenas purus.
                    </p>
                </div>
             </div>
          </div>
        </div>
        <div className="row py-5 mt-5 align-items-center">
          <div className="col-md-6">
            <div className="movement__text">
              <h1 className="movement__text--title text-start">About Us</h1>
              <div className="movement__text--line" />
            </div>
            <p className="text-white movement__text--text">
              Lorem ipsum dolor sit amet consectetur. Odio ultrices odio
              maecenas purus.Arcu sagittis in eleifend in blandit pretiu
              m dapibus ipsum.Quam id nullam quisque nibh suscipit.
              Vitae vestibulum ac in amet. Sem lobortis id netus.
            </p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 p-2">
                <img src="/assets/image2.png" alt="images" />
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-md-6 p-2">
                <img src="/assets/p2.png" alt="images" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Movement;
