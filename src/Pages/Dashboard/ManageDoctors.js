import React from 'react'
import { useQuery } from 'react-query'
import DoctorRow from './DoctorRow'

const ManageDoctors = () => {
    const { isLoading, error, data: doctors, refetch } = useQuery('users', () =>
        fetch('https://damp-meadow-68094.herokuapp.com/doctor', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <h2 className='text-3xl'>Manage Doctors {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Expert In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                refetch={refetch}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageDoctors