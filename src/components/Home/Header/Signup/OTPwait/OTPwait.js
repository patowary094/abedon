import React from 'react'
import {Link} from 'react-router-dom';
import Otpsentwait from '../OTPwait/OTPwait.module.css'
const OTPwait= ()=> {
    

    return (
        <div className={Otpsentwait.card1}>
      <div className={Otpsentwait.compname}>
        <img src="logo.png" width="26px" alt="" className={Otpsentwait.toplogo} />
    <h3>Abedon</h3>
      </div>

  <div className={Otpsentwait.step}>
    <img src="2step.png" alt="" />
  </div>
  <h1>Enter your phone number</h1>
<div className={Otpsentwait.para}>
  We need to verify your phone number before continuing.
</div>
<div className={Otpsentwait.loginitem}>
<div className={Otpsentwait.number}>
  <label className={Otpsentwait.loginstyle} for="">Enter OTP</label>
  <input className={Otpsentwait.inputstyle}  type="text" id="label_box" name="" required autocomplete="off" value="" />

</div>
  <div className={Otpsentwait.btn}>

  <Link to="/Submit"><button type="submit" className={Otpsentwait.contbtn} name="button"  >
     Continue
   </button></Link>

  <button type="submit" disabled className={Otpsentwait.resendbtn} name="button"  >
    Resend Otp
  </button>

  </div>


  </div>

<div className={Otpsentwait.otpsenttext}>
Resend OTP after 60 seconds

</div>

</div>
    )
}
export default OTPwait
