import React from 'react'
import {Link} from 'react-router-dom';
import Login1css from '../login1/login1.module.css'
const Login1= ()=> {

    return(

        <div className={Login1css.cardview} id="my_form">
<h1>Login</h1>
<div className={Login1css.para}>
Get acess to all your information, apply any elligible university, and many more.
</div>
<div className={Login1css.loginitem}>
 <div className={Login1css.number}>
  <label className={Login1css.loginstyle} for="">Enter Mobile Number</label>
  <input className={Login1css.inputstyle} type="text" id="label_box" name="" required autocomplete="off" value="" />
</div>
 <div className={Login1css.btn}>
 <Link to="/Login2"> <button type="submit" className={Login1css.loginbtn} name="button"> Get OTP</button></Link>
 </div>
 <img src="bglight.png" width="80%" alt="" />
</div>
</div>


    )
    
}

export default Login1