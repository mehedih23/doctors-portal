import { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [loadingAdmin, setLoadingAdmin] = useState(true);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://damp-meadow-68094.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    setAdmin(data.admin)
                    setLoadingAdmin(false);
                })
        }

    }, [user])

    return [admin, loadingAdmin];
}

export default useAdmin;