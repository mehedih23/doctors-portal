import React, { useState } from 'react'
import AppointmentBanner from './AppointmentBanner'
import BookAppointment from './BookAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                date={date}
                setDate={setDate}
            ></AppointmentBanner>
            <BookAppointment
                date={date}
            ></BookAppointment>
        </div>
    )
}

export default Appointment