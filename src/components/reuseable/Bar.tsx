import React from "react";
import { Link, useNavigate } from "react-router-dom";

const BarMenu = () => {
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
                    <ul className="navbar-nav nav__menu mb-2 mb-lg-0">
                          <li className="nav-item mx-2 nav__menu--item">
                            <Link className="nav-link nav__menu--link active" aria-current="page" to="/">Home</Link>
                          </li>
                          <li className="nav-item mx-2 nav__menu--item">
                              <Link className="nav-link nav__menu--link" to="/about">About</Link>
                          </li>
                        <li className="nav-item mx-2 nav__menu--item">
                          <Link className="nav-link nav__menu--link"to="/donate" >Donate</Link>
                        </li>
                        <li className="nav-item mx-2 nav__menu--item">
                          <Link className="nav-link nav__menu--link" to="/profile">
                            <img src="/assets/profile-img.png"  width={25} alt="" />
                          </Link>
                        </li>
                        {/* <li className="nav-item mx-2 nav__menu--item">
                          <Link className="nav-link nav__menu--link"to="/volunteers" >Volunteers</Link>
                        </li> */}
                        <input type="button" value='search' className="nav__menu--inp me-2 mb-2" onClick={handleSearch}/>
                    </ul>
                  </div>
                  </div>
              </div>
            </nav>
        </>
    )
}
export default BarMenu;