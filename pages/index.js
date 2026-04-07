
import MainContainer from "../components/mainContainer";



const Index = () => {
    return (
        <MainContainer>
        <div className="MainMotto">
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



        
        <div className="base">
            <h2>Изучите туры по странам</h2>
            <div className="tourByStates">
                <div className="tourByStatesRow1">
                    <img src="/images/interTours.png" alt="international travel"></img>
                    <h3>Многонациональный тур</h3>
                    <button>Стрелка</button>
                </div>

                <div className="tourByStatesRow1">
                    <img src="/images/kyrgyzTours.png" alt="Kyrgyzstan travel"></img>
                    <h3>Туры по Кыргызстану</h3>
                    <button>Стрелка</button>
                </div>

                <div className="tourByStatesRow2">
                    <img src="/images/kazahTours.png" alt="Kazakhstan travel"></img>
                    <h3>Туры по Казахстану</h3>
                    <button>Стрелка</button>
                </div>

                <div className="tourByStatesRow2">
                    <img src="/images/tajikTours.png" alt="Tadjikistan travel"></img>
                    <h3>Туры по Таджикистану</h3>
                    <button>Стрелка</button>
                </div>

                <div className="tourByStatesRow2">
                    <img src="/images/uzbekTours.png" alt="Uzbekistan travel"></img>
                    <h3>Туры по Узбекистану</h3>
                    <button>Стрелка</button>
                </div>
            </div>
        </div>



        <div className="bestTours">
            <h2>Выбери свой отдых</h2>

        </div>

        <div className="reviews">
            <h2>Отзывы</h2>
        </div>

        <div className="About">
            <h2>Почему выбирают нас</h2>
        </div>

        <div className="feedback">
            <h2>Готовы к вашему новому приключению?</h2>
        </div>


        </MainContainer>

    );
};

export default Index; 