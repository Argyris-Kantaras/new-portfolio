import ProgressBar from '../Progr. bar/ProgressBar'
import styles from './Skills.module.css'
import mmySelf from '../../images/myself.jpg'


function Skills (){
   return <div className={styles.skillsSide}>
                <div className={styles.personalDetailsMain}>
                <img className={styles.profileImg} src={mmySelf}/>
                <div className={styles.personalDetailsSecondary}>
                <div className={styles.personalDetails}>Name:<span className={styles.details}> Anargyros Kantaras</span></div>
                <div className={styles.personalDetails}>Profile:<span className={styles.details}> Full Stack developer</span></div>
                <div className={styles.personalDetails}>Email:<span className={styles.details}> anargyros.kantaras@gmail.com</span></div>
                <div className={styles.personalDetails}>Mobile:<span className={styles.details}> +359 877761863</span></div>
                </div>
                </div>
                <h3>Skills</h3>
                <ul className={styles.skillsList}>
                    <li></li>
                    <li>JavaScript/React.js/Node.js</li>
                <ProgressBar progress={8}/>
                    <li>Python</li>
                    <ProgressBar progress={6}/>
                    <li>Redux</li>
                    <ProgressBar progress={6}/>
                    <li>CSS</li>
                    <ProgressBar progress={7}/>
                    <li>HTML5</li>
                    <ProgressBar progress={8}/>
                </ul>
                <h3>Others</h3>
                <ul className={styles.othersList}>
                <li>Java</li>
                <li>OOP</li>
                <li>MySQL</li>
                <li>Git</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>Rest APIs</li>
                <li>Context API</li>
                </ul>
            </div>
}

export default Skills;