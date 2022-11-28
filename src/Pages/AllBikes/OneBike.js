import React from 'react';

const OneBike = ({ bike }) => {
    const { name, brand, image, phone, address, resalePrice, orginalPrice, Year_of_use } = bike
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mb-7 md:h-96">
            <figure className='md:w-5/12' >
                <img className='h-full' src={image} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Bike Name: {name}</h2>
                <p className='text-xl font-semibold'>Brand: {brand}</p>
                <div className='text-lg'>
                    <p><span className='font-semibold'>Address:</span> {address}</p>
                    <p><span className='font-semibold'>Resale Price:</span> {resalePrice}</p>
                    <p><span className='font-semibold'>Original Price:</span> {orginalPrice}</p>
                    <p><span className='font-semibold'>Year of use:</span> {Year_of_use}</p>
                    <p><span className='font-semibold'>Phone Number:</span> {phone}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div >
        // <div className="card  lg:card-side bg-base-100 shadow-xl mb-5 h-80">
        //     <figure className='w-full md:w-4/12'>
        //         <img className='h-full w-full' src={image} alt="Movie" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title text-2xl">Bike Name: {name}</h2>
        //         <p className='text-xl font-semibold'>Brand: {brand}</p>
        //         <div className='text-lg'>
        //             <p><span className='font-semibold'>Address:</span> {address}</p>
        //             <p><span className='font-semibold'>Resale Price:</span> {resalePrice}</p>
        //             <p><span className='font-semibold'>Original Price:</span> {orginalPrice}</p>
        //             <p><span className='font-semibold'>Year of use:</span> {Year_of_use}</p>
        //             <p><span className='font-semibold'>Phone Number:</span> {phone}</p>
        //         </div>
        //         <div className="card-actions justify-end">
        //             <button className="btn btn-primary">Watch</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default OneBike;