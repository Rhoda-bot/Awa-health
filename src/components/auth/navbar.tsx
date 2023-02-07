import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-white border-bottom">
            <div className="container">
                <Link className="navbar-brand" to="/">
                  <img src="/assets/p1.png" alt="" />
                    <img src="/assets/logo.png" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <span className="navbar-text fw-3">
                    Already have an account?  <b><Link to="/auth/sign-in">Sign In</Link></b> 
                </span>
                </div>
            </div>
            </nav>
         {/* <nav className="navbar navbar-expand-lg bg-white shadow">
                <div className="container">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <a className="navbar-brand" href="/">
                    <img src="/assets/logo.png" alt="" />
                  </a>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav justify-content-end  mb-2 mb-lg-0">
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">Donate</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link">SignUp/SignIn</a>
                          </li>
                  </ul>
                    <span className="navbar-text">
                        <p>Already have an account? <span>Sign in</span></p>
                    </span>
                  </div>
                </div>
              </nav> */}
        </>
    )
}
export default Navbar;