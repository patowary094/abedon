import React from 'react';
import styles from "../cards/css/cards.module.css"
import CardImage from "../cards/img/card-image.png"

const Card = (props) => {
    return (
        <div>
                <div className={styles.card}>
                    <div className={styles.cardImage}><img src={CardImage} height="100px"/></div>
                    <div className={styles.cardTitle}>{props.title}</div>
                    <div className={styles.cardContent}> {props.content} </div>
                </div>
           
        </div>
    );
};

export default Card; 