import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './PriveteContext';

const PriveteRout = ({children}) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    console.log(user)

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
   
    return <Navigate to="/login" state={{from: location}} replace ></Navigate>;
   
};

export default PriveteRout;