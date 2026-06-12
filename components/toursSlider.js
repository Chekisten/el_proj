import Link from "next/link";
import styles from "../styles/toursSlider.module.css";
import Images from "next/image";
import { useState, useEffect } from "react";
import data from "../database/db.json"
import TourSliderScroll from "./tourSliderScroll";


 

const TourSlider = ({state}) =>{
    const [tours, setTours] = useState(data.tours)
   // const [country, setCountry] = useState('International')
    let typeOfTours = state
    
    if (state == "main"){
        typeOfTours = "international"
    }

    const [country, setCountry] = useState(typeOfTours)



    return (
        <>
        {state == "main" && (
            <>
            <div className={styles.choseState}>
                    <div className={styles.list}>
                        <button onClick={() => setCountry('international')}>International</button>
                        <button onClick={() => setCountry('kyrgyzstan')}>Kyrgyzstan</button>
                        <button onClick={() => setCountry('tadjikistan')}>Tajikistan</button>
                        <button onClick={() => setCountry('uzbekistan')}>Uzbekistan</button>
                        <button onClick={() => setCountry('kazakhstan')}>Kazakhstan</button>
                    </div>
                    
 
                    <div className={styles.topTours}>

                        {tours.map( tour => {
                                
                            if (tour.countryName == country && tour.isBest == "true" && tour.isHide == "false"){
                                return (
                                    <Link href={`/tours/${tour.uniqName}`}>
                                    <div className={styles.tour}>
                                    <p> {tour.name}</p>
                                    <div className={styles.tourButtons}>
                                        <button>From {tour.currency}{tour.price}</button>
                                        <button> {tour.duration} {tour.time}</button>
                                    </div>
                                    <Images src={tour.img} width={400} height={350}className={styles.tourImages}></Images>
                                    </div>
                                    </Link>)       
                                }

                        }

                        )}


                    </div>

                </div>

                <div className={styles.choseStateLittle}>
                    
                    <details>
                        <summary>International</summary>
                        <TourSliderScroll country={'international'}></TourSliderScroll>
                    </details>
                    <details>
                        <summary>Kyrgyzstan</summary>
                        <TourSliderScroll country={'kyrgyzstan'}></TourSliderScroll>
                    </details>
                    <details>
                        <summary>Tadjikistan</summary>
                        <TourSliderScroll country={'tadjikistan'}></TourSliderScroll>
                    </details>
                    <details>
                        <summary>Uzbekistan</summary>
                        <TourSliderScroll country={'uzbekistan'}></TourSliderScroll>
                    </details>
                    <details>
                        <summary>Kazakhstan</summary>
                        <TourSliderScroll country={'kazakhstan'}></TourSliderScroll>
                    </details>
                    
                    

                    

                </div>
                </>



        ) || ( 
            <>
            <div className={styles.choseState}>

                <div className={styles.topTours}>

                    {tours.map( tour => {
                            
                        if (tour.countryName == country  && tour.isHide == "false"){
                            return (
                                <>
                                <Link href={`/tours/${tour.uniqName}`}>
                                <div className={styles.tour}>
                                <p> {tour.name}</p>
                                <div className={styles.tourButtons}>
                                    <button>From {tour.currency}{tour.price}</button>
                                    <button> {tour.duration} {tour.time}</button>
                                </div>
                                <Images src={tour.img} width={400} height={350}className={styles.tourImages}></Images>
                                </div>
                                </Link>
                                
                                </>
                                
                                )
                                
                                
                            }

                    }

                    )}


                </div>
            </div>
            <div className={styles.choseStateLittle}>
                    
                   
                        <TourSliderScroll country={country}></TourSliderScroll>
                 

                </div>

        </>
        )
        
        }

        </>
    )
}

export default TourSlider