import MainContainer from "../../components/mainContainer"
import Images from "next/image";
import TourTypes from "../../components/toursSlider";
import Reviews from "../../components/review";
import BlogSlider from "../../components/blogSlider";
import AboutUs from "../../components/aboutUs";
import PhotoSlider from "../../components/photoSlider";

const KyrgyzstanTours = () => {
    const currentState = "Kyrgyzstan"
    return (
        <MainContainer>
            
        <div className="MainMotto" style={ {backgroundImage:   "url(/images/mainKyrgyzTours.png)"}}>
                <h1>Туры по Кыргызстану</h1>
                <p>Откройте для себя сердце центральной Азии вместе с Кыргызским горным туризмоми кочевой культурой </p>
                <button>Подобрать путешествие</button>

            </div>



            <div className="base">
                <div className="mainInfo">
                    <div className="mainInfoText">
                        <p>Отправьтесь в незабываемое путешествие по величественным горам Кыргызстана, его чистейшим высокогорным озерам и яркой кочевой культуре.  Наши тщательно разработанные туры предлагают захватывающие и аутентичные впечатления, демонстрирующие природную красоту страны и ее богатое культурное наследие.</p>
                        <br></br>
                        <p>Расположенный на перекрестке Центральной Азии, Кыргызстан — это захватывающие ворота в богатую и разнообразную историю, кухню и природу региона. В наши туры включены некоторые из лучших мест для посещения в Кыргызстане, такие как Иссык-Кульская область с ее высокогорными озерами и Тянь-Шаньскими горами, впечатляющие Памирско-Алайские горные вершины, Нарын с караван-сараем Таш-Рабат Шелкового пути, башня Бурана XI века и оживленная столица Бишкек. Каждый регион Кыргызстана открывает окно в традиционную кыргызскую жизнь, с гостеприимными общинами, живописными тропами и потрясающими горными пейзажами.</p>
                    </div>
                    <div className="mainInfoImg">
                        <Images src={"/images/kyrgyzTourInfoPhoto.png"} width={450} height={550}></Images>
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
                    <summary>Нужна ли мне виза для посещения Кыргызстана?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Нужны ли мне какие-либо специальные разрешения для посещения определённых районов или совершения пеших походов в Кыргызстане?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Безопасно ли посещать Кыргызстан?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Когда лучше всего посетить Кыргызстан?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Какая погода бывает в Кыргызстане в летний сезон треккинга?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Можно ли путешествовать по Кыргызстану зимой? Предлагаются ли зимние туры по Кыргызстану?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Как мне обеспечить себе подлинное общение с Кыргызскими кочевниками?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Какова традиционная кухня Кыргызстана?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Подходит ли Кыргызстан для вегетарианцев?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Как добраться до Кыргызстана? Какие международные рейсы доступны в Кыргызстан?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Основная информация о Кыргызстане</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Какие виды размещения доступны в Кыргызстане?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
                <details>
                    <summary>Какие лучшие маршруты для треккинга и пеших походов в Кыргызстане?</summary>
                    <p>Отдых на берегу озера — это не только свежий воздух и красивые виды, но и шанс поймать свою удачу, как ту самую золотую рыбку из сказки</p>
                </details>
                <div className="FaqLine"></div>
            </div>
        </div>

        </MainContainer>
    )
}

export default KyrgyzstanTours

