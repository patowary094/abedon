import React, { useState } from 'react'
import styles from './css/MerBottomNav.module.css'
import { FaSort } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// Testing ride boi
import MerStudents from '../MerStudents';
import MerUniversities from '../MerUniversities';
import MerNews from '../MerNews';
// Ending of testing ride
const MerBottomNav = () => {
    const [active, setActive] = useState("FirstCard");

    return (
        <div>
            
                
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-md-10 mx-auto my-4">
                        <h1 className={styles.heading}>Dashboard</h1>
                        <nav className="navbar navbar-expand-lg">
                            <div className="d-flex justify-content-between align-items-center w-100">

                            <div>
                            <button className={styles.navLink}  style={{marginLeft: 0,}} aria-current="page" 
                            onClick={() => setActive("FirstCard")}
                            >Students</button>
                            <button className={styles.navLink} 
                            onClick={() => setActive("SecondCard")}
                            >Universities</button>
                            <button className={styles.navLink} 
                            onClick={() => setActive("ThirdCard")}
                            >News</button>
                            </div>



                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                    <NavLink className="nav-link text-dark"  to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort by <FaSort />
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="">Action</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="">Another action</NavLink></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><NavLink className="dropdown-item" to="">Something else here</NavLink></li>
                                    </ul>
                                    </li>
                                    
                                    <form className="d-flex ">
                                        <input className="form-control me-2 "  className={styles.formStyle} type="search" placeholder="Search" aria-label="Search" />
                                        <button  className={styles.searchButton} type="submit"><FaSearch /></button>
                                    </form>
                                </ul>
                                
                            </div>
                            </nav>
                        </div>
                    </div>    
                </div>   

                <div>
                    {active === "FirstCard" && <MerStudents />}
                    {active === "SecondCard" && <MerUniversities />}
                    {active === "ThirdCard" && <MerNews />}
                </div>
            
        </div>
    )
}

export default MerBottomNav;
