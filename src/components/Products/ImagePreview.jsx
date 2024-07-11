import React from 'react';
import ReactImageMagnify from '@blacklab/react-image-magnify';

const ImagePreview = ({ product }) => {
    console.log(product);
    return (
        <div className='zoomingImg'>
            <ReactImageMagnify
                imageProps={{
                    alt: 'PT100 Industrial Temperature Sensor',
                    isFluidWidth: true,
                    src: product.productImg
                }}
                magnifiedImageProps={{
                    src: product.productImg,
                    width: 1200,
                    height: 1800
                }}
            />
        </div>
    );
};

export default ImagePreview;
