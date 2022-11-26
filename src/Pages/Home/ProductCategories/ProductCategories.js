import React from 'react';
import Product from './Product';

const ProductCategories = () => {
    return (
        <div className='my-10'>
            <h2 className="text-primary my-10 text-center text-4xl font-semibold">Product Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-0'>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    );
};

export default ProductCategories;