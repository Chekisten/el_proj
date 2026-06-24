import A from "../components/A"
import Head from "next/head"
import styles from "../styles/mainContainer.module.css"
import Feedback from "./feedback"

const MainContainer = ({children, keywords, pageType}) =>{
    return (
        <>
 
        <Head>
            <meta keywords={"Prototype, tours" + keywords}></meta>
            <title>Prototype of tour's site</title>
        </Head>

        {/* Global Site Tag (gtag.js) - Google Analytics */}
                <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-WK20QPG7EP"
                strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-WK20QPG7EP');
                `}
                </Script>

            <div className={styles.navbar}>
                <div className={styles.menu}>
                    <A href={'/'} text={"Main"}/>
                    <A href={'/about'} text={"About"}/>
                    <A href={'/tourTypes'} text={"Tour Types"}/>
                    <A href={'/sight'} text={"Sigth"}/>
                </div>
            </div>

            <div className={styles.phoneNavBar}>
                <div className={styles.dropBar}>
                    <div className={styles.dropLogo}>Asia Explore</div>
                    
                    <div className={styles.drops}>
                        <input type="checkbox" id="drop-toggle" className={styles.dropToggle}></input>
                        <label htmlFor="drop-toggle" className={styles.dropButton}>☰</label>
                        <label htmlFor="drop-toggle" className={styles.dropButtonActive}>✕</label>
                        
                        <div className={styles.dropList}>
                            <A href={'/'} text={"Main"}/>
                            <A href={'/about'} text={"About"}/>
                            <A href={'/tourTypes'} text={"Tour Types"}/>
                            <A href={'/sight'} text={"Sigth"}/>
                        </div>
                    </div>
                </div>
                
            </div>
            {children}



            <Feedback feedType={pageType}></Feedback>
            
            <div className={styles.footer}>
            
                <div>
                    <p>Contact information</p>
                    <br></br>
                    <p>Улица Фрунзе, 571, Бишкек, Кыргызстан</p>
                </div>
                
                <div>
                    <p>Social networks</p>
                    <br></br>
                    <p>X com</p>
                    <br></br>
                    <p>+7 888 454 1714</p>  
                    <br></br>
                    <p>example@gmail.com</p>
                    <br></br>
                </div>



            </div>
        </>
    )
}

export default MainContainer