import A from "../components/A"
import Head from "next/head"
import styles from "../styles/mainContainer.module.css"

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



            <div className={styles.footer}>
                <p>Contact information</p>

                <p>X com</p>
                <p>+7 888 454 1714</p>
                <p>example@gmail.com</p>


            </div>
        </>
    )
}

export default MainContainer