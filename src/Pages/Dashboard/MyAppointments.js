import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const navigate = useNavigate()
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        if (user) {
            fetch(`https://damp-meadow-68094.herokuapp.com/myappointment?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(response => {
                    if (response.status === 401 || response.status === 403) {
                        navigate('/')
                        return toast.error(response.statusText, { id: 'status-text' })
                    }
                    else {
                        return response.json()
                    }
                })
                .then(data => setAppointments(data))
        }
    }, [navigate, user])

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
                            appointments.map((a, index) => <tr
                                key={index}
                            >
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