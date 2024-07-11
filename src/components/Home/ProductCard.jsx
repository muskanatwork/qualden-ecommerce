import { Link } from 'react-router-dom';
import GridItem from '@mui/material/Grid';
import { Card,CardMedia } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <GridItem item xs={2} sm={3} md={3}>
            <Link 
                className='productLink' 
                to={'/product/productDetails'}
                state={product}
            >
                <div className="ProductCardDiv">
                    <Card>
                        <CardMedia
                            component="img"
                            height="250"
                            alt ={product.productName}
                            image={product.productImg}
                        />
                        <h3>{product.productName}</h3>
                    </Card>
                </div>  
            </Link>
        </GridItem>
    );
}

export default ProductCard;
