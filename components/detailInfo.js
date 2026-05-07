import { useState } from "react";
import styles from "../styles/detailInfo.module.css"
import data from "../database/db.json"
import Image from "next/image"



const DetailInfo = ({uniqName}) => {
    let typeButton = "summary";
    
    const [detailButton, setDetailButton] = useState(typeButton)
    const [steps, setSteps] = useState(data.steps)
    const [tours, setTours] = useState(data.tours)
    const [tourDetails, setTourDetails] = useState(data.tourDetail)
    let z = 1;
    let last = steps.length
    function sortByDay() {
        
        if (steps.length > 1 ){

            for (let i = 0; i < steps.length -1; i++) {
                if (steps[i].day > steps[i+1].day){
                    let temp = steps[i];
                    steps[i] = steps[i+1];
                    steps[i+1] = temp;
                } 

                for (let j = steps.length - 1; j > 0; j--){
                    if (steps[j].day < steps[j-1].day){
                        let temp = steps[j];
                        steps[j] = steps[j-1];
                        steps[j-1] = temp;
                    }
                }
            }     
        }
    }
    sortByDay()

   
    return (
        <>
            <div className="base">
                <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Подробная информация</h2>
                    <div class="gradient-line-right"></div>
                </div>

                
            <div className={styles.mainDetail}>

                <div className={styles.navbar}>
                        <button onClick={() => setDetailButton("summary")}>summary</button>
                        <button onClick={() => setDetailButton("way")}>way</button>
                        <button onClick={() => setDetailButton("info")}>info</button>
                        <button onClick={() => setDetailButton("dates")}>dates</button>
                        <button onClick={() => setDetailButton("price")}>price</button>
                </div>


                    {
                        detailButton == "summary" && 
                        steps.map(step => {
                            if (step.uniqName == uniqName) {
                                if ( z == 1){
                                    z++
                                    return (
                                        <>
                                        <div className={styles.step}>
                                            <div className={styles.stepLeft}>
                                                <Image src={step.img} width={440} height={330}></Image>
                                            </div>
                                            <div className={styles.stepMidFirst}>
                                                <div className={styles.stringTransparent}></div>
                                                <div className={styles.circle}>
                                                    
                                                    <Image src={step.icon} height={50} width={50}></Image>
                                                </div>
                                                <div className={styles.connectDown}></div>
                                                <div className={styles.stringDown}></div>
                                                
                                            </div>
                                            <div className={styles.stepRight}>
                                                <h3>Day {step.day}</h3>
                                                <br></br>
                                                <h3>{step.header}</h3>
                                                <p>{step.text}</p>
                                                <p>смайлы</p>
                                            </div>
                                        </div>
                                        
                                        </>
                                    )
                                }
                                if ( z == last) {
                                    return (
                                        <>
                                        <div className={styles.step}>
                                            <div className={styles.stepLeft}>
                                                <Image src={step.img} width={440} height={330}></Image>
                                            </div>
                                            <div className={styles.stepMidLast}>
                                                <div className={styles.stringUp}></div>
                                                <div className={styles.connectUp}></div>
                                                <div className={styles.circle}>
                                                    <p>{step.icon}</p>
                                                </div>
                                                <div className={styles.stringTransparent}></div>
                                            </div>
                                            <div className={styles.stepRight}>
                                                <h3>Day {step.day}</h3>
                                                <br></br>
                                                <h3>{step.header}</h3>
                                                <p>{step.text}</p>
                                                <p>смайлы</p>
                                            </div>
                                        </div>
                                        
                                        </>
                                    )
                                }
                                z++
                                return (
                                    <>
                                    <div className={styles.step}>
                                        <div className={styles.stepLeft}>
                                            <Image src={step.img} width={440} height={330}></Image>
                                        </div>
                                        <div className={styles.stepMid}>
                                                
                                                <div className={styles.stringUp}></div>
                                                <div className={styles.connectUp}></div>
                                                
                                                <div className={styles.circle}>
                                                    <p>{step.icon}</p>
                                                </div>

                                                <div className={styles.connectDown}></div>
                                                <div className={styles.stringDown}></div>
                                        </div>
                                        <div className={styles.stepRight}>
                                            <h3>Day {step.day}</h3>
                                            <br></br>
                                            <h3>{step.header}</h3>
                                            <p>{step.text}</p>
                                            <p>смайлы</p>
                                        </div>
                                    </div>
                                    
                                    </>
                                )
                            }
                        })
                    }

                    {   
                        detailButton == "way" &&
                        <div className={styles.wayBlock}>
                            <div className={styles.wayInfo}>
                                {
                                    steps.map(step => {
                                        if (step.uniqName == uniqName){
                                            return (
                                                <>
                                                    <div className={styles.wayInfoEl}>
                                                        <p>{step.icon}</p>
                                                        <p>day {step.day}</p>
                                                        <p>{step.city}</p>
                                                    </div>
                                                </>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <div className={styles.wayMap}>
                                {
                                    tours.map(tour => {
                                        if (tour.uniqName == uniqName){
                                            return(
                                                <>
                                                <h2>Тут будет карта гугла</h2>
                                                
                                                <iframe src={tour.map} width="640" height="480"></iframe>
                                                </>
                                            )
                                        }
                                    })
                                }

                            </div>
                        </div>
                        
                        
                        
                        
                    }            

                    {
                        detailButton == "info" &&
                        tours.map(tour => {
                            if (tour.uniqName == uniqName){
                                return (
                                    <div className={styles.detailInfo}>
                                        <p><b>Место назначение:</b>{tour.destination}</p>
                                        <p><b>Продолжительность:</b>{tour.duration} {tour.time} / {tour.nights}</p>
                                        <p><b>Проживание:</b>{tour.hotel}</p>
                                        <p><b>{tour.typeOfRoute}</b>{tour.distance}</p>
                                        <p><b>Максимальная/минимальная высота: </b>{tour.tourHeight}</p>
                                        <p><b>Возможные месяцы для похода: </b>{tour.probablyMonths}</p>
                                        <p><b>Уровень сложности:</b>{tour.level}</p>
                                        <p><b>Начальная/конечная точка:</b>{tour.startPoint}, {tour.endPoint}</p>
                                        <p><b>Транспортные услуги:</b>{tour.transport}</p>
                                    </div>
                                )
                            }
                        })
                    } 

                    {
                        detailButton == "price" &&
                        <>
                            <div className={styles.tourDetail}>
                                {tourDetails.map(tourDetail => {
                            if (tourDetail.uniqName == uniqName){
                                return (
                                    <>
                                        <div className={styles.tourDetailEl}>
                                            <div className={styles.tourDetailSmile}>
                                                <p>{tourDetail.smile}</p>
                                            </div>
                                            <div className={styles.tourDetailText}>
                                                <h3>{tourDetail.header}</h3>
                                                <p>{tourDetail.text}</p>

                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })}
                            </div>
                        </>
                        
                    }
                    

                </div>
                <button className={styles.regButton}>Заполнить заявку</button>
            </div>
        </>
    )
}


export default DetailInfo