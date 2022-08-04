import React from 'react';
import styles from '../frequentQs/css/qs.module.css'

const FrequentQs = () => {
    return (
        <div>
           
           <div className={styles.heading}>
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
        </div> 
           
        </div>
    );
};

export default FrequentQs;