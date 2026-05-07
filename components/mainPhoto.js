import styles from "../styles/mainPhoto.module.css"

const MainPhoto = ({photo,header,motto}) => {
    
    return(
        <>
            <div className="MainMotto" style={ {backgroundImage:   `url(${photo})`}}>
                
                    <p className="mainMotto1st">{header}</p><br></br>
                    <p className="mainMotto2nd">{motto}</p>
                    
                
            </div>
        
        </>
    )
}


export default MainPhoto