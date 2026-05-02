

const MainPhoto = ({photo,header,motto}) => {
    
    return(
        <>
            <div className="MainMotto" style={ {backgroundImage:   `url(${photo})`}}>
                <p>{header}</p>
                <p>{motto}</p>
                <button>Подобрать путешествие</button>

            </div>
        
        </>
    )
}


export default MainPhoto