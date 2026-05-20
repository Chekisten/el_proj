import Feedback from "../components/feedback"
import MainContainer from "../components/mainContainer"
import Link from "next/link"
import TypeSlider from "../components/typeSlider"
const About = () => {
    return (
        <MainContainer>
            <h1>About page</h1>
            <div className="base">
                <ul>        
                    
                    <li><a href="/international/cultureTours">Интер культура</a></li>
                    <li><a href="/kazakhstan/cultureTours">Kazakhstan</a></li>
                    <li><a href="/international/cultureTours">kyrgyzstan</a></li>
                    <li><a href="/international/cultureTours">uzbekistan</a></li>
                    <li><a href="/international/cultureTours">tadjikistan</a></li>
                </ul>
            
            </div>


            <TypeSlider></TypeSlider>
        </MainContainer>
    )
}

export default About