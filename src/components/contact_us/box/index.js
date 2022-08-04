import React from 'react';
import styles from '../box/css/box.module.css'

const Box = () => {
    return (
        <div>
            {/* <div className={styles.heading}>
                <h2>Frequently Asked Questions</h2>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida malesuada porta
                vitae, vel. In egestas eu eget dolor sodale</p>
                <br></br><br></br>
            </div>
        <div>
        <select name="cars" id="cars">
        <option value="answers">ans</option>
        </select>
        <br></br> <br></br>
        <select name="cars" id="cars">
        <option value="answers">ans</option>
        </select>
        <br></br> <br></br>
        <select name="cars" id="cars">
        <option value="answers">ans</option>
        </select>
        <br></br> <br></br>
        <select name="cars" id="cars" placeholder="question">
        <option value="answers">ans</option>
        </select>
        </div> */}
        
        <div className={styles.rectangle}>
            <h2>lorem impsum dolor sit</h2>
          <form className={styles.inputs} method="post">
          <input type="text" name="Your Name" id="name" Placeholder="Your Name"></input> 
          <br></br>
          <br></br>
          <input type="email" name="Email" id="name" Placeholder="Your Email(required)"></input> 
          <br></br>
          <br></br>
          <input type="text" name="Message" id="msg" Placeholder="Your Message"></input> 
          <br></br>
          <br></br>
          <input type="submit" value="send" id={styles.send}></input>
          </form>
        </div>
       
        </div>
    );
};

export default Box; 