import React from 'react';
import { Triangle } from 'react-loader-spinner';

const Loader = () => {
    return <div className='min-h-screen flex justify-center items-center'><Triangle
        height="80"
        width="80"
        color="#FFC0CB"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>
};

export default Loader;