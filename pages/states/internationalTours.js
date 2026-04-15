import MainContainer from "../../components/mainContainer"
import Images from "next/image";
import TourTypes from "../../components/toursSlider";
import Reviews from "../../components/review";
import BlogSlider from "../../components/blogSlider";
import AboutUs from "../../components/aboutUs";


const InternationalTours = () =>{
    const currentState = "International"
    return (
        <MainContainer>
            
        <div className="MainMotto" style={ {backgroundImage:   "url(/images/mainInterTours.png)"}}>
                <h1>Многонациональный тур</h1>
                <p>От степей Кыргызстана до древних городов Узбекистана — вся Центральная Азия в одном туре</p>
                <button>Подобрать путешествие</button>

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
        </div>


        <div className="base">
                  <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Часто задаваемые вопросы</h2>
                    <div class="gradient-line-right"></div>
                </div>
        </div>

        </MainContainer>
    )
}

export default InternationalTours