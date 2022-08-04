import React from 'react'
import Styles from './Details.module.css'

const Details = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className={Styles.heading1}>Student Added Sucessfully!</h1>
                <div className='d-flex justify-content-center align-items-center'>
                <div className='d-flex justify-content-center align-items-center me-5'><h5 className={Styles.heading2}>Student name: </h5> <p className='mx-2 fw-bold'>  Ashim Dey </p></div>
                <div className='d-flex justify-content-center align-items-center'><h5 className={Styles.heading2}>Student ID:</h5> <p className='mx-2'> 00010</p></div>
                </div>
                

            </div>
        </div>
    )
}

export default Details;
