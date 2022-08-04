import styles from "../ourTeam/css/OurTeam.module.css"
import React from 'react';
import CardT from './cardT';
import imageT from "../ourTeam/cardT/img/imageT.png" 
const OurTeam = () => {
    return (
        <div>
        <h1 className={styles.heading}>Our Team</h1>
            <div className={styles.cardTs}>
                <CardT  name="Manish Sarmah" designation="Web Developer" imageSrc={imageT}/>
                <CardT  name="Manish Sarmah" designation="Web Developer" imageSrc={imageT}/>
                <CardT  name="Manish Sarmah" designation="Web Developer" imageSrc={imageT}/>
                <CardT  name="Manish Sarmah" designation="Web Developer" imageSrc={imageT}/>
            </div>
        </div>
    );
};

export default OurTeam;