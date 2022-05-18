import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import CheckoutForm from './CheckoutForm';




const stripePromise = loadStripe('pk_test_51L0dEWCZgoTM5Tayhs4p1lO2REirHqdBn34Pp0fPfvRzKZgv6ZnfqcGGGJ9l0iaigflrjz4TXdy8nEdsGufjPyTw008RZYfrLE');


const Payment = () => {
    const { id } = useParams();
    const { data: appointment, isLoading, error } = useQuery(['appointmentt', id], () =>
        fetch(`https://damp-meadow-68094.herokuapp.com/booking/${id}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('access-token')}`
            }
        }).then(res =>
            res.json()
        )
    );

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const { patientName, treatmentName, treatmentPrice, date, time } = appointment;

    return (
        <>
            <div class="card w-96 bg-base-100 shadow-xl mb-8 p-4">
                <h2 className='font-bold text-secondary'>Helo, {patientName}</h2>
                <div class="card-body">
                    <h2 class="card-title">Pay for {treatmentName}</h2>
                    <p>Your appointment on <span className='text-rose-500'>{date}</span> at <span className='text-rose-500'>{time}</span></p>
                    <p>Please Pay ${treatmentPrice}</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </>
    )
}

export default Payment