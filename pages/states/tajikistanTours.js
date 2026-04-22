import MainContainer from "../../components/mainContainer"
import Images from "next/image";
import TourSlider from "../../components/toursSlider";
import Reviews from "../../components/review";
import BlogSlider from "../../components/blogSlider";
import AboutUs from "../../components/aboutUs";
import PhotoSlider from "../../components/photoSlider";

const TajikistanTours = () =>{
    const currentState = "tadjikistan"
    return (
        <MainContainer>
            
        <div className="MainMotto" style={ {backgroundImage:   "url(/images/mainTajikTours.png)"}}>
                <h1>Туры по Таджикистану</h1>
                <p>Исследуйте Памирское шоссе и потрясающие горы Таджикистана.</p>
                <button>Подобрать путешествие</button>

            </div>



            <div className="base">
                <div className="mainInfo">
                    <div className="mainInfoText">
                        <p>Откройте для себя Таджикистан, родину одного из самых захватывающих автомобильных маршрутов в мире: Памирского шоссе. Протяженностью более 1200 км между городами Ош в Кыргызстане и Душанбе в Таджикистане, путешествие по Памирскому шоссе проходит через дикую природу, от высокогорных пустынь до заснеженных гор, пересекая перевалы высотой более 4000 метров.</p>
                        <br></br>
                        <p>Наши специалисты в Таджикистане помогут вам исследовать не только Памирские горы и Памирское шоссе (в индивидуальном или групповом туре), но и потрясающие горы Фанн. Откройте для себя этот прекрасный и малоизвестный уголок мира вместе с нами!</p>
                    </div>
                    <div className="mainInfoImg">
                        <Images src={"/images/tajikTourInfoPhoto.png"} width={450} height={550}></Images>
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
            <TourSlider state={currentState}>

            </TourSlider>




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
                    <summary>Общая информация</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Страны, для которых виза не требуется</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Сколько денег мне следует взять с собой?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Размещение</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Туалеты</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Душ</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Обеды</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Вода</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Покупки</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Походы и треккинг</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Электричество</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Интернет в пути</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Рекомендуемый список вещей для поездки по Памирскому шоссе</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
            </div>
        </div>

        </MainContainer>
    )
}

export default TajikistanTours