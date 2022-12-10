import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ProfileContext } from '../context/UserContext';
import { Audio, Triangle } from  'react-loader-spinner'



const PrivateRouter = ({children}) => {
    let location = useLocation();
    const {user,loading} = useContext(ProfileContext);
    if(loading){
        // loader section
        return <div className='mx-auto mt-10'><Triangle
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>
    }
    if (user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace />
};

export default PrivateRouter;