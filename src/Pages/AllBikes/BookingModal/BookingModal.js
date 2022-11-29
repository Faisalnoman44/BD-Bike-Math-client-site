import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ bookingBike, setBookingBike }) => {
    const { _id, name, resalePrice } = bookingBike
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const buyerName = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phone.value;
        const bikePrice = form.price.value;
        const meetingLocation = form.meetingLocation.value;

        const bookingData = {
            bikeName: name,
            buyerName,
            email,
            phoneNumber,
            bikePrice,
            meetingLocation,

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    updateBikeCollection(_id)
                }
            })
        console.log(bookingData)
    }


    const updateBikeCollection = (_id) => {
        fetch(`http://localhost:5000/bikes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookingBike(null)
                navigate('/dashboard/myorders')
                
            })
    }


    return (
        <div>
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input type="text" name='email' defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input type="text" name='price' defaultValue={resalePrice} disabled placeholder="price" className="input w-full input-bordered" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input w-full input-bordered" />
                        <input type="text" name='meetingLocation' placeholder="Meeting Location" className="input w-full input-bordered" />
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;