import React, { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const { _id, treatmentPrice, patientName, email } = appointment;


    useEffect(() => {
        fetch('https://damp-meadow-68094.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify({ treatmentPrice })
        })
            .then(response => response.json())
            .then(data => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })


    }, [treatmentPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || ' ');

        // confirm card payment //
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            console.log(intentError)
            setCardError(intentError.message)
            setSuccess('');
        }
        else {
            setSuccess('Congrats Your payment is completed.');
            setTransactionId(paymentIntent.id);
            setCardError('')

            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id,
            }

            fetch(`https://damp-meadow-68094.herokuapp.com/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                },
                body: JSON.stringify(payment)
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }

    };

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
                <button className='btn mt-4 btn-success btn-sm' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 my-2'>{cardError}</p>}
            {
                success && <div>
                    <p className='text-green-500 my-2'>{success}</p>
                    <p className='text-green-500 my-2'> Your transection id : <span className='text-orange-600 font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    )
}

export default CheckoutForm