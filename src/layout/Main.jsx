import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import Navbar from '../pages/shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <div className='min-h-screen'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;