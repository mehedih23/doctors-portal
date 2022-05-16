import { useEffect, useState } from 'react';

export default function useToken(data) {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = data?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://damp-meadow-68094.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('access-token', data.token);
                    setToken(data.token)
                })
        }
    }, [data])

    return [token];
}