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
import AboutUsTours from '../../components/aboutUsTours'
import data from '../../database/db.json'
import { useState } from 'react'

const CultureTours = () => {
    const pathname = usePathname()
    const tourType = "citites"
    const countrySegment = pathname.split('/')[1]
    let i  = 1;
    const [infos, setInfos] = useState(data.infos)

    
    return (
        <>
        <MainContainer>

            {infos.map(info =>{
                if (i == 1){

                    i++
                    if (info.countryName == countrySegment && info.tourType == tourType){
                        return (
                            <>
                                <div className="MainMotto" style={ {backgroundImage:   `url(${info.imageMain})`}}>
                                    <h1>{info.head}</h1>
                                    <p>{info.motto}</p>
                                    <button>Подобрать путешествие</button>

                                </div>

                                <div className="base">
                                    <div className="mainInfo">
                                        <div className="mainInfoText">
                                            <p>{info.firstText1stPart}</p>
                                            <br></br>
                                            <p>{info.firstText2ndPart}</p>
                                        </div>
                                        <div className="mainInfoImg">
                                            <Images src={info.firstImg} width={450} height={550}></Images>
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    }
                }

            })}
        


        <NewHorizons countryType={countrySegment} tourType={tourType}></NewHorizons>

        <div className="base">
               <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Туры с заботой и сопровождением</h2>
                    <div class="gradient-line-right"></div>
                </div>

            {infos.map(info =>{
                if ( i == 2){
                    i++
                    if (info.countryName == countrySegment && info.tourType == tourType){
                        return(
                            <>
                                    <div className="mainInfo">
                                        <div className="mainInfoImg">
                                            <Images src={info.secondImg} width={450} height={550}></Images>
                                        </div>

                                        <div className="mainInfoText">
                                            <p>{info.secondText1stPart}</p>
                                            <br></br>
                                            <p>{info.secondText2ndPart}</p>
                                        </div>
                                    
                                    </div>
                                
                            </>
                        )
                    }
                }
            })}
        </div>

        <AboutUsTours></AboutUsTours>


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
        </MainContainer>
        

        
        </>
    )
}


export default CultureTours