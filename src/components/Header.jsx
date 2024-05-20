import styles from './Header.module.css';

function Header (props) {
    return <header className={styles.header}>
        <nav>
            <ul className={styles.navList}>
                <li onClick={()=>props.setScrollEl(0)} className={styles.navLink}>HOME</li>
                <li onClick={()=>props.setScrollEl(1)} className={styles.navLink}>WORK</li>
                <li className={styles.navLink}>ABOUT</li>
                <li className={styles.navLink}>CONTACT</li>
            </ul>
        </nav>
    </header>
}

export default Header