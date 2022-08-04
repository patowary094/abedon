import { useState } from 'react'

import Header from './Header'
import Title from './Title'
import Option from './Option'
import View from './View'

import styles from './dashboard.module.css'

export default function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <Header />
            <Title />
            <Option />
            <View />
        </div>
    )
}