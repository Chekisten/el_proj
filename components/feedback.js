import styles from "../styles/feedback.module.css"


const Feedback = () => {

    return (
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
        <div></div>
        </div>
        </div>

        </>
    )
}

export default Feedback