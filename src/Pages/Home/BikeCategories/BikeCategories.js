import React, { useEffect, useState }  from 'react';
import Bike from './Bike';
import Product from './Bike';

const Bikebrands = () => {
    const [brands, setBrands] = useState([])
    useEffect(() =>{
        fetch('brand.json')
        .then(res => res.json())
        .then(data => {
            setBrands(data)
        })
    })
    return (
        <div className='my-10'>
            <h2 className="text-primary my-10 text-center text-4xl font-semibold">Bike brands</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-0'>
                {
                    brands.map(brand => <Bike key={brand._id} brandName={brand}></Bike>)
                }
            </div>
        </div>
    );
};

export default Bikebrands;