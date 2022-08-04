import React from 'react'
import Animate from './img/Complete.png'
import Styles from './Animation.module.css'
const Animation = () => {
    return (
        <div>
            <div className="text-center my-4">
                <img src={Animate}  alt={Animate} className={Styles.animated} />
            </div>
        </div>
    )
}

export default Animation;
