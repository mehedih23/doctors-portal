import React from 'react'
import { useQuery } from 'react-query';
import User from './User';

const AllUser = () => {
    // const [users, setUsers] = useState([]);

    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
        fetch('https://damp-meadow-68094.herokuapp.com/users', {
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
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>sl no.</th>
                        <th>User</th>
                        <th>Action</th>
                        <th>Action Two</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <User
                            key={index}
                            user={user}
                            index={index}
                            refetch={refetch}
                        ></User>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllUser