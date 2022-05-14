import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    console.log(appointments)
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myappointment?email=${user.email}`)
                .then(response => response.json())
                .then(data => setAppointments(data))
        }
    }, [user])

    return (
        <div>
            <h3 className='text-2xl my-4'>You have {appointments.length} appointments.</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Sl. No</th>
                            <th>Patient Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.time}</td>
                                <td>{a.treatmentName}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyAppointments