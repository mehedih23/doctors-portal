import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, loadingAdmin] = useAdmin(user);

    if (loading || loadingAdmin) {
        return <div className='h-screen flex justify-center items-center'>
            <ClipLoader loading={loading || loadingAdmin} size={150} />
        </div>
    }

    if (error) {
        return toast.error(error.message, { id: 'auth error' });
    }


    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/login" />;
    }

    return children;
}

export default RequireAdmin