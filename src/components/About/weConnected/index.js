import React from 'react';
import img1 from "../weConnected/img/img1.png"
import img2 from "../weConnected/img/img2.png"
import img3 from "../weConnected/img/img3.png"
import styles from "../weConnected/css/weConnected.module.css"
const WeConnected = () => {
    return (
        <div>
            <h1 className={styles.headingW}>We Connected</h1>
            <div className={styles.cardsW}>
                <div className={styles.cardW}>
                <div className={styles.image}><img  src={img1} height="130px"/></div>
                    <h2 className={styles.num} style={{margin:"0"}}>15000</h2>
                    <h3 className={styles.titleW} style={{margin:"0"}}>Students</h3>
                </div>
                <div className={styles.cardW}>
                <div className={styles.image}><img  src={img2} height="130px"/></div>
                    <h2 className={styles.num} style={{margin:"0"}}>2750</h2>
                    <h3 className={styles.titleW} style={{margin:"0"}}>Merchants</h3>
                </div>
                <div className={styles.cardW}>
                <div className={styles.image}><img  src={img3} height="130px"/></div>
                    <h2 className={styles.num} style={{margin:"0"}}>17</h2>
                    <h3 className={styles.titleW} style={{margin:"0"}}>Institutions</h3>
                </div>
            </div>
        </div>
    );
};

export default WeConnected;