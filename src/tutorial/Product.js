import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../assets/default-image.jpg';

const Product = ({image,name,price}) => {
    console.log(image,name,price);
    return (
        <article className='Product'>
            <h4>single product</h4>
        </article>
    );
}

Product.propTypes = {
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

Product.defaultProps = {
    name: 'default name',
    image: defaultImage,
    price: 0.00
}