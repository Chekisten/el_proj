import MainContainer from "../components/mainContainer"
import TypeSlider from "../components/typeSlider"
const Sigth = () =>{
    return (
        <MainContainer>
            <h1>sigth page</h1>
            <div className="base">
                <h2>Что надо исправить/сделать</h2>
                <ol>
                    <li style={{textDecoration: "line-through"}}>Алгоритм сортировки steps</li>
                    <li style={{textDecoration: "line-through"}}>смайлики в steps</li>
                    <li style={{textDecoration: "line-through"}}>функцию для маленьких смайликов в steps</li>
                    <li>блок с краткой информаицей в шапке</li>
                    <li>сжатую фотографию в шапке</li>
                    <li style={{textDecoration: "line-through"}}>смайлики и блок в way</li>
                    <li style={{textDecoration: "line-through"}}>смайлики  в info</li>
                    <li style={{textDecoration: "line-through"}}>смайлики в price</li>
                    <li style={{textDecoration: "line-through"}}>Блок похожих туров в конце страницы тура</li>
                    <li>добавить куда то tour types</li>
                    <li>добавить технические страницы</li>
                    <li>сделать перевод интерфейса</li>
                </ol>


                <div className="base">
                <ul>        
                    
                    <li><a href="/international/cultureTours">Интер культура</a></li>
                    <li><a href="/kazakhstan/cultureTours">Kazakhstan</a></li>
                    <li><a href="/international/cultureTours">kyrgyzstan</a></li>
                    <li><a href="/international/cultureTours">uzbekistan</a></li>
                    <li><a href="/international/cultureTours">tadjikistan</a></li>
                </ul>
            
            </div>


            <TypeSlider></TypeSlider>

            </div>
        </MainContainer>
    )
}

export default Sigth