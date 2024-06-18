const ProductCardCarousel = ({item})=>{
    return(
        <>
            <div>
                <div>
                    <img src={item.image}/>
                </div>
                <h4>{item.heading}</h4>
                <button>Get Best Quote</button>
            </div>
        </>
    );
}

export default ProductCardCarousel