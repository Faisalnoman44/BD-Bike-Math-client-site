import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';

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

        fetch('https://final-assignment-server-site-rho.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                athorization: `bearer ${localStorage.getItem('access-token')}`
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
    }


    const updateBikeCollection = (_id) => {
        fetch(`https://final-assignment-server-site-rho.vercel.app/bikes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                athorization: `bearer ${localStorage.getItem('access-token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Booked Successfully', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookingModal;