import { useRouter } from "next/router"
import MainContainer from "../../components/mainContainer";
import data from "../../database/db.json";
import { useState } from "react";
import MainPhoto from "../../components/mainPhoto";
import styles from "../../styles/[id].module.css"
import Image from "next/image"
import Review from "../../components/review"
import TourPhotoSlider from "../../components/tourPhotoSlider";
import FaqBlock from "../../components/faqBlock";

import ToursSliderByType from "../../components/toursSliderByType";
import DetailInfo from "../../components/detailInfo";
import TourMoments from "../../components/tourMoments";
import FuncIcon from "../../components/funcIcon";



export default function () {

    const [tours, setTours] = useState(data.tours);
    const {query} = useRouter();
    const currentTour = tours.find(tour => tour.uniqName == query.uniqName)
   // const currentTour = tours.find(tour => tour.id == query.id)
 //  console.log(currentTour?.id)
    const currentUniqName = currentTour ? currentTour.uniqName : "";
    const currentTourId = currentTour ? currentTour.id : "";
    const currentIntroImg = currentTour ? currentTour.introImg : "";
    const currentPhoto = currentTour ? currentTour.img : "";
    const currentName = currentTour ? currentTour.name : "";
    const currentMotto = currentTour ? currentTour.motto : "";
    const currentCountry = currentTour ? currentTour.countryName : "";
    const currentTourType = currentTour ? currentTour.tourType : "";
    const currentTourTypeDescription = currentTour ? currentTour.typeOfRoute : "";
    const currentGroupSize = currentTour ? currentTour.groupSize : "";
    const currentDestination = currentTour ? currentTour.destination : "";
    const currentDuration = currentTour ? currentTour.duration : "";
    const currentTime = currentTour ? currentTour.time : "";
    const currentCurrency = currentTour ? currentTour.currency : "";
    const currentPrice = currentTour ? currentTour.price : "";
    const currentText1stPart = currentTour ? currentTour.text1stPart : "";
    const currenttext2ndPart = currentTour ? currentTour.text2ndPart : "";

    
    
    
    return (
        
        <>
        <MainContainer>

        <div className={styles.intro}>
            <div className={styles.introInfo}>
                <div className={styles.baseIntroInfo}>
                    <div className={styles.introLeft}>
                        <p> <FuncIcon iconName={"flag"}></FuncIcon> <b>Tour type:</b> {currentTourTypeDescription}</p>
                        <p><FuncIcon iconName={"pair"}></FuncIcon> <b>Group size:</b> {currentGroupSize}</p>
                        <p><FuncIcon iconName={"place1"}></FuncIcon> <b>Destination</b> {currentDestination}</p>
                    </div>
                    <div className={styles.introRight}> 
                        <div className={styles.triangle}>
                            <div className={styles.upTriangle}></div>
                            <div className={styles.downTriangle}></div>
                        </div> 
                        <div className={styles.introRightBlock}>
                            <p>{currentDuration} {currentTime}</p>
                            <p>{currentCurrency} {currentPrice}</p>
                        </div>
                        
                    </div>

                </div>
               <div className={styles.introButton}>
                <button>More information</button>
            </div> 
            </div>
            
            
            <MainPhoto photo={currentIntroImg} header={currentName} motto={currentMotto}></MainPhoto>
        </div>
        <div className="base">
                <div className={styles.mainInfo}>
                    <div className={styles.mainInfoText}>
                        <p>{currentText1stPart}</p>
                        <br></br>
                        <p>{currenttext2ndPart}</p>
                    </div>
                    <div className={styles.mainInfoImg}>

                        <Image src={currentPhoto} width={1280} height={720}></Image>
                    </div>
                </div>
        </div>

        <TourMoments tourUniqName={currentUniqName}></TourMoments>
        
        <DetailInfo uniqName={currentUniqName}></DetailInfo>


       

        <Review></Review>
        <div className="base">
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>The atmosphere of the tour</h2>
                
                <div class="gradient-line-right"></div>
             </div>
             <TourPhotoSlider tourPhoto={currentUniqName}></TourPhotoSlider>
        </div>
        
        <FaqBlock></FaqBlock>
        
        <ToursSliderByType tourCountry={currentCountry} tourType={currentTourType} tourId={currentTourId}></ToursSliderByType>
    

        
        </MainContainer>
        </>
            
        
    )

}