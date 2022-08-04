import React from 'react';
import styles from '../rightPara/css/rightPara.module.css'
import rightParaIcon from '../rightPara/img/rightPara.png'
const RightPara = () => {
    return (
        <div>
            <div className={styles.rightMain}>
                <div>
                    <img src={rightParaIcon}/>
                </div>
                <div className={styles.paraBody}>
                <h1 className={styles.heading}>Our Mission</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida malesuada porta vitae, vel.
                 In egestas eu eget dolor sodales odio sem ac.
                 Orci, in et tincidunt ultrices elit ut.
                  Sociis tempus vestibulum enim nisl faucibus sit viverra vel.
                  Blandit aliquam bibendum </p>
                </div>
            </div>
        </div>
    );
};

export default RightPara;