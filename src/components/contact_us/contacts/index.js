import React from 'react';
import Address from "../contacts/img/address.png"
import Phone from "../contacts/img/phone.png"
import Mail from "../contacts/img/mail.png"
import styles from "../contacts/css/contacts.module.css"


const Contacts = () => {
    return (
        
        <div className={styles.images}>
           <img src={Address}/>
           <img src={Phone}/>
           <img src={Mail}/>
           
        </div>
    );
};

export default Contacts;