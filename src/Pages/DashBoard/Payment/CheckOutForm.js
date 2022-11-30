import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ booking }) => {
    console.log(booking)
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const { bikePrice, buyerName, email } = booking
    const [clientSecret, setClientSecret] = useState("");



    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch('http://localhost:5000/create-payment-intent', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             athorization: `bearer ${localStorage.getItem('access-token')}`
    //         },
    //         body: JSON.stringify({bikePrice}),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setClientSecret(data.clientSecret));
    // }, [bikePrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: email
                    },
                },
            },
        );


        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-8' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className='text-error'>{cardError}</p>
        </>
    );
};

export default CheckOutForm;