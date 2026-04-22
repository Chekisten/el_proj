'use client'

import MainContainer from '../../components/mainContainer'
import MainPhoto from '../../components/mainPhoto'
import styles from '../../styles/cultureTours.module.css'
import { usePathname } from "next/navigation"
import Images from "next/image";
import NewHorizons from '../../components/newHorizons'
import AboutUs from '../../components/aboutUs'
import TourSlider from '../../components/toursSlider'
import Reviews from '../../components/review'

const CultureTours = () => {
    const pathname = usePathname()
    const countrySegment = pathname.split('/')[1]

    //<MainContainer></MainContainer> обернуть всё в контейнре
    return (
        <>
        <h1><div>Раздел: {countrySegment}</div></h1>
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

        <NewHorizons countryType={countrySegment}></NewHorizons>

        <div className="base">
               <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Туры с заботой и сопровождением</h2>
                    <div class="gradient-line-right"></div>
                </div>
            <div className="mainInfo">
                <div className="mainInfoImg">
                    <Images src={"/images/interTourInfoPhoto.png"} width={450} height={550}></Images>
                </div>
                <div className="mainInfoText">
                    <p>Центральная Азия — это не одна страна и не один пейзаж. Это целый мир, где за каждым перевалом открывается новая культура, а за каждым поворотом — новая история, уходящая корнями в глубь веков. Это регион, где величественные горы, древние цивилизации и кочевая свобода существуют в удивительной гармонии.</p>
                    <br></br>
                    <p>Памирское шоссе с его головокружительными перевалами, легендарные города Шёлкового пути и конные походы по бескрайним горным просторам Кыргызстана — всё это ждёт вас в одном незабываемом путешествии. Вы можете выбрать один из наших готовых многонациональных маршрутов, охватывающих лучшее сразу нескольких стран, или составить своё собственное путешествие — выбрав именно те направления и впечатления, которые близки вам. В любом случае, мы возьмём на себя всё остальное, а Центральная Азия встретит вас с искренним теплом и гостеприимством, которые невозможно забыть.</p>
                </div>
            </div>
        </div>



        <div className="base">
            <div className={styles.newHorizons}>
                <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Popular tours of {countrySegment}</h2>
                    <div class="gradient-line-right"></div>
                </div>
                
                <TourSlider state={countrySegment}></TourSlider> 

            </div>
        </div>

        <Reviews></Reviews>

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
        
        

        <div style={{textDecoration:"line-through"}}>Фотография с мотто</div>
        <div style={{textDecoration:"line-through"}}>описание</div>
        <div style={{textDecoration:"underline"}} >новые горизонты блоги скорее всего новый модуль</div>
        <div style={{textDecoration:"underline"}} >туры с заботой и сопровжданием. новый модуль со своей базой данных (массив данных)</div>
        <div>абэоут уже есть модуль тут нужен новый модуль, по типу абоуэта, просто изменен ненмного</div>
        <div style={{textDecoration:"line-through"}}>поплуряные туры есть модуль</div>
        <div style={{textDecoration:"line-through"}}>отзывы есть модуль просто вставить</div>
        <div style={{textDecoration:"line-through"}}> вопрос ответ без модуля</div>

        
        </>
    )
}


export default CultureTours