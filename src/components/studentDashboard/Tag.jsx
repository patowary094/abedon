import {useContext} from 'react'
import {tagContext} from '../context/tagContext'

import styles from './tag.module.css'

const Tag = ({value}) => {

    const handleClick = () => {
        setChosenTag(value) 
        console.log(chosenTag)
    }

    const [chosenTag, setChosenTag] = useContext(tagContext)
    let chosen = chosenTag === value
    return (
        <div className={chosen?styles.chosenTag:styles.tag} onClick={handleClick}>
            <div>{value}</div>
        </div>
    )
}

export default Tag