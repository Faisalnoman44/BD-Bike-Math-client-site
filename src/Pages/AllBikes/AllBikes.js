import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import OneBike from './OneBike';

const AllallBike = () => {
    const [bookingBike, setBookingBike] = useState(null)
    const allBike = useLoaderData()

    const [bike, setBike] = useState([])
    const bikes = allBike.filter(bike => bike.status !== 'pending')





    return (
        <>
            <div className='mt-10'>
                {
                    bikes.map(bike => <OneBike
                        key={bike._id}
                        bike={bike}
                        setBookingBike={setBookingBike}
                    ></OneBike>)
                }
            </div>
            {
                bookingBike && <BookingModal
                    bookingBike={bookingBike}
                    setBookingBike={setBookingBike}
                ></BookingModal>
            }
        </>

    );
};

export default AllallBike;