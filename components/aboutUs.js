

import style from "../styles/aboutUs.module.css"
import Image from "next/image"
import {User, UserExpert, Compass} from 'grommet-icons'

const AboutUs = () => {
    return (
        <>
            <div className={style.aboutUsMain}>
                <div className={style.aboutEl}>
                    <div className={style.svgBack}>
                        <svg className={style.svgMain} viewBox="0 0 100 100">
                             <UserExpert color="#FFF3E4"></UserExpert>
                        </svg>
                    </div>
                    <h5>Experience working with local specialists</h5>
                    <p>We have over 15 years of experience organizing tours in Kyrgyzstan. Our team consists of local Kyrgyz guides with in-depth knowledge of the culture, history, and mountain landscape.</p>
                </div>
                <div className={style.aboutEl}>
                    <div className={style.svgBack}>
                        <svg className={style.svgMain} viewBox="0 0 32 32">
                            <path className={style.st0} d="M3,25l2.6-4.2c1.5-2.3,4-3.8,6.8-3.8H19v0c0,2.2-1.8,4-4,4h-2"/>
                            <path className={style.st0} d="M16,21h7l1.2-1.6c1.1-1.5,2.9-2.4,4.8-2.4h0l-2.7,4.8c-1.4,2.6-4.2,4.2-7.1,4.2h0c-4.7,0-9.3,1.4-13.2,4l0,0"/>
                            <path className={style.st0} d="M18,10L18,10L18,10c0-3.9,3.1-7,7-7h0v0C25,6.9,21.9,10,18,10z"/>
                            <path className={style.st0} d="M18,13L18,13c-3.9,0-7-3.1-7-7v0h0C14.9,6,18,9.1,18,13L18,13z"/>
                            <line className={style.st0} x1="18" y1="2" x2="18" y2="17"/>
                        </svg>
                    </div>
                    <h5>Sustainable and community-based tourism practices</h5>
                    <p>We partner with a network of family-owned and small businesses to support local communities and people across Kyrgyzstan. In doing so, we help preserve our environment.</p>
                </div>
                <div className={style.aboutEl}>
                    <div className={style.svgBack}>
                        <svg className={style.svgMain} viewBox="0 0 100 100">
                            <Compass color="#FFF3E4"></Compass>
                        </svg>
                    </div>
                    <h5>Individual routes</h5>
                    <p>Plan your trip according to your interests, fitness level, travel goals, and schedule. We'll be with you every step of the way and will help you with any questions you may have!</p>
                </div>
            </div>
        </>
    )
}


export default AboutUs