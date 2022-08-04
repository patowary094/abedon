import styles from './card.module.css'

const MAX_STRING_SIZE = 30

function trim(s) {
    return s.length > MAX_STRING_SIZE ? s.substring(0, MAX_STRING_SIZE) + '...' : s;
}

export default function Card({title, image}) {
    return (
        <div className={styles.card}>
            <img src={image} />
            <p>{trim(title)}</p>
        </div>
    )
}