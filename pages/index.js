
import MainContainer from "../components/mainContainer";

import TourTypes from "../components/toursSlider";
import Reviews from "../components/review";


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
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Изучите туры по странам</h2>
                <div class="gradient-line-right"></div>
             </div>

            <div className="tourByStates">
                <div className="tourByStatesRow1">
                    <img src="/images/interTours.png" alt="international travel"></img>
                    <h3>Многонациональный тур</h3>
                    <button>→</button>
                </div>

                <div className="tourByStatesRow1">
                    <img src="/images/kyrgyzTours.png" alt="Kyrgyzstan travel"></img>
                    <h3>Туры по Кыргызстану</h3>
                    <button>→</button>
                </div>

                <div className="tourByStatesRow2">
                    <img src="/images/kazahTours.png" alt="Kazakhstan travel"></img>
                    <h3>Туры по Казахстану</h3>
                    <button>→</button>
                </div>

                <div className="tourByStatesRow2">
                    <img src="/images/tajikTours.png" alt="Tadjikistan travel"></img>
                    <h3>Туры по Таджикистану</h3>
                    <button>→</button>
                </div>

                <div className="tourByStatesRow2">
                    <img src="/images/uzbekTours.png" alt="Uzbekistan travel"></img>
                    <h3>Туры по Узбекистану</h3>
                    <button>→</button>
                </div>
            </div>
        </div>


        <div className="base">
            <div className="bestTours">
                <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Выбери свой отдых</h2>
                    <div class="gradient-line-right"></div>
                </div>

                <TourTypes>

                </TourTypes>



            </div>
        </div>

        <div className="base">
            <div className="reviews">
                <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Отзывы</h2>
                    <div class="gradient-line-right"></div>
                </div>
               
                <Reviews>
                </Reviews>
            </div>
        </div>

        <div className="base">
            <div className="About">

            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Почему выбирают нас?</h2>
                <div class="gradient-line-right"></div>
             </div>


                <div className="aboutBlocks">

                    <div className="aboutBlock">
                        <img src="/images/firstAbout.png" alt="social tourism"></img>
                        <div className="aboutText">
                            
                            <h3>Общественный туризм</h3>
                            <p>Мы привержены развитию общинного туризма и устойчивого туризма, который приносит пользу местным сообществам и сохраняет природную красоту и культурное наследие Центральной Азии. Проживая в местных гостевых домах, нанимая региональных гидов и минимизируя наше воздействие на окружающую среду, вы, оформив тур у нас, поддерживаете людей и места, которые посещаете.</p>
                        </div>
                    </div>

                    <div className="aboutBlock"> 
                        <div className="aboutText">
                            <h3>Экспертиза на местном уровне</h3>
                            <p>Мы — местная компания с более чем 15-летним опытом работы и глубокими знаниями местного рынка. 
                            Имея офисы и команды как в столице Бишкеке, так и в южном киргизском центре Оше, мы обеспечиваем сильную региональную сеть и можем поддержать ваше путешествие по всему Кыргызстану и Центральной Азии.</p>
                        </div>
                        <img src="/images/secondAbout.png" alt="social tourism"></img>
                    </div>

                    <div className="aboutBlock"> 
                        <img src="/images/thirdAbout.png" alt="social tourism"></img>                
                        <div className="aboutText">
                            <h3>Групповые туры</h3>
                            <p>Мы помогаем самостоятельным путешественникам найти единомышленников для совместных поездок в рамках наших туров в небольших группах. Это не только помогает разделить расходы, но и дает возможность завести новые знакомства по всему миру и создать множество новых воспоминаний.</p>
                        </div>
                    </div>

                    <div className="aboutBlock">
                        <div className="aboutText">
                            <h3>100% кастомизации</h3>
                            <p>Расскажите нам о ваших интересах, потребностях и расписании, и мы вместе разработаем индивидуальный маршрут для вас или вашей частной группы. Вы можете комбинировать мероприятия из разных туров, добавлять что-то новое или изменять расписание. Мы учтем все ваши пожелания и создадим маршрут, персонализированный именно для вас.</p>
                        </div>
                        <img src="/images/fourthAbout.png" alt="social tourism"></img>
                    </div>


                </div>


            </div>
        </div>

        <div className="base"> 
        <div className="feedback">
            
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Готовы к вашему новому приключению?</h2>
                <div class="gradient-line-right"></div>
             </div>
           
        </div>
        </div>

        </MainContainer>

    );
};

export default Index; 