import React from 'react'
import {Link} from 'react-router-dom';
import Submitcss from '../submitted/submit.module.css'
const Submit= ()=> {
    

    return (
        <div className={Submitcss.card1}>
      <div className={Submitcss.compname}>
        <img src="logo.png"  width="26px" alt="" className={Submitcss.toplogo} />
    <h3>Abedon</h3>
      </div>
<div className={Submitcss.vector}>
  <img src="vector.png" width="100px" alt="" />
</div>
<div className={Submitcss.acc}>
  <h1>Account Verified</h1>
</div>
<div className={Submitcss.btn}>
  <button type="button" name="button">Continue to Dashboard</button>
  <button type="button" name="button">Check your profile</button>

</div>

      </div>
    )
}
export default Submit

