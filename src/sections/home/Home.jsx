import {TypeAnimation} from 'react-type-animation';
import styles from './Home.module.css';
const allSkills = ['React.js ', 'Redux ', 'JavaScript ', 'Python ','HTML ', 'CSS ' ]

function Home (props) {

return <div className={styles.home}>
    <div className={styles.intro}>
    <h1 className={styles.name}>I am Anargyros Kantaras</h1>
    <TypeAnimation  sequence={allSkills} speed={300} repeat={Infinity} style={{fontSize:'2em'}} /> 
    </div>
</div>
}
export default Home;