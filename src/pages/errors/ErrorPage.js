import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from "../../image/errorPage.jpg"

const ErrorPage = () => {
    return (
        <div>
            <img src={errorImg} className='w-2/5 mx-auto' alt='errorPage'/>
            <Link to='/' className='btn px-4 py-3 rounded-md text-white bg-blue-600'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;