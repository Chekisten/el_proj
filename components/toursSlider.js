import Link from "next/link";
import styles from "../styles/toursSlider.module.css";
import Images from "next/image";
import { useState, useEffect } from "react";
import data from "../database/db.json"




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
            <div className={styles.choseState}>
                    <div className={styles.list}>
                        <button onClick={() => setCountry('international')}>Многонациональный</button>
                        <button onClick={() => setCountry('kyrgyzstan')}>Кыргызстан</button>
                        <button onClick={() => setCountry('tadjikistan')}>Таджикистан</button>
                        <button onClick={() => setCountry('uzbekistan')}>Узбекистан</button>
                        <button onClick={() => setCountry('kazakhstan')}>Казахстан</button>
                    </div>
                    

                    <div className={styles.topTours}>

                        {tours.map( tour => {
                                
                            if (tour.countryName == country && tour.isBest == "true" && tour.isHide == "false"){
                                return (
                                    <Link href={`/tours/${tour.id}`}>
                                    <div className={styles.tour}>
                                    <h3> {tour.name}</h3>
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
        ) || (
            
        <div className={styles.choseState}>

            <div className={styles.topTours}>

                {tours.map( tour => {
                           
                    if (tour.countryName == country  && tour.isHide == "false"){
                        return (
                            <Link href={`/tours/${tour.id}`}>
                            <div className={styles.tour}>
                            <h3> {tour.name}</h3>
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
        )
        
        }

        </>
    )
}

export default TourSlider