import React from 'react'
import {NavLink} from 'react-router-dom';
import web from './img/logo.png'
import bell from './img/bell.png'
import profile from './img/profile.png'
import ham_menu from './img/ham_menu.png'
const MerUpNav = () => {
    return (
        <div>
            <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto my-4">
                    <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                    <NavLink className="navbar-brand text-dark " to="/"><img src={web} className="img-fluid" alt="logo" />Abedon</NavLink>
                        <ul className="nav">
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={bell} className="img-fluid" alt="logo" />
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="">Another action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="">Something else here</NavLink></li>
                            </ul>
                            </li>

                            
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={profile} className="img-fluid" alt="logo" />
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="">Another action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="">Something else here</NavLink></li>
                            </ul>
                            </li>
                            <li className="nav-item dropdown">
                            <NavLink className="nav-link" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={ham_menu} className="img-fluid" alt="logo" />
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="">Action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="">Another action</NavLink></li>
                                <li><NavLink className="dropdown-item" to="">Something else here</NavLink></li>
                            </ul>
                            </li>


                            {/* <li className="nav-item">
                                <a class="nav-link" to="">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" to="">Link</a>
                            </li> */}
                        </ul>
                    </div>
                    </nav>
                </div>
             </div> 
            </div>       
        </div>
    )
}

export default MerUpNav;
