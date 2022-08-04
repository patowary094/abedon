import React from 'react'
import Styles from './Button.module.css'
import { Link } from 'react-router-dom'
const ButtonName = () => {
    return (
        <div>
            <div className="text-center my-4">
            <Link to="/MerchantDashboard">
            <button  className={Styles.button} type="submit">Continue to Dashboard</button>
            </Link>
                        
                    </div>
        </div>
    )
}

export default ButtonName;
