import React from 'react';

const OneBike = ({ bike, setBookingBike }) => {
    const { name, brand, image, time, address, resalePrice, orginalPrice, year_of_use, status } = bike
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
                    <p><span className='font-semibold'>Year of use:</span> {year_of_use}</p>
                    <p><span className='font-semibold'>Posted Time:</span> {time}</p>
                </div>
                <div className="card-actions justify-end">
                    < label disabled={status === 'booked'} label htmlFor="booking-modal" onClick={() => setBookingBike(bike)} className="btn btn-primary" > {status === 'booked'? 'Booked' : 'Book Now' }</ label>
                </div>
            </div>
        </div >
    );
};

export default OneBike;