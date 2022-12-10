import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from "../../image/errorPage.jpg"

const ErrorPage = () => {
    return (
        <div >
            <img src="https://media4.giphy.com/media/n4xLW9k2tLOw1rt1VF/giphy.gif?cid=ecf05e47ual8ik647dfugrofu0su1ecnm8h5rxjlw1tgn1es&rid=giphy.gif&ct=s" className='w-2/5 mx-auto' alt='errorPage'/>
            <Link to='/' className='btn px-4 py-3 mx-auto relative left-2/4 rounded-md text-white bg-teal-600'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;