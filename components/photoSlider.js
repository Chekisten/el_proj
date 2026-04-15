'use client'
import style from "../styles/photoSlider.module.css"
import data from "../database/db.json"
import { useState } from "react"
import Image from "next/image"
import { useRef } from "react";

const PhotoSlider = ({countryPhoto}) =>{

    const [photos, setPhotos] = useState(data.photos)
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
                

            <div className={style.photoBlock}> 
                <div className={style.slider} ref={scrollRef}>


                    {photos.map(photo =>{

                        if (photo.countryName == countryPhoto){
                            return (
                                
                                <div className={style.slide}>
                                    <div className={style.imgBlock}>
                                        <Image src={photo.img} width={500} height={300} alt={photo.alt}></Image>
                                    </div>
                                </div>
        
                                
                            )
                        }
                        
                    })}


                <button className={`${style.btn} ${style.prev}`} onClick={() => scroll('left')}>❮</button>
                <button className={`${style.btn} ${style.next}`} onClick={() => scroll('right')}>❯</button>

                </div>

            </div>
            


        </>
    )
}

export default PhotoSlider