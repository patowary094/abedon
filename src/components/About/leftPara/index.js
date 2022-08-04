import React from 'react';
import styles from '../leftPara/css/leftPara.module.css'
import leftParaIcon from "../leftPara/img/leftPara.png"

const LeftPara = () => {
    return (
        <div>
        <div className={styles.leftMain}>
            <div className={styles.paraBody}>
                <h1 className={styles.heading}>Lorem ipsum dolor sit</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida malesuada porta vitae, vel.
                 In egestas eu eget dolor sodales odio sem ac.
                 Orci, in et tincidunt ultrices elit ut. lol
                 Sociis tempus vestibulum enim nisl faucibus sit viverra vel. 
                 Blandit aliquam bibendum </p>
            </div>
            <div>
                <img src={leftParaIcon}/>
            </div>
        </div>
        </div>
    );
};

export default LeftPara;        