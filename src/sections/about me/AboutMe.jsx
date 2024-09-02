import styles from './AboutMe.module.css';
import { useEffect, useRef } from 'react';
import Skills from '../../components/Skills/Skills';
import { useIsVisible } from '../../hooks/useIsVisible';

function AboutMe ({scrollEl,setVisibleEl}) {

    const scrollTo = useRef();
    const isVisible = useIsVisible(scrollTo)
    const goToElement = () =>{
        scrollTo.current.scrollIntoView({behavior:'smooth'})
    }

    useEffect(()=>{
        if(isVisible) setVisibleEl(1)
        if(scrollEl === 1) goToElement()
    },[scrollEl,isVisible])

    return <div  className={styles.aboutMe}>
        <div className={styles.windowSection}>
            <Skills/>
            <div ref={scrollTo} className={styles.aboutMeSide}>
                <h2 ><u>About me</u></h2>
                
                <div>
                    <div>I am a full stack self taught divrogrammer. Already made plenty of projects amd solved many problems to be
                    considered a good developer. 
                    Knowing very well that tech moves in fast pace, I always keep myself updated and learn new technologies in order to keep
                    up and productive!</div>
                    <div>Started with frontend back in 2019 gives me a good experience, and 2 years later I got into the backend as well
                    with Node.js at first and then Python.
                    Love the way software works and the way we solve problems with it.</div>
                    <div>I found out that backend suits me better than frontend because I mostly pay attention on the practical side of things 
                    rather than design, without meaning that I cannot be efficient in frontend as well.
                    </div>
                    <div>Having some good communication skills and love to work with others, in a great team I shall be very productive and 
                    helpful.</div>
                </div>
            </div>
        </div>
    </div>
}

export default AboutMe;