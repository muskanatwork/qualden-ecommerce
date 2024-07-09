import React, { useState } from 'react';
import data from '../Products/Data.json';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Accordion = () => {
    const [openCategories, setOpenCategories] = useState([]);

    const handleCategoryToggle = (categoryIndex) => {
        if (openCategories.includes(categoryIndex)) {
            setOpenCategories(openCategories.filter((index) => index !== categoryIndex));
        } else {
            setOpenCategories([...openCategories, categoryIndex]);
        }
    };

    return (
        <div className='accordionDiv'>
            <h2>Product</h2>
            <hr className='fristHr'/>
            {data.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                    <h4 onClick={() => handleCategoryToggle(categoryIndex)}>
                        {Object.keys(category)[0]} <span className='accordionIcon'>{openCategories.includes(categoryIndex) ? '-' : '+'}</span>
                    </h4>
                    {openCategories.includes(categoryIndex) && (
                        <div>
                            {category[Object.keys(category)[0]].map((product, index) => (
                                <div key={index} className='accordionItem'>
                                    <div className='accordionHeader' style={{ display: 'flex', alignItems: 'center' }}>
                                        <ChevronRightIcon style={{ marginRight: '8px' }} />
                                        {product.productName}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <hr/>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
