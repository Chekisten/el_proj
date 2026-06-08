import styles from "../styles/feedback.module.css"


const Feedback = ({feedType}) => {

    return (
        <>

        {feedType == "about" && (
            <>
            <div className={styles.feedbackBase}> 
                <div className={styles.separate}>
                    <div className={styles.mainSep}>
                        <h2>Хотите стать часть нашей команды?</h2>
                        <p>Мы на связи 24/7, чтобы ответить на ваши вопросы и предоставить ресурсы, информацию и варианты туров. Вы можете связаться с нами по телефону/WhatsApp по номеру +996 556 007030 или по электронной почте oshtours@gmail.com. Или отправьте нам сообщение ниже.</p>
                        <br></br>
                        
                        <div className={styles.feedback}>
                            
                            
                                <form action="" method="post" className={styles.feedbackForm}>
                                    <label htmlFor="name">Ваше имя</label>
                                    <input id="name" type="text" name="name"></input>
                                    
                                    <label htmlFor="email">Ваша почта</label>
                                    <input id="email" type="email" name="email"></input>

                                    <label htmlFor="tourName">Наименование тура</label>
                                    <input id="tourName" type="text" name="tourName"></input>

                                    <label htmlFor="message">Ваше сообщение</label>
                                    <textarea id="message" type="text" name="message"></textarea>

                                    <input type="submit" value="Оставить заявку"></input>
                                </form>
                
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            </>
        )}
        {feedType !== "about" && (
            <>
            <div className={styles.feedbackBase}> 
                <div className={styles.separate}>
                    <div className={styles.mainSep}>
                        <h2>Готовы к вашему новому приключению?</h2>
                        <div className={styles.feedback}>
                            
                            
                                <form action="" method="post" className={styles.feedbackForm}>
                                    <label htmlFor="name">Ваше имя</label>
                                    <input id="name" type="text" name="name"></input>
                                    
                                    <label htmlFor="email">Ваша почта</label>
                                    <input id="email" type="email" name="email"></input>

                                    <label htmlFor="tourName">Наименование тура</label>
                                    <input id="tourName" type="text" name="tourName"></input>

                                    <label htmlFor="message">Ваше сообщение</label>
                                    <textarea id="message" type="text" name="message"></textarea>

                                    <input type="submit" value="Оставить заявку"></input>
                                </form>
                
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            </>
        )}

       

        </>
    )
}

export default Feedback