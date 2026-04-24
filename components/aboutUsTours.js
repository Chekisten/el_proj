import { Directions, Group, User } from "grommet-icons"
import style from "../styles/aboutUsTours.module.css"


const AboutUsTours = () =>{
    return(
        <>
            <div className="base">
                    <div className="gradient">
                        <div class="gradient-line-left"></div>
                        <h2>У Вас всегда есть выбор</h2>
                        <div class="gradient-line-right"></div>
                    </div>
                <div className={style.aboutUsMain}>


                    <div className={style.aboutEl}>
                        <div className={style.svgBack}>
                            <svg className={style.svgMain} viewBox="0 0 100 100">
                                <User color="#FFF3E4"></User>
                            </svg>
                                
                            
                        </div>
                        <h5>Индивидуальные маршруты</h5>
                        <p>Подойдет тем, кто ценит гибкость, комфорт и путешествия в своём ритме. Такой формат позволяет организовать тур именно для вашей группы с персональным подходом к маршруту, размещению и транспорту.</p>
                    </div>
                    <div className={style.aboutEl}>
                        <div className={style.svgBack}>
                            <svg className={style.svgMain} viewBox="0 0 100 100">
                                <Group color="#FFF3E4"></Group>
                            </svg>
                        </div>
                        <h5>Групповые маршруты</h5>
                        <p>Если хотите отправиться в поход в компании единомышленников, разделить расходы и сделать путешествие ещё более насыщенным и интересным. Уже сейчас вы можете выбрать  подготовленный вариант вашего путешествия.</p>
                    </div>
                    <div className={style.aboutEl}>
                        <div className={style.svgBack}>
                            <svg className={style.svgMain} viewBox="0 0 100 100">
                                <Directions color="#FFF3E4"></Directions>
                            </svg>
                        </div>
                        <h5>Разработка собственного маршрута</h5>
                        <p>Спланируйте свою поездку в соответствии с вашими интересами, уровнем физической подготовки, целями путешествия и расписанием. Мы будем сопровождать вас на каждом шаге и поможем в любом вопросе!</p>
                    </div>
                </div>
            </div>  
        </>
    )
}


export default AboutUsTours