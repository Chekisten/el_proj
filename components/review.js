'use client'
import link from "next/link";
import styles from "../styles/review.module.css";
import Images from "next/image";
import { useState, useEffect } from "react";
import data from "../database/db.json"
import { useRef } from "react";




const Reviews = () =>{
    const [reviews, setReview] = useState(data.reviews);
    const scrollRef = useRef(null);
    const scroll = (direction) => {
        if (scrollRef.current){
            const {scrollLeft, clientWidth} = scrollRef.current;
            const scrollToValue = direction === 'left'
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth;


            scrollRef.current.scrollTo({
                left: scrollToValue,
                behavior:'smooth'
            });
        }
    }
        



    return (
        <>

            <div className="base">
            
                    <div className="gradient">
                        <div class="gradient-line-left"></div>
                        <h2>Reviews</h2>
                        <div class="gradient-line-right"></div>
                    </div>

            
                <div className={styles.reviewSlider}>
                    <div className={styles.slider} ref={scrollRef}>
 

                        {reviews.map(review =>{

                            if (review.isTop == "true"){
                                return (
                                    
                                    <div className={styles.slide}>
                                        <div className={styles.textBlock}>
                                            <h3>{review.head}</h3>
                                            <p>{review.shortDescription}</p>
                                            <div className={styles.links}>
                                                <p>{review.name}</p>
                                                <a href={review.link}>{review.source}</a>
                                            </div>
                                        </div>
                                        <div className={styles.imgBlock}>
                                            <Images src={review.img} width={500} height={300}></Images>
                                        </div>
                                    </div>
            
                                    
                                )
                            }
                            
                        })}


                    <button className={`${styles.btn} ${styles.prev}`} onClick={() => scroll('left')}>❮</button>
                    <button className={`${styles.btn} ${styles.next}`} onClick={() => scroll('right')}>❯</button>

                    </div>


                </div>
            </div>
        </>
    )
}

export default Reviews