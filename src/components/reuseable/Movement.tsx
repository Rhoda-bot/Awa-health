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
          <div className="col-md-4 movement__col m-2 p-2">
            <div className="card movement__col--card p-2">
              <div className="img mx-auto">
                <img src="/assets/ico.png" width={50} alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title text-center">Donate</h3>
                <p className="movement__col--text">
                  Lorem ipsum dolor sit amet consectetur.
                  Odio ultrices odio maecenas purus.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 movement__col m-2 p-2">
            <div className="card movement__col--card p-2">
              <div className="img mx-auto">
                <img src="/assets/icon.png" width={50} alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title text-center">Volunteer</h3>
                <p className="movement__col--text">
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
