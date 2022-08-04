import React from 'react';
import styles from "./footer.module.css"
import icon from "../footer/img/icon.png"

const Footer = () => {
    return (
        <div>
            <div className={styles.container}>
           <div className={styles.top}>
               <div><img src ={icon} height="50px"/></div>
               <div><h1>Abedon</h1></div>
               {/* <span><img src ={icon} height="50px"/>
               <h1>Abedon</h1></span> */}
               
           </div>
           <div className={styles.bottom}>
               <div className={styles.first} >
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, in elementum risus in nec. Sed id condimentum molestie at elit tempus ac.. Sed id condimentum molestie at elit tempus ac.. Sed id condimentum molestie at elit tempus ac.</p>
                   {/* <br></br> */}
                   <p>©edusurveyer 2020. All rights reserved</p>
               </div>
               <div className={styles.company}>
                   <div className={styles.division1}>
                       <h2>Company</h2>
                   </div>
                   <div className={styles.division2}>
                       <a href="#">About</a>
                       <a href="#">Testimonials</a>
                       <a href="#">Our Services</a>
                       <a href="#">Browse</a>
                       
                    
                   </div>
               </div>
               <div className={styles.region}>
               <div className={styles.division3}>
                       <h2>Region</h2>
                   </div>
                   <div className={styles.division4}>
                       <a href="#">India</a>
                       <a href="#">Bangladesh</a>
                     
                    
                   </div>
               </div>
               <div className={styles.help}>
               <div className={styles.division5}>
                       <h2>Help</h2>
                   </div>
                   <div className={styles.division6}>
                       <a href="#">Help Centre</a>
                       <a href="#">Contact support</a>
                       <a href="#">Instructions</a>
                       <a href="#">How It Works</a>
                    
                   </div>
               </div>
             
           </div>
           </div>
        </div>
    );
};

export default Footer;