import { useRouter } from "next/router"
import MainContainer from "../../components/mainContainer";
import data from "../../database/db.json";
import { useState } from "react";
import MainPhoto from "../../components/mainPhoto";


export default function () {

    const [tours, setTours] = useState(data.tours);
    const [country, setCountry] = useState('International');
    const {query} = useRouter();
    const currentTour = tours.find(tour => tour.id == query.id)
   console.log(query)
    const currentPhoto = currentTour ? currentTour.img : ""

   
    
    return (
        //  Потом добавить всё  в мейн контенйре
        <>
        <MainContainer>
        <h1>Tours {query.id}</h1>
        
        <MainPhoto photo={currentPhoto}></MainPhoto>
        </MainContainer>
        </>
            
        
    )

}