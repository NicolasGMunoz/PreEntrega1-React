import Navbar from "./Navbar";
import ItemListContainer from "./ItemListContainer";


const Container = () => {

    const text = "Esto es una prop"

    return(<>

        <Navbar/>
        <ItemListContainer text={text}/>

    </>);
}

export default Container;