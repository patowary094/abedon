import {SearchIcon} from '@heroicons/react/solid'

import styles from './filter.module.css'

export default function Filter() {
    return (
        <div className={styles.filter}>
            <div className={styles.txt}>Search</div>
            <div><SearchIcon className={styles.icon} /></div>
        </div>
    )
}