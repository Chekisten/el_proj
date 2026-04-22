import styles from "../styles/newHorizons.module.css"

const NewHorizons = ({countryType}) => {
    return (
        <>
            <div className="base">
                <div className={styles.newHorizons}>
                    <div className="gradient">
                        <div class="gradient-line-left"></div>
                        <h2>New Horizons of {countryType}</h2>
                        <div class="gradient-line-right"></div>
                    </div>
                    <p>of International убрать потом</p>
                    

                </div>
            </div>
        </>
    )
}

export default NewHorizons