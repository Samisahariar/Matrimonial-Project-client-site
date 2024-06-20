import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthInformation';
import { ThreeCircles } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user , loader} = useContext(AuthContext);

    if(loader){
        return  <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoutes;