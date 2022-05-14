import { format } from 'date-fns'
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service'

const BookAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, error, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
            res.json()
        )
    );

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    /* useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(response => response.json())
            .then(data => setServices(data))
    }, [formattedDate]) */
    return (
        <div>
            <h3 className='text-3xl text-center mb-5 text-secondary font-bold'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                setTreatment={setTreatment}
                treatment={treatment}
                refetch={refetch}
            ></BookingModal>}
        </div>

    )
}

export default BookAppointment