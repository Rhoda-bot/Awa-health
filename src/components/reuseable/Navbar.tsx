import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate('/search');
    console.log("hello");
    
  }
    return(
            <>
               <nav className="navbar navbar-expand-lg bg-white border-bottom py-0">
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
                          <li className="nav-item mx-3">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                          </li>
                          <li className="nav-item mx-3">
                              <Link className="nav-link" to="/about">About</Link>
                          </li>
                        <li className="nav-item mx-3">
                          <Link className="nav-link"to="/donate" >Donate</Link>
                        </li>
                        <li className="nav-item mx-3">
                          <Link className="nav-link"to="/volunteers" >Volunteers</Link>
                        </li>
                        <li className="nav-item mx-3">
                          <Link className="nav-link" to="/auth/sign-up">SignUp/SignIn</Link>
                        </li>
                        <input type="button" value='search' className="bar__menu--inp" onClick={handleSearch}/>
                    </ul>
                  </div>
                  </div>
              </div>
            </nav>
            </>
    )
}
export default Navbar;