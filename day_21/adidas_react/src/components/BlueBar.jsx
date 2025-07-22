import styles from '../styles/BlueBar.module.css'
import { NavLink } from 'react-router';

const BlueBar = () => {
    return (
        <div className={styles.blueBar}>
            <h2>Join Adidas and get 10% off</h2>
            <h4><NavLink to='/signup'>Sign Up for free</NavLink></h4>
        </div>
    )
}

export default BlueBar;