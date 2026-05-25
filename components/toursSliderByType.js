
import styles from "../styles/toursSlider.module.css"
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
            {tours.map(tour =>{
                if (tour.countryName == tourCountry && tour.tourType == tourType && tour.isHide == "false" && tour.id != tourId) {
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
                        </Link>
                    )
                }
            })}
        </div>
        </>
    )

}


export default ToursSliderByTypes