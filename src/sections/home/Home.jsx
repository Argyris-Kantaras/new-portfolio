import {TypeAnimation} from 'react-type-animation';
import styles from './Home.module.css';
import { useEffect, useRef } from 'react';
import { useIsVisible } from '../../hooks/useIsVisible';
const allSkills = ['React.js ', 'Redux ', 'JavaScript ', 'Python ','HTML ', 'CSS ' ]

function Home ({setVisibleEl,scrollEl}) {

    const scrollTo = useRef();
    const isVisible = useIsVisible(scrollTo)
    const goToElement = () =>{
        scrollTo.current.scrollIntoView({behavior:'smooth'})
    }

    useEffect(()=>{
        if(isVisible) setVisibleEl(0)
        if(scrollEl === 0) goToElement()
    },[scrollEl,isVisible])

return <div ref={scrollTo} className={styles.home}>
    <div className={styles.intro}>
    <h1  className={styles.name}>I am Anargyros Kantaras</h1>
    <TypeAnimation  sequence={allSkills} speed={300} repeat={Infinity} style={{fontSize:'2em'}} /> 
    </div>
</div>
}
export default Home;