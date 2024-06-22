import { Link} from 'react-router-dom';


const ProductCard = ({item}) => {
    return (
        <>
            <Link to='/product/productDetails'>
                <div className="ProductCardDiv">
                    <div>
                        <img src={item.image} />
                    </div>
                    <h3>{item.heading}</h3>
                </div>
            </Link>
        </>
    )
}

export default ProductCard