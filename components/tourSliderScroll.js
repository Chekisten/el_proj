import { useState, useRef } from "react"
import data from "../database/db.json"
import styles from "../styles/tourSliderScroll.module.css"
import Link from "next/link";
import Images from "next/image";
const TourSliderScroll = ({country}) =>{
    const [tours, setTours] = useState(data.tours);
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current) {
            const {scrollLeft, clientWidth} = scrollRef.current;
            const scrollToValue = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            
            scrollRef.current.scrollTo({
                left: scrollToValue,
                behavior: 'smooth'

            })
        }
    } 
    return (
        <>
            <div className={styles.toursBlock}>
                <div className={styles.slider} ref={scrollRef}>
                    
                    {tours.map(tour => {
                       
                        if (tour.countryName == country && tour.isBest == "true"){
                            
                            return (
                                <div className={styles.slide}>
                                    <Link href={`/tours/${tour.uniqName}`}>
                                    <div className={styles.tour}>
                                        <div className={styles.upperText}>
                                        <p> {tour.name}</p>
                                        <div className={styles.tourButtons}>
                                            <button>From {tour.currency}{tour.price}</button>
                                            <button> {tour.duration} {tour.time}</button>
                                        </div>
                                        </div>
                                    
                                    <Images src={tour.img} width={400} height={350} className={styles.tourImages}></Images>
                                    </div>
                                    </Link>
                                </div>
                            
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default TourSliderScroll