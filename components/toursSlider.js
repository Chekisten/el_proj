import link from "next/link";
import styles from "../styles/toursSlider.module.css";
import Images from "next/image";
import { useState, useEffect } from "react";
import data from "../database/db.json"




const TourTypes = () =>{
    const [tours, setTours] = useState(data.tours)
    const [country, setCountry] = useState('International')




    return (
        <>
        <div className={styles.choseState}>
            <div className={styles.list}>
                <button onClick={() => setCountry('International')}>Многонациональный</button>
                <button onClick={() => setCountry('Kyrgyzstan')}>Кыргызстан</button>
                <button onClick={() => setCountry('Tadjikistan')}>Таджикистан</button>
                <button onClick={() => setCountry('Uzbekistan')}>Узбекистан</button>
                <button onClick={() => setCountry('Kazakhstan')}>Казахстан</button>
            </div>
               

            <div className={styles.topTours}>

                {tours.map( tour => {
                           
                    if (tour.countryName == country && tour.isBest == 1 & tour.isHide == 0){
                        return (
                            <div className={styles.tour}>
                            <h3> {tour.name}</h3>
                            <div className={styles.tourButtons}>
                                <button>From {tour.currency}{tour.price}</button>
                                <button> {tour.duration} {tour.time}</button>
                            </div>
                            <Images src={tour.img} width={400} height={400}className={styles.tourImages}></Images>
                            </div>)       
                        }

                }

                )}


            </div>

        </div>
        </>
    )
}

export default TourTypes