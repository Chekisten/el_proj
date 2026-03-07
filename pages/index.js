
import A from "../components/A"


const Index = () => {
    return (
        <div>
            <div className="navbar">
                <A href={'/'} text="Main"/>
                <A href={'/about'} text="About"/>
            </div>

            <h1>main page</h1>

        </div>
    );
};

export default Index; 