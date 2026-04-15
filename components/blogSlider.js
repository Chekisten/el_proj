'use client'
import link from "next/link";
import styles from "../styles/blogSlider.module.css";
import Images from "next/image";
import { useState, useEffect } from "react";
import data from "../database/db.json"
import { useRef } from "react";



const BlogSlider = ({blogState}) =>{
    const [blogs, setReview] = useState(data.blogs);
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
            <div className={styles.reviewSlider}>
                <div className={styles.slider} ref={scrollRef}>


                    {blogs.map(blog =>{

                        if (blog.countryName == blogState){
                            
                            return (
                                
                                <div className={styles.slide}>
                                    <div className={styles.imgBlock}>
                                        <Images src={blog.img} width={450} height={280}></Images>
                                    </div>
                                    <div className={styles.textBlock}>
                                        <h3>{blog.head}</h3>
                                        <p>{blog.shortDescription}</p>
                                        <div className={styles.links}>
                                            <a href={blog.link}>подробнее</a>
                                        </div>
                                    </div>

                                </div>
        
                                
                            )
                        }
                        
                    })}


                <button className={`${styles.btn} ${styles.prev}`} onClick={() => scroll('left')}>❮</button>
                <button className={`${styles.btn} ${styles.next}`} onClick={() => scroll('right')}>❯</button>

                </div>


            </div>
        </>
    )
}

export default BlogSlider