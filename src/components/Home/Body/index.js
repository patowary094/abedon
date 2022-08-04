import React from "react";
import  Button  from "@material-ui/core/Button";
import IconBody from "../Body/img/png.png"
import styles from "../Body/css/home.module.css"
import { Link } from "react-router-dom";
const BodyHome = () => {
  return (
    <div className={styles.mainBody}>
      <div>
        <h1>Apply to any University </h1>
        <h1>in just a few clicks!</h1>
        <p>By far the easiest way to apply online.</p>
        <Link style={{textDecoration:"none"}} to="/about"><Button variant="contained" style={{backgroundColor:"black",color:"white"}}>
          Get Started
        </Button></Link>
        
      </div>
      <div>
          <img src={IconBody}/>
      </div>
    </div>
  );
};

export default BodyHome;
