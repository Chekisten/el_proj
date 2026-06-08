import FuncIcon from "./funcIcon"

const FuncLittleIcon = ({iconsString}) => {
    let icons = iconsString.split(",")
    
    return(
        <>
        {icons.map(icon => {
            return(
                <FuncIcon iconName={icon}></FuncIcon>
            )
            
        })}
        </>
    )
}

export default FuncLittleIcon