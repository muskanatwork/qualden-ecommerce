import { Link } from 'react-router-dom';
import GridItem from '@mui/material/Grid';


const ProductCard = ({ item }) => {
    return (
        <>
            <GridItem item sm={6} md={6}>
                <Link to='/product/productDetails'>
                    <div className="ProductCardDiv">
                        <div>
                            <img src={item.productImg} alt={item.productName} />
                        </div>
                        <h3>{item.productName}</h3>
                    </div>  
                </Link>
            </GridItem>
        </>
    );
}

export default ProductCard;
