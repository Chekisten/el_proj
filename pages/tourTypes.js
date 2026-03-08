import Image from 'next/image';
import { useState, useEffect } from 'react';
import MainContainer from '../components/mainContainer';
const TourTypes = () =>{
    // Нижный конст потмо удалить как будет сделан серверный рендеринг а в аргументы добавить tours
    const [tours, setTours] = useState([
        {   id: 1,
            name:"Albania",
            countryName: "Albania",
            description: "Tour to Enver's Albania",
            img: "/images/albania.jpg",
            imgWidth: 300,
            imgHeight: 300

        },
        {
            id:2,
            name: "Discover Prussia: Journey Through a Legendary Realm",
            countryName: "Prussia",
            description: "Step back in time and explore the lands of Prussia — where medieval castles stand guard over ancient forests, cobblestone streets whisper tales of knights and kings, and the Baltic coastline stretches into the horizon like a dream.",
            img: "/images/prussia.jpg",
            imgWidth: 300,
            imgHeight: 300
        }
    ])
    return (



        <MainContainer>
            <h1>Tour types page</h1>
            <div className="tours">
            <ul>
                {tours.map(tour => 
                    <div className="tour">
                        <h2>{tour.name}</h2>
                        <br></br>
                        {tour.id}
                        <br></br>
                        <Image src = {tour.img} width={tour.imgWidth} height={tour.imgHeight}/>
                        <br></br>
                        {tour.description}
                        <br></br>
                        <button>Let go to {tour.countryName}</button>
                    </div>
                )}
            </ul>

            

            </div>
        </MainContainer>
    )
}

export default TourTypes


// export async function getStaticProps(context){
//     const response = await fetch(/* ссылка на внешную базу данных*/ )
//     const tours = await response.json()

//     return (
//         props:{tours}
//     )
// }