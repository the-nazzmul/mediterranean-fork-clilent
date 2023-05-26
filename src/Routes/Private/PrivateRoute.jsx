import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../../Components/LoadingSpinner';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};


export default PrivateRoute;