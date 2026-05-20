import { useState } from "react"
import styles from  "../styles/typeSlider.module.css"
import data from "../database/db.json"
import Link from "next/link"

const TypeSlider = () =>{

    const [types, setType] = useState(data.infos)
    return (
        <>
        <div className="base">
            <div className="gradient">
                    <div class="gradient-line-left"></div>
                    <h2>Tour Types</h2>
                    <div class="gradient-line-right"></div>
            </div>

            <div className={styles.tourTypesBlock}>
                    {
                        types.map(type => { 
                            return (
                                <>
                                    <h3>{type.uniqTypeName}</h3>
                                    <Link href={type.uniqTypeName}>Пук</Link>
                                    
                                </>
                                
                            )
                        })
                    }
            </div>

        </div>
        

        </>
    )
}


export default TypeSlider