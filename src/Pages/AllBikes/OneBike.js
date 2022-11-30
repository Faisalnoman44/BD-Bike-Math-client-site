import React from 'react';

const OneBike = ({ bike, setBookingBike, handleReportToAdmin }) => {
    const { _id, name, sellerName, brand, image, time, address, resalePrice, orginalPrice, year_of_use, status, phoneNumber, isVerified } = bike



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
                <div>
                    <div className='text-lg flex w-64'>
                        <p><span className='font-semibold'>Seller Name:</span> {sellerName}</p>
                        {
                            isVerified === 'verified' && <img className='w-6 ml-0' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png" alt="" />
                        }
                    </div>
                    <p><span className='font-semibold'> Phone Number:</span> {phoneNumber}</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleReportToAdmin(_id)} className='btn btn-danger'>Report to Admin</button>
                    < label disabled={status === 'booked'} label htmlFor="booking-modal" onClick={() => setBookingBike(bike)} className="btn btn-primary" > {status === 'booked' ? 'Booked' : 'Book Now'}</ label>
                </div>
            </div>
        </div >
    );
};

export default OneBike;