import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../custom-Hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('Services')
    const services = useLoaderData();
    return (
        <div>
            <div className='h-20 bg-pink-600'></div>
            <div className='min-h-screen'>
            <div className='text-center'>
            <h1 className='text-4xl pt-10 uppercase mb-10'>Select your plan</h1>
            
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 m-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default Services;