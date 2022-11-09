import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <div>
            <h1 className='text-4xl ml-10 mt-5 uppercase'> Here is my all services</h1>
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