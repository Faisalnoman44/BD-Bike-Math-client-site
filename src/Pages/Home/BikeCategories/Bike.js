import React from 'react';
import { Link } from 'react-router-dom';

const Bike = ({ brandName }) => {
    const { brand, image } = brandName
    return (
        <div className="card w-full bg-base-100 shadow-xl image-full rounded-md">
            <figure><img src={image} className='w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-5xl">{brand}</h2>
                <Link  to={`/allbike/${brand}`} className="card-actions justify-end mt-40">
                    <button className="btn btn-primary">See Bikes</button>
                </Link>
            </div>
        </div>
    );
};

export default Bike;