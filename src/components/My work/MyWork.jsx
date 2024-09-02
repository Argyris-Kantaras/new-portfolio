import styles from './MyWork.module.css'

function MyWork({image,link,appName}) {
    const openLinkHandler = () =>{
        window.open(link)
    }

    
    return <div onClick={openLinkHandler} className={styles.myWork}>
        <img alt='' src={image} />
        <div className={styles.overlayName}>
            {appName}
        </div>
        </div>
}

export default MyWork;