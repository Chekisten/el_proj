import styles from "../styles/tourMoments.module.css"
import data from "../database/db.json"
import { useState } from "react"
import Image from "next/image"
const TourMoments = ({tourUniqName}) => {

    const [moments, setMoments] = useState(data.moments)
    let i = 1
    return (
        <>
            <div className="base">
                <div className={styles.moments}>
                    <div className="gradient">
                        <div class="gradient-line-left"></div>
                        <h2>Highlights</h2>
                        <div class="gradient-line-right"></div>
                    </div>

                    <div className={styles.aboutBlocks}>
                        { moments.map(moment => {
                            
                            if (i % 2 == 1){
                                i++
                                if (moment.uniqName == tourUniqName) {
                                    return (
                                        <>
                                        <div className={styles.aboutBlock}>
                                            <Image src={moment.img} width={620} height={440} alt={moment.header}></Image>
                                            <div className={styles.aboutText}>
                                                <h3>{moment.header}</h3>
                                                <br></br>
                                                <p>{moment.text}</p>
                                            </div>
                                        </div>
                                        </>
                                    )
                                }
                            }
                            if (i % 2 == 0){
                                i++
                            if (moment.uniqName == tourUniqName) {
                                    return (
                                        <>
                                        <div className={styles.aboutBlock}>
                                            
                                            <div className={styles.aboutTextLeft}>
                                                <h3>{moment.header}</h3>
                                                <br></br>
                                                <p>{moment.text}</p>
                                            </div>
                                            <Image src={moment.img} width={620} height={440} alt={moment.header}></Image>
                                        </div>
                                        </>
                                    )
                                }
                            }

                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default TourMoments