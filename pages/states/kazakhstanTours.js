import MainContainer from "../../components/mainContainer"
import Images from "next/image";
import TourSlider from "../../components/toursSlider";
import Reviews from "../../components/review";
import BlogSlider from "../../components/blogSlider";
import AboutUs from "../../components/aboutUs";
import PhotoSlider from "../../components/photoSlider";

const KazahstanTours = () =>{
    const currentState = "kazakhstan"
    return (
        <MainContainer>
            
        <div className="MainMotto" style={ {backgroundImage:   "url(/images/mainInterTours.png)"}}>

            <h1 className="mainMotto1st">Многонациональный тур</h1>
            <p className="mainMotto2nd">От степей Кыргызстана до древних городов Узбекистана — вся Центральная Азия в одном туре</p>
            <button>Explore a tour</button>

        </div>



            <div className="base">
                <div className="mainInfo">
                    <div className="mainInfoText">
                        <p>Центральная Азия — это не одна страна и не один пейзаж. Это целый мир, где за каждым перевалом открывается новая культура, а за каждым поворотом — новая история, уходящая корнями в глубь веков. Это регион, где величественные горы, древние цивилизации и кочевая свобода существуют в удивительной гармонии.</p>
                        <br></br>
                        <p>Памирское шоссе с его головокружительными перевалами, легендарные города Шёлкового пути и конные походы по бескрайним горным просторам Кыргызстана — всё это ждёт вас в одном незабываемом путешествии. Вы можете выбрать один из наших готовых многонациональных маршрутов, охватывающих лучшее сразу нескольких стран, или составить своё собственное путешествие — выбрав именно те направления и впечатления, которые близки вам. В любом случае, мы возьмём на себя всё остальное, а Центральная Азия встретит вас с искренним теплом и гостеприимством, которые невозможно забыть.</p>
                    </div>
                    <div className="mainInfoImg">
                        <Images src={"/images/interTourInfoPhoto.png"} width={450} height={550}></Images>
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
            


            <Reviews>
                
            </Reviews>
   
            


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

export default KazahstanTours