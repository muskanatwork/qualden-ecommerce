import Nav from "../Home/Nav"
import Data from '../Home/Data.json'
import ProductCard from "../Home/ProductCard";

function Products() {
    console.log(Data);
    return (
        <>
        <Nav />
        <h1>
            Procuct us
        </h1>
            <ProductCard/>
        </>
    )
}

export default Products
