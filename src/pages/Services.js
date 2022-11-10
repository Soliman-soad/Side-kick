import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../custom-Hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTitle('Services')
    const services = useLoaderData();
    return (
        <div>
            <div className='ml-10 mt-5 text-center'>
            <h1 className='text-5xl  uppercase'> Here is my all services</h1>
            <p className='text-gray-500'> Feel free to contact me. I am always here for your response</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
                </div>
        </div>
    );
};

export default Services;