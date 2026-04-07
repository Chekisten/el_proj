import Image from 'next/image';
import { useState, useEffect } from 'react';
import MainContainer from '../components/mainContainer';
import data1 from '../database/db.json';
const TourTypes = () =>{
    // Нижный конст потмо удалить как будет сделан серверный рендеринг а в аргументы добавить tours
    const [tours, setTours] = useState(data1.tours)
    
    tours.map(tour => console.log(tour.id))
    



    
    return (

      

        <MainContainer>
            <h1>Tour types page</h1>
            <div className="tours">
            
                {tours.map(tour => 
                    <div className="tour">
                        <h2>{tour.name}</h2>
                        <br></br>
                        {tour.id}
                        <br></br>
                        <Image src = {tour.img} width={tour.imgWidth} height={tour.imgHeight} className='tourImg'/>
                        <br></br>
                        {tour.description}
                        <br></br>
                        <button>Let go to {tour.countryName}</button>
                    </div>
                )}
            

            

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