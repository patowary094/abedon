import styles from "./css/cardT.module.css"
import React from 'react';



const CardT = (props) => {
    return (
        <div>
            <div className={styles.cardT}>
                <div className={styles.imageT}><img src={props.imageSrc} height="120px"/></div>
                <div className={styles.triangle}></div>
                <h3>{props.name}</h3>
                <h5>{props.designation}</h5>
            </div>
        </div>
    );
};

export default CardT;