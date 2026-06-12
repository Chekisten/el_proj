import { useState, useRef } from "react"
import styles from "../styles/newHorizons.module.css"
import data from "../database/db.json"
import Image from "next/image"

const NewHorizons = ({countryType, tourType}) => {
    const [blogs, setBlogs] = useState(data.blogs)
    let i = 1;
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
            <div className="base">
                <div className={styles.newHorizons}>
                    <div className="gradient">
                        <div class="gradient-line-left"></div>
                        <h2>New Horizons</h2>
                        <div class="gradient-line-right"></div>
                    </div>
                    
                    <div className={styles.blogsBlock}>
                        
                        {blogs.map(blog => {

                            if (blog.countryName == countryType && blog.tourType == tourType){

                                if (i % 2 == 1){
                                    i++
                                    return (
                                    <>
                                        <div className={styles.blogEl}>
                                            <Image src={blog.img} width={1000} height={1000} className={styles.img} alt={blog.alt}></Image>
                                            <div className={styles.blogTextLeft}>
                                                <h3>{blog.head}</h3>
                                                <p>{blog.description}</p>
                                            </div>
                                        </div> 
                                        
                                        
                                    </>
                                )

                                } else {
                                    i++
                                    return (
                                    <>
                                        <div className={styles.blogEl}>
                                            <Image src={blog.img} width={1000} height={1000} className={styles.img} alt={blog.alt}></Image>
                                            <div className={styles.blogTextRight}>
                                                <h3>{blog.head}</h3>
                                                <p>{blog.description}</p>
                                            </div>
                                        </div> 
                                        
                                    </>
                                )
                                }
                            }
                            
                            
                        })}
                    </div>

                    <div className={styles.MobBlogsBlock}>
                            <div className={styles.slider} ref={scrollRef}>
                                {blogs.map(blog => {

                            if (blog.countryName == countryType && blog.tourType == tourType){

                                if (i % 2 == 1){
                                    i++
                                    return (
                                    <>        
                                        <div className={styles.slide}>
                                            <div className={styles.MobBlogEl}>
                                                <Image src={blog.img} width={1000} height={1000} className={styles.img} alt={blog.alt}></Image>
                                                <div className={styles.MobBlogText}>
                                                    <h3>{blog.head}</h3>
                                                    <div className={styles.drops}>
                        
                                                        <input type="checkbox" id={blog.id} className={styles.dropToggle}></input>
                                                        <label htmlFor={blog.id} className={styles.dropButton}>Раскрыть описание</label>
                                                
                                                        <div className={styles.dropList}>
                                                            <p>{blog.description}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )

                                } else {
                                    i++
                                    return (
                                    <>

                                        <div className={styles.slide}>
                                            <div className={styles.MobBlogEl}>
                                                <Image src={blog.img} width={1000} height={1000} className={styles.img} alt={blog.alt}></Image>
                                                <div className={styles.MobBlogText}>
                                                    <h3>{blog.head}</h3>
                                                    <div className={styles.drops}>
                        
                                                        <input type="checkbox" id="drop" className={styles.dropToggle}></input>
                                                        <label htmlFor="drop" className={styles.dropButton}>Раскрыть описание</label>
                                                
                                                        <div className={styles.dropList}>
                                                            <p>{blog.description}</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                                }
                            }
                            
                            
                        })}
                            </div>
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default NewHorizons