import A from "../components/A"
import Head from "next/head"
import styles from "../styles/mainContainer.module.css"
import Feedback from "./feedback"

const MainContainer = ({children, keywords}) =>{
    return (
        <>

        <Head>
            <meta keywords={"Prototype, tours" + keywords}></meta>
            <title>Prototype of tour's site</title>
        </Head>

            <div className={styles.navbar}>

                <input type="checkbox" id={styles.menuCheck}></input>
                <div className={styles.MobilView}>
                    <h2 className={styles.comName}>Company name</h2>
                    <label for={styles.menuCheck} class={styles.hamburger}>☰</label>
                </div>
                <div className={styles.menu}>
                    <A href={'/'} text={"Main"}/>
                    <A href={'/about'} text={"About"}/>
                    <A href={'/tourTypes'} text={"Tour Types"}/>
                    <A href={'/feedback'} text={"Feedback"}/>
                    <A href={'/help'} text={"Help"}/>
                    <A href={'/sight'} text={"Sigth"}/>
                </div>
            </div>
            {children}



            <Feedback></Feedback>
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