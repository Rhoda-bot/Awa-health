import React from 'react';
const Navbar = () => {
    return(
            <>
               <nav className="navbar navbar-expand-lg bg-white shadow">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="/assets/p1.png" alt="" />
                        <img src="/assets/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className="navbar-text">
                    <ul className="navbar-nav  mb-2 mb-lg-0">
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/about">About</a>
                          </li>
                        <li className="nav-item">
                          <a className="nav-link">Donate</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/auth/sign-up">SignUp/SignIn</a>
                        </li>
                        <input type="text" placeholder='search' className="bar__menu--inp"/>
                    </ul>
                  </div>
                  </div>
              </div>
            </nav>
            </>
    )
}
export default Navbar;