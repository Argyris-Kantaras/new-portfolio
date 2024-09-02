import styles from './ProgressBar.module.css';

function ProgressBar ({progress}) {
    return <div className={styles.progressBase}>
        <div className={styles.progress} style={{width:`${progress * 10}%`}}></div>
    </div>
}

export default ProgressBar;