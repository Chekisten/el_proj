import { useState } from "react"
import styles from "../styles/newHorizons.module.css"
import data from "../database/db.json"
import Image from "next/image"

const NewHorizons = ({countryType, tourType}) => {
    const [blogs, setBlogs] = useState(data.blogs)
    let i = 1;
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
                    

                </div>
            </div>
        </>
    )
}

export default NewHorizons