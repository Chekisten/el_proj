import styles from "../styles/mainPhoto.module.css"

const MainPhoto = ({photo,header,motto}) => {
    
    return(
        <>
            <div className={styles.MainMotto} style={ {backgroundImage:   `url(${photo})`}}>
                
                    <p className={styles.mainMotto1st}>{header}</p>
                    <p className={styles.mainMotto2nd}>{motto}</p>
                    
                 
            </div>
        
        </>
    )
}


export default MainPhoto