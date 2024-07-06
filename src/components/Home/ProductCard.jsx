import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
    return (
        <>
            <Link to='/product/productDetails'>
                <div className="ProductCardDiv">
                    <div>
                        <img src={item.productImg} alt={item.productName} />
                    </div>
                    <h3>{item.productName}</h3>
                </div>
            </Link>
        </>
    );
}

export default ProductCard;
