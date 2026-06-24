
import MainContainer from "../components/mainContainer";

import TourSlider from "../components/toursSlider";
import Reviews from "../components/review";
import Feedback from "../components/feedback";
import Link from "next/link";


const Index = () => {
    const currentCountry = "main"
    return (
        <MainContainer>
        <div className="MainMotto" style={ {backgroundImage:   "url(/images/mainBackground.png)", height: "100vh"}}>
            <p className="mainMotto1st">Go beyond sightseeing</p>
            <p className="mainMotto2nd">Feel the world</p>
            <button>Explore a tour</button>

        </div>

        
        <div className="base">
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Explore tours by country</h2>
                <div class="gradient-line-right"></div>
             </div>

            <div className="tourByStates">
               
                    <div className="tourByStatesRow1">
                        <Link href={"/states/internationalTours"}>
                            <img src="/images/interTours.png" alt="international travel"></img>
                            <h3>International</h3>
                            <button>❯</button>
                        </Link> 
                   </div>
                
                <div className="tourByStatesRow1">
                    <Link href={"/states/kyrgyzstanTours"}>
                            <img src="/images/kyrgyzTours.png" alt="Kyrgyzstan travel"></img>
                            <h3>Kyrgyzstan</h3>
                            <button>❯</button>
                    </Link>
                </div>

                
                    <div className="tourByStatesRow2">
                        <Link href={"/states/kazakhstanTours"}>
                            <img src="/images/kazahTours.png" alt="Kazakhstan travel"></img>
                            <h3>Kazakhstan</h3>
                            <button>❯</button>
                        </Link>
                    </div>
                
                
                    <div className="tourByStatesRow2">
                        <Link href={"/states/tajikistanTours"}>
                            <img src="/images/tajikTours.png" alt="Tadjikistan travel"></img>
                            <h3>Tajikistan</h3>
                            <button>❯</button>
                        </Link>
                    </div>
                
               
                    <div className="tourByStatesRow2"> 
                        <Link href={"/states/uzbekistanTours"}>
                            <img src="/images/uzbekTours.png" alt="Uzbekistan travel"></img>
                            <h3>Uzbekistan</h3>
                            <button>❯</button> 
                        </Link>
                    </div>
                
            </div>
        </div>


        <div className="base">
            <div className="bestTours">
                <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Choose your escape</h2>
                    <div class="gradient-line-right"></div>
                </div>

                <TourSlider state={currentCountry}>

                </TourSlider>



            </div>
        </div>


                <Reviews></Reviews>


        <div className="base">
            <div className="About">

            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Why choose us?</h2>
                <div class="gradient-line-right"></div>
             </div>


                <div className="aboutBlocks">

                    <div className="aboutBlock">
                        <img src="/images/firstAbout.png" alt="social tourism"></img>
                        <div className="aboutText">
                            
                            <h3>Community tourism</h3>
                            <br></br>
                            <p>We are committed to developing community-based and sustainable tourism that benefits local communities and preserves the natural beauty and cultural heritage of Central Asia. By staying in local guesthouses, hiring regional guides, and minimizing our environmental impact, you support the people and places you visit when you book a tour with us.</p>
                        </div>
                    </div>

                    <div className="aboutBlock"> 
                        <div className="aboutTextLeft" >
                            <h3>Local expertise</h3>
                            <br></br>
                            <p>We are a local company with over 15 years of experience and deep knowledge of the local market.
                            With offices and teams in both the capital Bishkek and the southern Kyrgyz capital Osh, we provide a strong regional network and can support your travel throughout Kyrgyzstan and Central Asia.</p>
                        </div>
                        <img src="/images/secondAbout.png" alt="social tourism"></img>
                    </div>

                    <div className="aboutBlock"> 
                        <img src="/images/thirdAbout.png" alt="social tourism"></img>                
                        <div className="aboutText">
                            <h3>Group tours</h3>
                            <br></br>
                            <p>We help independent travelers find like-minded travelers to share their adventures on our small group tours. This not only helps split the cost but also provides the opportunity to make new connections around the world and create countless new memories.</p>
                        </div>
                    </div>

                    <div className="aboutBlock">
                        <div className="aboutTextLeft" >
                            
                            <h3>100% customization</h3>
                            <br></br>
                            <p>Tell us about your interests, needs, and schedule, and we'll work with you to create a custom itinerary for you or your private group. You can combine activities from different tours, add new ones, or customize your schedule. We'll take your preferences into account and create a personalized itinerary just for you.</p>
                        </div>
                        <img src="/images/fourthAbout.png" alt="social tourism"></img>
                    </div>


                </div>


            </div>
        </div>

  

        

        </MainContainer>

    );
};

export default Index; 