import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51M97EyIkAcu8iXg3WOVsq5O01lNHSQH1wOAwQ6AIn3fkYw4nQfZgp5bPdjHiPyLsCzUgEXYhSdo2zpvHSgC1lZS800e8v3mAsg')
    console.log(stripePromise)
    const payment = useLoaderData()
    return (
        <div>
            <h1 className='text-2xl text-warning font-semibold'>Payment for {payment.ProductName}</h1>
            <p className="text-xl text-warning">Please pay <strong className='text-orange-500'>{payment.seller_price}</strong> Taka</p>
            <div className='flex justify-center my-6'>
                <div className='w-96 '>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm
                          payment = {payment}
                        ></CheckOutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;