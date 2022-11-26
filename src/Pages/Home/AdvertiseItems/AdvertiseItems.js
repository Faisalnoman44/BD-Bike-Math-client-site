import React from 'react';

const AdvertiseItems = () => {
    return (
        <div className='my-10 px-5 shadow-xl'>
            <h2 className="text-primary my-10 text-center text-4xl font-semibold ">Advertise</h2>
            <div className="card h-[600px] md:h-96 lg:card-side bg-base-100 mt-10">
                <figure className='w-full h-72 md:h-full md:w-4/12'><img className='w-full h-full' src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>

    );
};

export default AdvertiseItems;