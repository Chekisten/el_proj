import MainContainer from "../../components/mainContainer"
import Images from "next/image";
import TourTypes from "../../components/toursSlider";
import Reviews from "../../components/review";
import BlogSlider from "../../components/blogSlider";
import AboutUs from "../../components/aboutUs";
import PhotoSlider from "../../components/photoSlider";

const UzbekistanTours = () => {
    const currentState = "Uzbekistan"
    return (
        <MainContainer>
            
        <div className="MainMotto" style={ {backgroundImage:   "url(/images/mainUzbekTours.png)"}}>
                <h1>Туры по Узбекистану</h1>
                <p>Откройте для себя великую историю Центральной Азии</p>
                <button>Подобрать путешествие</button>

            </div>



            <div className="base">
                <div className="mainInfo">
                    <div className="mainInfoText">
                        <p>Присоединяйтесь к нам в незабываемом путешествии в Узбекистан, страну, где древняя история и современная культура сливаются воедино. Расположенный в самом сердце Центральной Азии, Узбекистан — это сокровищница архитектурных шедевров, оживленных базаров и теплого гостеприимства.</p>
                        <br></br>
                        <p>Это возможность прикоснуться к подлинному величию Востока, где каждый город раскрывает свою неповторимую историю. В Самарканде вас очарует легендарная площадь Регистан — блистательное сердце древнего города, окружённое изысканными зданиями с завораживающей голубой черепицей, хранящими дух великой эпохи. Бухара перенесёт вас в атмосферу средневековья, где среди старинных улиц возвышаются знаменитый минарет Калон и древняя крепость Арк — символы богатого культурного наследия. Хива откроет перед вами сказочный мир Ичан-Калы, а Ташкент впечатлит гармоничным сочетанием истории, культуры и современного ритма жизни, дополняя путешествие особой атмосферой уюта, гостеприимства и искреннего тепла узбекского народа.</p>
                    </div>
                    <div className="mainInfoImg">
                        <Images src={"/images/uzbekTourInfoPhoto.png"} width={450} height={550}></Images>
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
            <TourTypes state={currentState}>

            </TourTypes>




            </div>
        </div>
        <div className="base">
                <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Откройте новые горизонты глубже</h2>
                    <div class="gradient-line-right"></div>
                </div>
            <BlogSlider blogState={currentState}></BlogSlider>
        </div>

        <div className="base">
                <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Почему выбирают нас</h2>
                    <div class="gradient-line-right"></div>
                </div>
                <AboutUs></AboutUs>
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
                <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Атмосфера путешествий</h2>
                    <div class="gradient-line-right"></div>
                </div>

                <PhotoSlider countryPhoto={currentState}></PhotoSlider>
        </div>


        <div className="base">
                  <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Часто задаваемые вопросы</h2>
                    <div class="gradient-line-right"></div>
                </div>
            <div className="FAQBlock">
                <details>
                    <summary>Лучшее время для посещения</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Транспорт и авиарейсы</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Информация о визах</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Предложения по маршруту</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Проживание и бюджет</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Культура и язык</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Деньги</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Интернет</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Охрана труда и техника безопасности</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
            </div>
        </div>

        </MainContainer>
    )
}

export default UzbekistanTours