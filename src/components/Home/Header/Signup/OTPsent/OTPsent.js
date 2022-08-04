import React from 'react'
import {Link} from 'react-router-dom';
import Otpsent from '../OTPsent/OTPsent.module.css'
const OTPsent= ()=> {
    

    return (
        <div className={Otpsent.card1}>
      <div className={Otpsent.compname}>
        <img src="logo.png" width="26px" alt="" className={Otpsent.toplogo} />
    <h3>Abedon</h3>
      </div>

  <div className={Otpsent.step}>
    <img src="2step.png" alt="" />
  </div>
  <h1>Enter your phone number</h1>
<div className={Otpsent.para}>
  We need to verify your phone number before continuing.
</div>
<div className={Otpsent.loginitem}>
<div className={Otpsent.number}>
  <label className={Otpsent.loginstyle} for="">Enter OTP</label>
  <input className={Otpsent.inputstyle}  type="text" id="label_box" name="" required autocomplete="off" value="" />

</div>
  <div className={Otpsent.btn}>

  <Link to="/OTPwait"> <button type="submit" className={Otpsent.contbtn} name="button"  >
     Continue
   </button></Link>

  <button type="submit" className={Otpsent.resendbtn} name="button"  >
    Resend Otp
  </button>

  </div>


  </div>

<div className={Otpsent.otpsenttext}>
  OTP has been sent to number xxxxxxx012

</div>

</div>
    )
}
export default OTPsent
