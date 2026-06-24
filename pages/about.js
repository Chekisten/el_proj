import Feedback from "../components/feedback"
import MainContainer from "../components/mainContainer"
import Link from "next/link"
import styles from '../styles/about.module.css'
import Image from "next/image"
import AboutUs from "../components/aboutUs"

const About = () => {
    return (
        <MainContainer pageType={"about"}>
             <div className="MainMotto" style={ {backgroundImage:   "url(/images/mainAbout.png)", height: "100vh"}}>
            <p className="mainMotto1st">About Us</p>
            <p className="mainMotto2nd">Travel Kyrgyzstan and Central Asia with trusted travelers</p>
        </div>

        <div className="base">
                <div className={styles.mainInfo}>
                    <div className={styles.mainInfoText}>
                        <p>Founded in 2008, our company has grown from one of the first tour operators organizing treks and providing travel services to foreign travelers in the Alay region of southern Kyrgyzstan to a leading tour operator and full-service agency. Today, we create exciting cultural and adventure tours in Kyrgyzstan, Tajikistan, and Uzbekistan.</p>
                        <br></br>
                        <p>Whether you're looking for high-altitude trekking or horseback riding adventures, exploring the nomadic culture of Kyrgyzstan, embarking on an epic journey along the Pamir Highway in Tajikistan, or exploring the Silk Road in Uzbekistan, our team of experienced local experts will help transform your ideas into an unforgettable journey. We specialize in organizing private trips, developing custom itineraries, and group tours, offering solutions for every travel style, interest, and budget.</p>
                    </div>
                    <div className={styles.mainInfoImg}>

                        <Image src={'/images/aboutYurt.png'} width={1000} height={550}></Image>
                    </div>
                </div>
        </div>

        <div className="base">
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>We are not just a company</h2>
                <div class="gradient-line-right"></div>
            </div>
                <div className={styles.notJustCom}>
                    <div className={styles.notJustComHalf}>
                        <div className={styles.notJustText}>
                            <h3>Local expertise</h3>
                            <p>Our deep knowledge of Kyrgyzstan's culture, landscapes, and local communities allows us to create unique, personalized experiences and itineraries you won't find anywhere else.</p>
                        </div>
                        
                            <Image src={'/images/1stNot.png'} width={1000} height={550}></Image>
                        
                    </div>
                    <div className={styles.notJustComHalf}>
                        <div className={styles.notJustText}>
                            <h3>Sustainable practices</h3>
                            <p>We prioritize sustainable development principles to minimize our environmental impact and help preserve our fragile natural environment.</p>
                        </div>
                        <Image src={'/images/2ndNot.png'} width={1000} height={550}></Image>
                    </div>
                    <div className={styles.notJustComFull}>
                        <div className={styles.notJustText}>
                            <h3>Authentic experiences</h3>
                            <p>Our network of local guides and connections with local communities provide our travelers with the opportunity to deeply understand the local people, their way of life, and their heritage. This makes every trip more vibrant and truly memorable.</p>
                        </div>
                        <Image src={'/images/3rdNot.png'} width={1000} height={550}></Image>
                    </div>
                    <div className={styles.notJustComHalf}>
                        <div className={styles.notJustText}>
                            <h3>Regional knowledge</h3>
                            <p>With offices in Bishkek and Osh, we have over 15 years of experience creating and executing unforgettable trips across Kyrgyzstan and Central Asia.</p>
                        </div>
                        <Image src={'/images/4thNot.png'} width={1000} height={550}></Image>
                    </div>
                    <div className={styles.notJustComHalf}>
                        <div className={styles.notJustText}>
                            <h3>Safety and reliability</h3>
                            <p>Above all, our standards and highly qualified staff guarantee a safe, secure and comfortable stay.</p>
                        </div>
                        <Image src={'/images/5thNot.png'} width={1000} height={550}></Image>
                    </div>
                    <div className={styles.notJustComFull}>
                        <div className={styles.notJustText}>
                            <h3>Customer satisfaction</h3>
                            <p>Our approach consistently generates positive reviews and attracts repeat customers. Many travelers return to us again and recommend our tours to their friends and family.</p>
                        </div>
                        <Image src={'/images/6thNot.png'} width={1000} height={550}></Image>
                    </div>
                </div>
        </div>

        <div className="base">
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Our Team</h2>
                <div class="gradient-line-right"></div>
            </div>
            <div className={styles.ourTeam}>
                <div className={styles.teamCard}>
                    <div className={styles.teamImg}>
                        <Image src={'/images/talantMember.png'} width={500} height={500}></Image>
                    </div>
                    <div className={styles.teamText}>
                        <h3>Talant Toksonbaev, founder</h3>
                        <p>Talant is the founder and driving force behind the tour with nearly 20 years of experience in tourism and adventure route development in Kyrgyzstan and Central Asia. He began organizing active recreation in his native village in the Alay region and today develops tourism based on interaction with local communities. Talant believes in creating sustainable income for local residents through authentic travel and has implemented this model at the core of all our tours.</p>
                    </div>
                </div>
                <div className={styles.teamCard}>
                    <div className={styles.teamImg}>
                        <Image src={'/images/aziretMember.jpg'} width={500} height={500}></Image>
                    </div>
                    <div className={styles.teamText}>
                        <h3>Aziret Zhusubali, tour manager.</h3>
                        <p>Aziret (Azi) is a native of the Alay Mountains and a tourism expert with over 10 years of experience. He rose through the ranks from porter to leading mountain guide, leading over 100 groups in Kyrgyzstan and Tajikistan. Today, Azi is responsible for planning tours at Visit Alay and developing tourism that supports local communities and preserves the region's culture. His work helps create sustainable living and development opportunities in mountainous areas.</p>
                    </div>
                </div>
                <div className={styles.teamCard}>
                    <div className={styles.teamImg}>
                        <Image src={'/images/begamember.jpg'} width={500} height={500}></Image>
                    </div>
                    <div className={styles.teamText}>
                        <h3>Begayim Mamatova, tour manager</h3>
                        <p>Begayim is an expert in tourism and local community development, with experience implementing projects in southern Kyrgyzstan aimed at supporting tourism, developing crafts, and empowering women economically (Green Destinations Top 100 Stories Award 2022). At Visit Alay, she is responsible for the development of sustainable and inclusive tourism. Her work helps create new opportunities for women and strengthen local communities.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="base">
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Why choose us</h2>
                <div class="gradient-line-right"></div>
            </div>
            <AboutUs></AboutUs>
        </div>

        <div className="base">
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Our victories and achievements</h2>
                <div class="gradient-line-right"></div>
            </div>

            <div className={styles.mainInfo}>
                    <div className={styles.mainInfoText}>
                        <p>Our company has been awarded the TripAdvisor Travelers' Choice Award in both Kyrgyzstan and Tajikistan for several consecutive years, reflecting our commitment to excellence and customer satisfaction. Our commitment to developing community-based tourism has also been recognized by international development organizations, including:</p>
                        <br></br>
                        <p>Tourism development partner for the Helvetas Bai Alay project, which creates new trails and routes in the Alay region to generate income for remote mountain communities. This project won the Green Destinations Top 100 Stories 2022 award in the category "Poverty Reduction and Community Empowerment through Tourism and Handicrafts."</p>
                        <br></br>
                        <p>As part of the GIZ project for tourism development in Jalal-Abad, we are participating in the development of new hiking and horse riding routes and tours aimed at the local population..</p>
                    </div>
                    <div className={styles.mainInfoImg}>

                        <Image src={'/images/tripAlay.png'} width={300} height={300}></Image>
                    </div>
                </div>
        </div>
        
        </MainContainer>
    )
}

export default About