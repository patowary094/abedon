import Tag from './Tag'
import Filter from './Filter'

import styles from './option.module.css'


const Option = () => {


    const tags = ['Upcoming', 'Applied', 'Expired']
    return (
        <div className={styles.options}>
            <div className={styles.tags}>
                {tags.map((tag) => (<div><Tag value={tag} /></div>))}
            </div>
            <div className={styles.filter}>
                <Filter />
            </div>
        </div>
    )
}

export default Option