import { useState } from "react";
import styles from "../styles/detailInfo.module.css"
import data from "../database/db.json"
import Image from "next/image"
import FuncIcon from "./funcIcon";




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
                                                    <FuncIcon iconName={step.icon}></FuncIcon>
                                                    
                                                </div>
                                                <div className={styles.connectDown}></div>
                                                <div className={styles.stringDown}></div>
                                                
                                            </div>
                                            <div className={styles.stepRight}>
                                                <h3>Day {step.day}</h3>
                                                <br></br>
                                                <h3>{step.header}</h3>
                                                <p>{step.text}</p>
                                                <b>добавить разделение массивов смайлов Изменить подсчет переменной last и исправить сортировку на числовую</b>
                                            </div>
                                        </div>
                                        
                                        </>
                                    )
                                }console.log(last)
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
                                                     <FuncIcon iconName={step.icon}></FuncIcon>
                                                </div>
                                                <div className={styles.stringTransparent}></div>
                                            </div>
                                            <div className={styles.stepRight}>
                                                <h3>Day {step.day}</h3>
                                                <br></br>
                                                <h3>{step.header}</h3>
                                                <p>{step.text}</p>
                                                <b>добавить разделение массивов смайлов</b>
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
                                                     <FuncIcon iconName={step.icon}></FuncIcon>
                                                </div>

                                                <div className={styles.connectDown}></div>
                                                <div className={styles.stringDown}></div>
                                        </div>
                                        <div className={styles.stepRight}>
                                            <h3>Day {step.day}</h3>
                                            <br></br>
                                            <h3>{step.header}</h3>
                                            <p>{step.text}</p>
                                            <b>добавить разделение массивов смайлов</b>
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
                                                        <FuncIcon iconName={step.icon}></FuncIcon>
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
                                <div className={styles.wayMapMap}>
                                    {
                                        tours.map(tour => {
                                            if (tour.uniqName == uniqName){
                                                return(
                                                    <>
                                                    
                                                    
                                                    
                                                    <iframe src={tour.map} width="640" height="480"></iframe>
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <div className={styles.wayMapInfo}>
                                    {
                                        steps.map(step => {
                                            if (step.uniqName == uniqName){
                                                return (
                                                    <>
                                                        
                                                             <FuncIcon iconName={step.icon}></FuncIcon>
                                                            <p>day {step.day}</p>
                                                            <p>{step.city}</p>
                                                    
                                                    </>
                                                )
                                            }
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                        
                        
                        
                        
                    }            

                    {
                        detailButton == "info" &&
                        tours.map(tour => {
                            if (tour.uniqName == uniqName){
                                return (
                                    <div className={styles.detailInfo}>
                                        <div className={styles.detailInfoEl}>
                                            <div className={styles.detailInfoElIcon}>
                                                <p><FuncIcon iconName={"place2"}></FuncIcon></p> 
                                            </div>
                                            <div className={styles.detailInfoElText}>
                                                <h4>Место назначение</h4>
                                                <p>{tour.destination}</p>
                                            </div>
                                        </div>

                                        <div className={styles.detailInfoEl}>
                                            <div className={styles.detailInfoElIcon}>
                                                <p><FuncIcon iconName={"home"}></FuncIcon></p>
                                            </div>
                                            <div className={styles.detailInfoElText}>
                                                <h4>Проживание</h4>
                                                <p>{tour.hotel}</p>
                                            </div>
                                        </div>

                                        <div className={styles.detailInfoEl}>
                                            <div className={styles.detailInfoElIcon}>
                                                <p><FuncIcon iconName={"walking"}></FuncIcon></p>
                                            </div>
                                            <div className={styles.detailInfoElText}>
                                                <h4>{tour.typeOfRoute}</h4>
                                                <p>{tour.distance}</p>
                                            </div>
                                        </div>

                                        <div className={styles.detailInfoEl}>
                                            <div className={styles.detailInfoElIcon}>
                                                <p><FuncIcon iconName={"mountains2"}></FuncIcon></p>
                                            </div>
                                            <div className={styles.detailInfoElText}>
                                                <h4>Максимальная/минимальная высота</h4>
                                                <p>{tour.tourHeight}</p>
                                            </div>
                                        </div>

                                        <div className={styles.detailInfoEl}>
                                            <div className={styles.detailInfoElIcon}>
                                                <p><FuncIcon iconName={"calendar"}></FuncIcon></p>
                                            </div>
                                            <div className={styles.detailInfoElText}>
                                                <h4>Возможные месяцы для похода</h4>
                                                <p>{tour.probablyMonths}</p>
                                            </div>
                                        </div>

                                        <div className={styles.detailInfoEl}>
                                            <div className={styles.detailInfoElIcon}>
                                                <p><FuncIcon iconName={"compass2"}></FuncIcon></p>
                                            </div>
                                            <div className={styles.detailInfoElText}>
                                                <h4>Начальная/конечная точка</h4>
                                                <p>{tour.startPoint} {tour.endPoint}</p>
                                            </div>
                                        </div>

                                        
                                        
                                        
                                    </div>
                                )
                            }
                        })
                    } 

                    {
                        detailButton == "price" &&
                        <>  
                        <div className={styles.tourDetailBlock}>
                            <h3>Что включает в тур</h3>
                            <div className={styles.tourDetail}>  
                                {tourDetails.map(tourDetail => {
                                if (tourDetail.isInclude == "include"){
                                return (
                                    <>
                                        <div className={styles.tourDetailEl}>
                                            <div className={styles.tourDetailSmile}>
                                                <p><FuncIcon iconName = {tourDetail.smile}></FuncIcon></p>
                                                
                                            </div>
                                            <div className={styles.tourDetailText}>
                                                <h3>{tourDetail.header}</h3>
                                                <p>{tourDetail.text}</p>

                                            </div>
                                        </div>
                                    </>
                                    )
                                    }
                                })      
                                }
                            </div>
                            <h3>Что НЕ включает в тур</h3>
                            <div className={styles.tourDetail}>
                                    
                                    {tourDetails.map(tourDetail => {
                                    if (tourDetail.isInclude == "exclude"){
                                    return (
                                        <>
                                            <div className={styles.tourDetailEl}>
                                                <div className={styles.tourDetailSmile}>
                                                   <p><FuncIcon iconName = {tourDetail.smile}></FuncIcon></p>
                                                    
                                                </div>
                                                <div className={styles.tourDetailText}>
                                                    <h3>{tourDetail.header}</h3>
                                                    <p>{tourDetail.text}</p>

                                                </div>
                                            </div>
                                        </>
                                        )
                                        }
                                    })      
                                    }
                            </div>
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