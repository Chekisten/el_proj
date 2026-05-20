import { useRouter } from "next/router";
import { useState } from "react";
import data from "../database/db.json"
import MainContainer from "../components/mainContainer";
import Images from "next/image"
import NewHorizons from "../components/newHorizons";
import AboutUsTours from "../components/aboutUsTours";
import TourSlider from "../components/toursSlider";
import styles from "../styles/[uniqTypeName].module.css"
import Reviews from "../components/review";
import FaqBlock from "../components/faqBlock";


export default function (){
    const {query} = useRouter();
    const [types, setType] = useState(data.infos)
    const currentTourType = types.find(type => type.uniqTypeName == query.uniqTypeName)
    const TourTypeName =  query.uniqTypeName
    return (
        <>
        <MainContainer>
            {types.map(info =>{
                                if (info.uniqTypeName == TourTypeName){
                                    return (
                                        <>
                                            <div className="MainMotto" style={ {backgroundImage:   `url(${info.imageMain})`}}>
                                                <h1>{info.head}</h1>
                                                <p>{info.motto}</p>
                                                <button>Подобрать путешествие</button>
            
                                            </div>
            
                                            <div className="base">
                                                <div className="mainInfo">
                                                    <div className="mainInfoText">
                                                        <p>{info.firstText1stPart}</p>
                                                        <br></br>
                                                        <p>{info.firstText2ndPart}</p>
                                                    </div>
                                                    <div className="mainInfoImg">
                                                        <Images src={info.firstImg} width={450} height={550}></Images>
                                                    </div>
            
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                         })}

            <NewHorizons countryType={currentTourType?.countryName} tourType={currentTourType?.tourType}></NewHorizons>
                        
            
            <div className="base">
                           <div className="gradient">
                                <div class="gradient-line-left"></div>
                                <h2>Туры с заботой и сопровождением</h2>
                                <div class="gradient-line-right"></div>
                            </div>
            
                        {types.map(info =>{
                            
                                if (info.uniqTypeName == TourTypeName){
                                    return(
                                        <>
                                                <div className="mainInfo">
                                                    <div className="mainInfoImg">
                                                        <Images src={info.secondImg} width={450} height={550}></Images>
                                                    </div>
            
                                                    <div className="mainInfoText">
                                                        <p>{info.secondText1stPart}</p>
                                                        <br></br>
                                                        <p>{info.secondText2ndPart}</p>
                                                    </div>
                                                </div>
                                            
                                        </>
                                    )
                                }
                            
                        })}
            </div>
            <AboutUsTours></AboutUsTours>

            <div className="base">
                <div className={styles.newHorizons}>
                    <div className="gradient">
                        <div class="gradient-line-left"></div>
                        <h2>Popular tours of {currentTourType?.countryName}</h2>
                        <div class="gradient-line-right"></div>
                    </div>
                    
                    <TourSlider state={currentTourType?.countryName}></TourSlider> 

                </div>
            </div>
            <Reviews></Reviews>
            <FaqBlock></FaqBlock>
        </MainContainer>
        </>
    )
}