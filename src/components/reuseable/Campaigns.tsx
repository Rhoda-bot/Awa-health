import React from 'react';
import Cards from './Cards';

function Campaigns() {
  return (
    <div className="campaigns">
      <div className="container">
        <div className="movement__text">
          <h1 className="movement__text--title text-center">Ongoing Campaigns</h1>
          <div className="movement__text--line mx-auto" />
        </div>
        <Cards />
        <div className="row py-5 align-items-bottom">
          <h1 className="movement__text--title text-center">Our Volunteers</h1>
          <div className="movement__text--line mx-auto" />
          <p className="volunteers--text text-white">
            Lorem ipsum dolor sit amet consectetur. Odio ultrices
            odio maecenas purus.Arcu sagittis in
            eleifend in blandit pretium dapibus ipsum.Quam id nullam quisque nibh suscipit.
            Vitae vestibulum ac in amet. Sem
            lobortis id netus.
          </p>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 p-2">
                <img src="/assets/p7.png" className="img-fluid h-100" alt="" />
              </div>
              <div className="col-md-6 p-2">
                <div className="row">
                  <img src="/assets/p8.png" className="img-fluid p-1" alt="" />
                </div>
                <div className="row">
                  <img src="/assets/p9.png" className="img-fluid p-1" alt="" />
                </div>
                <div className="row">
                  <img src="/assets/p.png" className="img-fluid p-1" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3 align-items-center justify-content-center mx-auto">
            <div className="volunteers__video bg-white h-75  w-100">
              {/* <img src="/assets/play.png" alt="" className='img-fluid'/> */}
            </div>
            <div className="row align-items-center py-4">
              <div className="col-md-4">
                <div className=" border-0 ">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div className="volunteers--img">
                        <span><i className="fa-thin fa-hands-holding-heart" /></span>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <span>200</span>
                      <p>Volunteers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="border-0">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div className="volunteers--img">
                        <span><i className="fa-thin fa-hands-holding-heart" /></span>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <span>1000</span>
                      <p>Causes done</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="border-0">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div className="volunteers--img">
                        <span><i className="fa-thin fa-hands-holding-heart" /></span>
                      </div>
                    </div>
                    <div className="col-md-9 mt-2">
                      <span>2+</span>
                      <p>Awards Won</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mx-auto pt-3">
                <button type="button" className='p-3 border-0 rounded'>Join as a Volunteer</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
            <h1 className="movement__text--title text-center">Latest News</h1>
            <div className="movement__text--line mx-auto" />
              <p className='text-white'>Lorem ipsum dolor sit amet consectetur. 
                Odio ultrices odio maecenas purus.Arcu sagittis 
                in eleifend in blandit pretium dapibus ipsum.
                Quam id nullam quisque nibh suscipit.
                Vitae vestibulum ac in amet. Sem 
              lobortis id netus.
              </p>
              <div className="col-md-3 campaigns__col p-2 m-4">
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
            <div className="col-md-3 campaigns__col p-2 m-4">
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
            <div className="col-md-3 campaigns__col p-2 m-4">
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
            </div>
      </div>
    </div>
  );
}
export default Campaigns;
