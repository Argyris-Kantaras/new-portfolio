import styles from './Resume.module.css';

function Resume () {
    return <div>
        <h1><u>Resume</u></h1>
        <p>A brief contact of my experience</p>
        <div className={styles.resume}>
        <div className={styles.experience}>
            <div>
                <h2>Full Stack Developer</h2>
                <h4>2019-present</h4>
                <p>Remote</p>
                <ul>
                    <li>Working on full scale applications from start to finish</li>
                    <li>Working on previously made projects for development/debugging/restore</li>
                    <li>Dealing directly with clients and understand their needs</li>
                    <li>Developing communication skills since I deal with many people</li>
                </ul>
            </div>
        
            <div>
                <h2>Frontend developer</h2>
                <h4>2021-2022</h4>
                <p>3Ws-Malta</p>
                <ul>
                    <li>Worked on full scale projects</li>
                    <li>Working on previously made projects for development/debugging/restore</li>
                    <li>Improved communication and teamwork</li>
                    <li>Had the chance to work and debug the work of others</li>
                </ul>
            </div>
            <div>
                <h2>Frontend developer</h2>
                <h4>2020-2021</h4>
                <p>m7Alfa-Malta</p>
                <ul>
                    <li>Worked on full scale applications </li>
                    <li>Working on previously made projects for development/debugging/restore</li>
                    <li>Built reusable components</li>
                    <li>Improved communication and teamwork</li>
                    <li>Worked a lot on HTML and Vanilla JavaScript</li>
                </ul>
            </div>
        </div>
        <div className={styles.education}>
            <h1>Education</h1>
           <div>
                <h2>Certificate of Basic education,React.js fundamentals</h2>
                <h4>2020</h4>
                <p>Udemy,Online</p>
                <p className={styles.educationDetails}>Learned all one should know about React.js that is required to build an application.
                    Components,Hooks,Functional and OOP, Animations, Lifecycle etc.
                </p>
            </div>
            <div>
                <h2>Certificate of Basic education,HTML,CSS,JavaScript fundamentals</h2>
                <h4>2019</h4>
                <p>Udemy,Online</p>
                <p className={styles.educationDetails}>Learned about the core foundation of the web and the way it works.
                    Also HTML, CSS and JavaScript and the way to work on them and combine them.
                </p>
            </div>
        </div>
    </div>
    </div>
}

export default Resume;