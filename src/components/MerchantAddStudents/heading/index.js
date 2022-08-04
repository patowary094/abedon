import React from 'react'
import styles from './heading.module.css'
import web from './img/logo.png'
import { NavLink } from 'react-router-dom'

const Heading = () => {
    return (
        <div>
            <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                <nav className="navbar navbar-expand-lg my-2">
                <div className="container-fluid container-sm">
                    <NavLink className="navbar-brand text-dark" to="/"><img src={web} className="img-fluid" alt="logo" />Abedon</NavLink>
                </div> 
                </nav>

            </div>
            </div>
            <div className="text-center my-4">
                <h1 className={styles.heading1}>Student Details</h1>
                <h5 className={styles.heading2}>Please fill up this form</h5>
            </div>
        </div>
       </div> 
    )
}

export default Heading;
