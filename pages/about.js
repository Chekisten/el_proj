import Feedback from "../components/feedback"
import MainContainer from "../components/mainContainer"
import Link from "next/link"
import styles from '../styles/about.module.css'
import Image from "next/image"
import AboutUs from "../components/aboutUs"

const About = () => {
    return (
        <MainContainer pageType={"about"}>
             <div className="MainMotto" style={ {backgroundImage:   "url(/images/mainAbout.png)"}}>
            <p className="mainMotto1st">О нас</p>
            <p className="mainMotto2nd">Путешествуйте по Кыргызстану и Центральной Азии с теми, кому можно доверять</p>
        </div>

        <div className="base">
                <div className={styles.mainInfo}>
                    <div className={styles.mainInfoText}>
                        <p>Наша компания, основанная в 2008 году, прошла путь от одного из первых туроператоров, организующих пешие походы и предоставляющих туристические услуги иностранным путешественникам в Алайском регионе на юге Кыргызстана, до ведущего туроператора и агентства полного цикла. Сегодня мы создаем захватывающие культурные и приключенческие туры по Кыргызстану, Таджикистану и Узбекистану</p>
                        <br></br>
                        <p>Ищете ли вы высокогорный треккинг или конные приключения, хотите познакомиться с кочевой культурой Кыргызстана, отправиться в эпическое путешествие по Памирскому шоссе в Таджикистане или исследовать маршруты Шелкового пути в Узбекистане — наша команда опытных местных экспертов поможет превратить ваши идеи в незабываемое путешествие. Мы специализируемся на организации частных поездок, разработке индивидуальных маршрутов и групповых туров, предлагая решения для любого стиля путешествия, интересов и бюджета.</p>
                    </div>
                    <div className={styles.mainInfoImg}>

                        <Image src={'/images/mainAbout.png'} width={500} height={550}></Image>
                    </div>
                </div>
        </div>

        <div className="base">
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Мы не просто компания</h2>
                <div class="gradient-line-right"></div>
            </div>
        </div>

        <div className="base">
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Наша команда</h2>
                <div class="gradient-line-right"></div>
            </div>
        </div>

        <div className="base">
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Почему выбирают нас</h2>
                <div class="gradient-line-right"></div>
            </div>
            <AboutUs></AboutUs>
        </div>

        <div className="base">
            <div className="gradient">
                <div class="gradient-line-left"></div>
                <h2>Наши победы и достижения</h2>
                <div class="gradient-line-right"></div>
            </div>

            <div className={styles.mainInfo}>
                    <div className={styles.mainInfoText}>
                        <p>Наша компания несколько лет подряд удостаивалась награды TripAdvisor Travelers' Choice Award как в Кыргызстане, так и в Таджикистане, что отражает нашу приверженность к совершенству и удовлетворению потребностей клиентов. Наша приверженность развитию туризма на основе местных сообществ также была отмечена международными организациями по развитию, в том числе:</p>
                        <br></br>
                        <p>Партнер по развитию туризма в рамках проекта Helvetas Bai Alay по созданию новых троп и маршрутов в регионе Алай для получения дохода в отдаленных горных общинах. Этот проект получил награду Green Destinations Top 100 Stories 2022 в номинации « Сокращение бедности и расширение возможностей общин посредством туризма и ремесел ».</p>
                        <br></br>
                        <p>В рамках проекта GIZ по развитию туризма в Джалал-Абаде мы участвуем в разработке новых пешеходных и конных маршрутов и туров, ориентированных на местное население.</p>
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