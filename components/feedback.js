import styles from "../styles/feedback.module.css"


const Feedback = ({feedType}) => {

    return (
        <>

        {feedType == "about" && (
            <>
            <div className={styles.feedbackBase}> 
                <div className={styles.separate}>
                    <div className={styles.mainSep}>
                        <h2>Want to become part of our team?</h2>
                        <p>We're available 24/7 to answer your questions and provide resources, information, and tour options. You can contact us by phone/WhatsApp at +996 556 007030 or by email at oshtours@gmail.com. Or send us a message below.</p>
                        <br></br>
                        
                        <div className={styles.feedback}>
                            
                            
                                <form action="" method="post" className={styles.feedbackForm}>
                                    <label htmlFor="name">Your name</label>
                                    <input id="name" type="text" name="name"></input>
                                    
                                    <label htmlFor="email">Your e-mail</label>
                                    <input id="email" type="email" name="email"></input>

                                    <label htmlFor="tourName">Tour Name</label>
                                    <input id="tourName" type="text" name="tourName"></input>

                                    <label htmlFor="message">Your message</label>
                                    <textarea id="message" type="text" name="message"></textarea>

                                   
                                        <input type="submit" value="Submit a request"></input>
                                    
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
                        <h2>Ready for your new adventure?</h2>
                        <div className={styles.feedback}>
                            
                            
                                <form action="" method="post" className={styles.feedbackForm}>
                                    <label htmlFor="name">Your name</label>
                                    <input id="name" type="text" name="name" placeholder="Your name"></input>
                                    
                                    <label htmlFor="email">Your e-mail</label>
                                    <input id="email" type="email" name="email" placeholder="Your e-mail"></input>

                                    <label htmlFor="tourName">Tour Name</label>
                                    <input id="tourName" type="text" name="tourName" placeholder="Tour Name"></input>

                                    <label htmlFor="message">Your message</label>
                                    <textarea id="message" type="text" name="message" placeholder="Your message"></textarea>
                                    <div className={styles.privacy}>
                                        <input type="checkbox" id="checkLaw"></input>
                                        <label htmlFor="checkLaw">I accept the terms of the [Privacy Policy]</label>
                                    </div>
                                    
                                    <input type="submit" value="Submit a request"></input>
                                    
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