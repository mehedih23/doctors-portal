import React from 'react'
import toast from 'react-hot-toast';

const DoctorRow = ({ index, doctor, refetch }) => {
    const { doctorMail, doctorName, doctorPhoto, expertIn } = doctor;

    const handleDelete = (email) => {
        const confirmation = window.confirm('Are You Sure ?')
        if (confirmation) {

            fetch(`https://damp-meadow-68094.herokuapp.com/doctor/${email}`, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('access-token')}`
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data?.deletedCount) {
                        refetch();
                        toast.success(`Doctor ${doctorName} is removed.`)
                    }
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={doctorPhoto} alt="doctor avatar" />
                    </div>
                </div>
            </td>
            <td>{doctorName}</td>
            <td>{expertIn}</td>
            <td>
                <button
                    onClick={() => handleDelete(doctorMail)}
                    class="btn btn-sm btn-error"
                >Delete</button>
            </td>
        </tr>
    )
}

export default DoctorRow