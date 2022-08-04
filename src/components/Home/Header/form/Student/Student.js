import React from 'react'
import {Link} from 'react-router-dom';
import Studentform from '../Student/Student.module.css'
const Student= ()=> {
    

    return (
        <div className={Studentform.card1}>
    <div className={Studentform.compname}>
          <img src="logo.png" width="26px" alt="" className={Studentform.toplogo} />
      <h3>Abedon</h3>
        </div>
  
    <div className={Studentform.step}>
      <img src="3step.png" alt="" />
    </div>
    <h1>Please fill up the information:</h1>
    <div className={Studentform.para}>
    Don’t worry, We’ll keep your informations safe!
    </div>
  
  
  <div className={Studentform.main}>
  
  
    <form className="" action="index.html" method="post">
  
      <div className={Studentform.flex1}>
       <div className={Studentform.row1em}>
        <label for="email">Email</label>
        <input type="text"  id="email"  placeholder="Ex.human@mail.com" />
       </div>
      <div className={Studentform.row1em}>
        <label for="phnum">Phone No.</label>
        <input type="text"  id="phnum" name="" value=""  placeholder="Ex. 99XXXXXXXX" />
      </div>
      </div>
  
      <div className={Studentform.flex1}>
        <div className={Studentform.row1}>
          <div className={Studentform.innerdiv}>
            <label for="sscroll">SSC Roll No.</label>
            <input type="text"  className={Studentform.sscroll} name="" value="" />
          </div>
  
          <div className={Studentform.innerdiv}>
            <label for="SSCreg">SSC registeration No.</label>
            <input type="text" className={Studentform.SSCreg} name="" value="" />
          </div>
        </div>
  
        <div className={Studentform.row1} >
          <div className={Studentform.innerdivinner1} >
            <label for="passboard">Passing Board</label>
            <select className="passing" name="" id="passboard">
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
              <option value="" selected>choose one</option>
            </select>
          </div>
  
          <div className={Studentform.innerdiv}>
            <label for="passboard"> Board</label>
            <select className="board" name="" id="passboard">
              <option value="">ICSE</option>
              <option value="">CBSE</option>
              <option value="" selected>choose one</option>
            </select>
          </div>
        </div>
   </div>
        <div className={Studentform.flex1}>
          <div className={Studentform.row1}>
            <div className={Studentform.innerdiv}>
              <label for="hscroll">HSC Roll No.</label>
              <input type="text" className={Studentform.hscroll} name="" value="" />
            </div>
  
            <div className={Studentform.innerdiv}>
              <label for="HSCreg">HSC registeration No.</label>
              <input type="text" className={Studentform.HSCreg} name="" value="" />
            </div>
          </div>
  
          <div className={Studentform.row1}>
            <div className={Studentform.innerdivinner1} >
              <label for="passboard">Passing Board</label>
              <select className="passing" name="" id="passboard">
                <option value="">2021</option>
                <option value="">2020</option>
                <option value="">2019</option>
                <option value="">2018</option>
                <option value="" selected>choose one</option>
              </select>
            </div>
  
            <div className={Studentform.innerdiv}>
              <label for="passboard"> Board</label>
              <select className="board" name="" id="passboard">
                <option value="">ICSE</option>
                <option value="">CBSE</option>
                <option value="" selected>choose one</option>
              </select>
            </div>
          </div>
       </div>
  
         <div className={Studentform.sub}>
           <label for="prefsub">Preferred Subject</label>
           <input type="text" id="prefsub" name="" value="" />
        </div>
  
       <div className={Studentform.btn}>
       <Link to="/SignupOTP"> <button className={Studentform.butt} type="submit" name="button">Submit</button></Link>
      </div>
  
    </form>
  </div>
  </div>
  

    )
}
export default Student