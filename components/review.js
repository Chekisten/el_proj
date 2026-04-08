import link from "next/link";
import styles from "../styles/toursSlider.module.css";
import Images from "next/image";
import { useState, useEffect } from "react";
import data from "../database/db.json"




const Reviews = () =>{
    const [tours, setTours] = useState(data.reviews)
   
        



    return (
        <>
       <h3>Тут ревью</h3>
        </>
    )
}

export default Reviews