import React from 'react';
import { Link } from 'react-router-dom';
import {  TbError404 } from "react-icons/tb";

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center text-slate-400'>
            <TbError404  className='inline text-9xl'/>
            <h1 className='text-3xl'>Something is wrong</h1>
            <Link to='/' className='btn p-2 mt-8 rounded-md text-white bg-green-600'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;