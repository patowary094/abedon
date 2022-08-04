import {useContext} from 'react'
import {tagContext} from '../context/tagContext'

// import Tag from './Tag'
import Card from './Card'
import styles from './view.module.css'

const View = () => {

    const [chosenTag, setChosenTag] = useContext(tagContext)

    const universtities = [
        {"name": "Stanford University", "image": "https://cdn.cdnlogo.com/logos/s/78/stanford.svg", "tag": "Upcoming"},
        {"name": "MIT", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png", "tag": "Upcoming"},
        {"name": "Stanford University", "image": "https://cdn.cdnlogo.com/logos/s/78/stanford.svg", "tag": "Upcoming"},
        {"name": "MIT", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png", "tag": "Upcoming"},
        {"name": "Stanford University", "image": "https://cdn.cdnlogo.com/logos/s/78/stanford.svg", "tag": "Upcoming"},
        {"name": "MIT", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png", "tag": "Upcoming"},
        {"name": "Stanford University", "image": "https://cdn.cdnlogo.com/logos/s/78/stanford.svg", "tag": "Upcoming"},
        {"name": "MIT", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png", "tag": "Upcoming"},
        {"name": "Stanford University", "image": "https://cdn.cdnlogo.com/logos/s/78/stanford.svg", "tag": "Upcoming"},
        {"name": "MIT", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png", "tag": "Upcoming"},
        {"name": "Stanford University", "image": "https://cdn.cdnlogo.com/logos/s/78/stanford.svg", "tag": "Upcoming"},
        {"name": "MIT", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png", "tag": "Upcoming"},
        {"name": "Stanford University", "image": "https://cdn.cdnlogo.com/logos/s/78/stanford.svg", "tag": "Applied"},
        {"name": "MIT", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png", "tag": "Applied"},
        {"name": "Stanford University", "image": "https://cdn.cdnlogo.com/logos/s/78/stanford.svg", "tag": "Applied"},
        {"name": "MIT", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png", "tag": "Applied"},
        {"name": "Stanford University", "image": "https://cdn.cdnlogo.com/logos/s/78/stanford.svg", "tag": "Applied"},
        {"name": "MIT", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png", "tag": "Applied"},
        {"name": "Stanford University", "image": "https://cdn.cdnlogo.com/logos/s/78/stanford.svg", "tag": "Applied"},
        {"name": "MIT", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png", "tag": "Applied"},
        {"name": "Stanford University", "image": "https://cdn.cdnlogo.com/logos/s/78/stanford.svg", "tag": "Expired"},
        {"name": "MIT", "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png", "tag": "Expired"},
    ]

    return (
        <div className={styles.view}>
            {universtities.map((u) => (u.tag === chosenTag && <Card title={u.name} image={u.image} />))}
            {/* <Card title="" image="https://cdn.cdnlogo.com/logos/s/78/stanford.svg" />
            <Card title="" image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/482px-MIT_logo.svg.png" />
            <Card title="Temple University" image="https://cdn.cdnlogo.com/logos/t/86/temple-university.svg" />
            <Card title="Rhode Island University" image="https://cdn.cdnlogo.com/logos/r/32/rhode-island-university.svg" />
            <Card title="University Of Pittsburgh" image="https://cdn.cdnlogo.com/logos/u/31/university-of-pittsburgh.svg" />
            <Card title="Swinburne University Of Technology" image="https://cdn.cdnlogo.com/logos/s/63/swinburne-university-of-technology.svg" />
            <Card title="University Of Alaska" image="https://cdn.cdnlogo.com/logos/u/35/university-of-alaska.svg" />
            <Card title="Stanford University" image="https://cdn.cdnlogo.com/logos/s/78/stanford.svg" /> */}
        </div>
    )
}

export default View