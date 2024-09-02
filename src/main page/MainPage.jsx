import { useState } from 'react'
import Header from '../components/Header/Header'
import Home from '../sections/home/Home'
import styles from './MainPage.module.css'
import AboutMe from '../sections/about me/AboutMe'
import Resume from '../sections/resume/Resume'
import Portfolio from '../sections/portfolio/Portfolio'
import ContactMe from '../sections/contact/ContactMe'

function MainPage () {
    const [scrollEl,setScrollEl] = useState(0)
    const [visibleEl,setVisibleEl] = useState(0)
    return <div className={styles.mainPage}>
      <Header visibleEl={visibleEl} setScrollEl = {setScrollEl}  scrollEl = {scrollEl}/>
      <Home setVisibleEl={setVisibleEl} setScrollEl = {setScrollEl} scrollEl = {scrollEl}/>
      <AboutMe setVisibleEl={setVisibleEl} setScrollEl = {setScrollEl} scrollEl = {scrollEl}/>
      <Resume/>
      <Portfolio setVisibleEl={setVisibleEl} setScrollEl = {setScrollEl} scrollEl = {scrollEl}/>
      <ContactMe setVisibleEl={setVisibleEl} setScrollEl = {setScrollEl} scrollEl = {scrollEl}/>
    </div>
}

export default MainPage