

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
                    <h5>Опыт работы с местными специалистами</h5>
                    <p>Мы имеем более 15 лет опыта организации туров по Кыргызстану. Наша команда состоит из местных кыргызских гидов, обладающих глубокими знаниями культуры, истории и горного ландшафта.</p>
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
                    <h5>Практики устойчивого и общинного туризма</h5>
                    <p>Мы сотрудничаем с сетью семейных и малых предприятий, чтобы поддерживать местные сообщества и людей по всему Кыргызстану. Благодаря этому мы помогаем сохранить нашу окружающую среду.</p>
                </div>
                <div className={style.aboutEl}>
                    <div className={style.svgBack}>
                        <svg className={style.svgMain} viewBox="0 0 100 100">
                            <Compass color="#FFF3E4"></Compass>
                        </svg>
                    </div>
                    <h5>Индивидуальные маршруты</h5>
                    <p>Спланируйте свою поездку в соответствии с вашими интересами, уровнем физической подготовки, целями путешествия и расписанием. Мы будем сопровождать вас на каждом шаге и поможем в любом вопросе!</p>
                </div>
            </div>
        </>
    )
}


export default AboutUs