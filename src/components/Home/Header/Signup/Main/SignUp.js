import React from 'react'
import {Link} from 'react-router-dom';
import SignupPage1 from '../Main/sig.module.css'
const Signup= ()=> {
    

    return (
      <div className={SignupPage1.card1}>
      <img src="logo.png" alt="" id="toplogo" />
  <h3>Abedon</h3>
  <h1>Which one represents you?</h1>
  <div className={SignupPage1.card2}>

  <Link to="/Student"><div className={SignupPage1.cards}>
      <img src="student.png" alt="" id="stud" />
    <div className={SignupPage1.name}>
    Student 
    </div>
    </div></Link>
   
   
    <Link to="/Merchant"><div className={SignupPage1.cards}>
      <img src="merchant.png" alt="" id="stud" />
      <div className={SignupPage1.name}>
        Merchant
      </div>
    </div>
    </Link>
  </div>
    </div>

    )
}
export default Signup