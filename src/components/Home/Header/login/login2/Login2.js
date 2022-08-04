import React from 'react'
import Login2css from '../login2/login2.module.css'
const Login2= ()=> {

    return(

        <div className={Login2css.cardview} >
        <h1>Login</h1>
      <div className={Login2css.para1}>
        Get acess to all your information, apply any elligible university, and many more.
      </div>
  
      <div className={Login2css.outer}>
          <label className={Login2css.loginstyle} for="">Enter Otp</label>
        <div className={Login2css.sub}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
  
        </div>
        <div className={Login2css.btn}>
        <button type="submit" className={Login2css.loginbtn} name="button"> Login</button>
          <button type="submit" className={Login2css.loginbtn} name="button"> Resend OTP</button>
        </div>
  <img src="bglight.png" width="80%" alt="" />
      </div>
  
    </div>

    )
    
}

export default Login2