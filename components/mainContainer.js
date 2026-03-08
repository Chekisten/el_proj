import A from "../components/A"
import Head from "next/head"

const MainContainer = ({children, keywords}) =>{
    return (
        <>

        <Head>
            <meta keywords={"Prototype, tours" + keywords}></meta>
            <title>Prototype of tour's site</title>
        </Head>
        <div className="headContacts">
            <p>+7 888 454 1714</p>
            <p>example@gmail.com</p>
        </div>
            <div className="navbar">

                <input type="checkbox" id="menu-check"></input>
                <div className="MobilView">
                    <h2 className="comName">Company name</h2>
                    <label for="menu-check" class="hamburger">☰</label>
                </div>
                <div className="menu">
                    <A href={'/'} text={"Main"}/>
                    <A href={'/about'} text={"About"}/>
                    <A href={'/tourTypes'} text={"Tour Types"}/>
                    <A href={'/feedback'} text={"Feedback"}/>
                    <A href={'/help'} text={"Help"}/>
                    <A href={'/sight'} text={"Sigth"}/>
                </div>
            </div>
            {children}



            <div className="footer">
                <p>Contact information</p>

                <p>X com</p>
                <p>+7 888 454 1714</p>
                <p>example@gmail.com</p>


            </div>
        </>
    )
}

export default MainContainer