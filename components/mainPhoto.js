

const MainPhoto = ({photo}) => {
    
    return(
        <>
            <div className="MainMotto" style={ {backgroundImage:   `url(${photo})`}}>
                <b>Почувствуйте мир</b>
                <p>А не просто посмотрите его</p>
                <button>Подобрать путешествие</button>

            </div>

            <div className="mainInfo">
                <main >
                    <h2>Peak & Path Adventures</h2>
                    <p>We are a boutique adventure travel company specialising in immersive outdoor experiences across Central Asia. Whether you’re trekking through alpine meadows, exploring remote mountain villages, or crossing golden deserts, we design journeys that go beyond the viewfinder. Our expert local guides blend deep regional knowledge with a passion for sustainable travel, ensuring every step is safe, meaningful, and unforgettable. From challenging high‑altitude treks to cultural hikes along the Silk Road, we tailor adventures to your pace and passion. Join us — and discover the soul of the mountains, one path at a time.</p>
                </main>
            </div>
        
        </>
    )
}


export default MainPhoto