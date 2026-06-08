
import styles from "../styles/tourSliderByType.module.css"
import data from "../database/db.json"
import { useState } from "react"
import Link from "next/link"
import Images from "next/image"


const ToursSliderByTypes = ({tourCountry, tourType, tourId}) => {

    const [tours, setTours] = useState(data.tours)
    return (
        <>  
        <div className="base">
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Another {tourType} tours</h2>
                <div class="gradient-line-right"></div>
             </div>
             <div className={styles.toursList}>
                {tours.map(tour =>{
                    if (tour.countryName == tourCountry && tour.tourType == tourType && tour.isHide == "false" && tour.id != tourId) {
                        return (
                            <>
                                <div className={styles.tourEl}>
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
                                </div>
                            </>
                        )
                    }
                })}
            </div>
        </div>
        </>
    )

}


export default ToursSliderByTypes