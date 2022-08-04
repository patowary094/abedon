import React from 'react'
import {Link} from 'react-router-dom';
import SignupOtp from '../OTP/signupotp.module.css'
const SignupOTP= ()=> {
    

    return (
        
    <div className={SignupOtp.card1}>
    <div className={SignupOtp.compname}>
      <img src="logo.png" width="26px" alt="" id="toplogo" />
  <h3>Abedon</h3>
    </div>

<div className={SignupOtp.step}>
  <img src="2step.png" alt="" />
</div>
<h1>Enter your phone number</h1>
<div className={SignupOtp.para}>
We need to verify your phone number before continuing.
</div>
<div className={SignupOtp.loginitem}>
<div className={SignupOtp.number}>
<label className={SignupOtp.loginstyle} for="">Enter Mobile Number</label>
<input className={SignupOtp.inputstyle} placeholder="+91 1XXXX XXXXX" type="text" id="label_box" name="" required autocomplete="off" value="" />

</div>
<div className={SignupOtp.btn}>
  <a href="C:\Users\user\Documents\CCC\Python\form\signup-otp-sent\signup-otp-sent.html">
  <Link to="/OTPsent">  <button type="submit" className={SignupOtp.loginbtn} name="button">
       Get OTP
     </button></Link>
   </a>

</div>
</div>
</div>
    )
}
export default SignupOTP