import { signOut } from 'firebase/auth';
import React from 'react'
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const User = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://damp-meadow-68094.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(response => {
                if (response.status === 403) {
                    signOut(auth);
                    return toast.error('Failed to make an admin', { id: 'admin-fail' })
                }
                response.json()
            })
            .then(data => {
                if (data?.modifiedCount > 0) {
                    refetch()
                    toast.success('Successfully made an admin', { id: 'admin' })
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role ? <p className='uppercase font-bold'>Already Admin</p> : <button class="btn btn-sm" onClick={makeAdmin}>Make Admin</button>}
            </td>
            <td>
                <button class="btn btn-sm">Remove</button>
            </td>
        </tr>
    )
}

export default User