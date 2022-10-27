import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user, loading} = useContext(AuthContext)

    if (loading) {
        return <div className="text-center w-16 h-16 border-4 border-dashed rounded-full animate-spin border-slate-600"></div>
    }

    if (!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children
    
};

export default PrivateRoute;