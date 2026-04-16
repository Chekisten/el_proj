import Image from 'next/image';
import { useState, useEffect } from 'react';
import MainContainer from '../components/mainContainer';
import data from '../database/db.json';
import AddingForms from '../components/addingForms';

const Tours = () =>{


    
    return (
        <MainContainer>
            <h1>Добавлятель туров</h1>
            <div className='base'>            
                <AddingForms></AddingForms>
            </div>

        </MainContainer>
    )
}

export default Tours


// export async function getStaticProps(context){
//     const response = await fetch(/* ссылка на внешную базу данных*/ )
//     const tours = await response.json()

//     return (
//         props:{tours}
//     )
// }