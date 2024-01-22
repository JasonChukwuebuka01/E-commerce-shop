import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

 
    if(user){
        return <Outlet/>
    }
    return (
      <Navigate to={"/login"} state={{from:location}} replace></Navigate>
    )
}

export default PrivateRoute