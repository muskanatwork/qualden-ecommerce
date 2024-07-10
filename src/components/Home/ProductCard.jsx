import { Link } from 'react-router-dom';
import GridItem from '@mui/material/Grid';

const ProductCard = ({ product }) => {
    return (
        <GridItem item xs={2} sm={3} md={3}>
            <Link 
                className='productLink' 
                to={{
                    pathname: '/product/productDetails',
                    state: { product }
                }}
            >
                <div className="ProductCardDiv">
                    <div>
                        <img src={product.productImg} alt={product.productName} />
                    </div>
                    <h3>{product.productName}</h3>
                </div>  
            </Link>
        </GridItem>
    );
}

export default ProductCard;
