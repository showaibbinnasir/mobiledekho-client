import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ payment }) => {
    const { seller_price } = payment
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const [transaction, setTransaction] = useState('')
    const [proccessing , setProccessing] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/create-pament-intend', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ seller_price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [seller_price])
    const stripe = useStripe();
    const elements = useElements()
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error)
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setSuccess('')
        setProccessing(true)
        const {paymentIntent, confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: payment.email,
                  phone : payment.phone
                },
              },
            },
          );
          if(confirmError){
            setCardError(confirmError.message)
            return
          }
          if(paymentIntent.status === 'succeeded'){
            setSuccess('Congratulation, paymet successfull')
            setTransaction(paymentIntent.id)
          }
          setProccessing(false)
          console.log(paymentIntent);
    }
    return (
        <div>
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
                <button className='btn btn-warning' type="submit" disabled={!stripe || !clientSecret || proccessing}>
                    Pay
                </button>
                <p>{cardError}</p>
                {
                    success && <div>
                        <p>{success}</p>
                        <p>Your Transaction Id : {transaction}</p>
                    </div>
                }
            </form>
        </div>
    );
};

export default CheckOutForm;