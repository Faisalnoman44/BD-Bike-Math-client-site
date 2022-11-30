import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import BookingModal from './BookingModal/BookingModal';
import OneBike from './OneBike';

const AllallBike = () => {
    const [bookingBike, setBookingBike] = useState(null)
    const bike = useLoaderData()

    const handleReportToAdmin = (id) => {
        console.log(id);
        fetch(`https://final-assignment-server-site-rho.vercel.app/bikes/reported/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                athorization: `bearer ${localStorage.getItem('access-token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Reported Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    return (
        <>
            <div className='mt-10'>
                {
                    bike.map(bike => <OneBike
                        key={bike._id}
                        bike={bike}
                        setBookingBike={setBookingBike}
                        handleReportToAdmin={handleReportToAdmin}
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