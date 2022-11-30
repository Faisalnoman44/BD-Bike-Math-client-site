import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData()
    console.log(booking);

    return (
        <div>
            <h1 className='text-2xl my-4'>Payment For </h1>
            <div className='w-full my-10 border border-primary p-5'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm  booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;