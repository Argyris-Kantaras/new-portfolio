import styles from './ContactMe.module.css';
import phoneIcon from '../../images/phone.png';
import linkedinIcon from '../../images/linkedin.png';
import fbIcon from '../../images/facebook.png';
import githubIcon from '../../images/github.png';
import { useEffect, useRef } from 'react';
import { useIsVisible } from '../../hooks/useIsVisible';


function ContactMe ({scrollEl,setVisibleEl}) {

        const scrollTo = useRef();
        const isVisible = useIsVisible(scrollTo)
    const goToElement = () =>{
        scrollTo.current.scrollIntoView({behavior:'smooth'})
    }

    const openLink = (link) =>{
        window.open(link)
    }

    useEffect(()=>{
        if(isVisible) setVisibleEl(3)
        if(scrollEl === 3) goToElement()
    },[scrollEl,isVisible])

    return <div >
        <h1><u>Contact Me</u></h1>
        <p>Please do not hesitate to contact me!</p>
        <div ref={scrollTo} className={styles.contactInfo}>

        <div className={styles.contactDetails}>
                <img className={styles.icon} alt='' src={phoneIcon} />
                <p>+359 877761863</p>
        </div>
        <div className={styles.contactDetails}>
                <img onClick={()=>openLink('https://www.facebook.com/argyris.kantaras.3/')} className={styles.icon} alt='' src={fbIcon} />
                <p>Argyris Kantaras</p>
        </div>
        <div className={styles.contactDetails}>
                <img onClick={()=>openLink('https://www.linkedin.com/in/anargyros-kantaras/')} className={styles.icon} alt='' src={linkedinIcon} />
                <p>linkedin.com/in/anargyros-kantaras</p>
        </div>
        <div className={styles.contactDetails}>
                <img onClick={()=>openLink('https://www.github.com/Argyris-Kantaras')} className={styles.icon} alt='' src={githubIcon} />
                <p>github.com/Argyris-Kantaras</p>
        </div>
        </div>
    </div>;
}

export default ContactMe;