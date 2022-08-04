import React from 'react'
import {Link} from 'react-router-dom';
import Merchantcss from '../merchant/merchant.module.css'
const Merchant= ()=> {
    

    return (
<div className={Merchantcss.card1}>
      <div className={Merchantcss.compname}>
        <img src="logo.png" width="26px" alt="" className={Merchantcss.toplogo} />
    <h3>Abedon</h3>
      </div>

  <div className={Merchantcss.step}>
    <img src="3step.png" alt="" />
  </div>
  <h1>Please fill up the information:</h1>
  <div className={Merchantcss.para}>
  Don’t worry, We’ll keep your informations safe!
</div>
<form className="" action="index.html" method="post">

  <div className={Merchantcss.main}>
    <div className={Merchantcss.flex11}>
    <div className={Merchantcss.row1}>
      <label for="comp">Company or Shop Name</label>
      <input type="text" required />
    </div>
    <div className={Merchantcss.row22}>
      <label for="comp">Upload a Proof of identity</label>
      <input type="file" required className={Merchantcss.upload} />
    </div>
    </div>
    <div className={Merchantcss.flex1}>
      <div className={Merchantcss.row1}>
        <label for="comp">Your Name(Optional)</label>
        <input type="text" />
      </div>
      <div className={Merchantcss.row22} >
        <span>Rules:</span>
  <ol>
    <li>Enter your name or your company/shop name. You can enter both if you wish.</li>
    <li>Upload any of your ID card. We can validade NID/Passport/Driving lisense</li>
    <li>After submitting it will take few minutes to verify your account.</li>
    <li>  Before submitting, check your informations correctly, Non-disclosure/ suppression of information may attract your account activation.</li>
  </ol>
      </div>
    </div>

  </div>
 

     <div className={Merchantcss.btn}>
     <Link to="/SignupOTP"><button className={Merchantcss.butt} type="submit" name="button">Submit</button></Link>
    </div>
</form>

</div>
    )
}
export default Merchant