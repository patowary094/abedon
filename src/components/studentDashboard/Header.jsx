import styles from './header.module.css'
import {BellIcon, MenuIcon, UserIcon } from '@heroicons/react/solid'

// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import { Dropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="https://yaledailynews.com/wp-content/uploads/2018/08/Jack-Adam-Staff-Illustrator-open-letter-anonymous.jpg" />
                <h1>Abedon</h1>
            </div>
            <div className={styles.navb}>
                <Dropdown>
                    <Dropdown.Toggle className={styles.navBtn} id="dropdown-basic">
                        <BellIcon className={styles.icons} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className={styles.navBtn} id="dropdown-basic">
                        <UserIcon className={styles.icons} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className={styles.navBtn} id="dropdown-basic">
                        <MenuIcon className={styles.icons} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header