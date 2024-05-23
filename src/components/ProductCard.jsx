import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductCard = ()=>{
  return (
    <div className='div1'>
      <div className='div2'>
        <img className='img' src='https://2.wlimg.com/product_images/bc-small/2020/2/4222645/noise-sensor-1582793122-5316534.jpeg'/>
      </div>
      <p>Industrial noise sensor</p>
    </div>
      );
}

export default ProductCard
