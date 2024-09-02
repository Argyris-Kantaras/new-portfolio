import { useEffect, useRef } from 'react';
import styles from './Portfolio.module.css';
import MyWork from '../../components/My work/MyWork';
import recipesImg from '../../images/recipes.jpg'
import solarImg from '../../images/power-of-sun.jpg'
import weatherImg from '../../images/weather-app.jpg'
import moviesImg from '../../images/movies.jpg'
import { useIsVisible } from '../../hooks/useIsVisible';

function Portfolio ({scrollEl,setVisibleEl}) {
    const scrollTo = useRef();
    const isVisible = useIsVisible(scrollTo)
    const goToElement = () =>{
        scrollTo.current.scrollIntoView({behavior:'smooth'})
    }
    useEffect(()=>{
        if(isVisible) setVisibleEl(2)
        if(scrollEl === 2) goToElement()
    },[scrollEl,isVisible])


    return<div  className={styles.workSection}>
        <h1 ref={scrollTo}><u>Portfolio</u></h1>
        <p>Get a glimpse of my work</p>
        <div>
            <MyWork link={'https://rec-ipes.netlify.app/'} image={recipesImg} appName={'Recipes App'}/>
            <MyWork link={'https://power-of-sun.netlify.app/'} image={solarImg} appName={'Power-Of-Sun App'}/>
            <MyWork link={'https://movies-shelf.netlify.app/'} image={moviesImg} appName={'Movies Shelf App'}/>
            <MyWork link={'https://worldwide-weather-forecasts.netlify.app/'} image={weatherImg} appName={'Weather Forecasts App'}/>
        </div>
    </div>
};

export default Portfolio;