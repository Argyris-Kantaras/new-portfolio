import { useEffect, useRef } from 'react';
import styles from './Header.module.css';

function Header ({scrollEl,setScrollEl,visibleEl}) {
    const homeRef = useRef();
    const aboutRef = useRef();
    const portfolioRef = useRef();
    const contactRef = useRef();

    useEffect(()=>{
        visibleEl === 0 ? homeRef.current.style.color = 'blue' : homeRef.current.style.color = 'white';
        visibleEl === 1 ? aboutRef.current.style.color = 'blue' : aboutRef.current.style.color = 'white';
        visibleEl === 2 ? portfolioRef.current.style.color = 'blue' : portfolioRef.current.style.color = 'white';
        visibleEl === 3 ? contactRef.current.style.color = 'blue' : contactRef.current.style.color = 'white';
    },[visibleEl])

    return <header className={styles.header}>
        <nav>
            <ul className={styles.navList}>
                <li ref={homeRef} onClick={()=>setScrollEl(0)} className={styles.navLink}>HOME <div className={styles.underline}></div></li>
                <li ref={aboutRef} onClick={()=>setScrollEl(1)} className={styles.navLink}>ABOUT<div className={styles.underline}></div></li>
                <li ref={portfolioRef} onClick={()=>setScrollEl(2)} className={styles.navLink}>PORTFOLIO<div className={styles.underline}></div></li>
                <li ref={contactRef} onClick={()=>setScrollEl(3)} className={styles.navLink}>CONTACT<div className={styles.underline}></div></li>
            </ul>
        </nav>
    </header>
}

export default Header