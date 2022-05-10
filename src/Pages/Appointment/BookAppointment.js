import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import Service from './Service'

const BookAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h3 className='text-3xl text-center mb-5 text-secondary font-bold'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>

    )
}

export default BookAppointment