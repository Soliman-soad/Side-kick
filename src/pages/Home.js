import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Typewriter} from 'react-simple-typewriter'
import bio from '../image/profile.jpg'
import ServiceCard from './ServiceCard';
const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <div className='flex w-full flex-col-reverse md:flex-row lg:flex-row pt-5'>
                <div className=' text-gray-800 w-1/2 text-left my-auto pl-10'>
                    <h4 className='text-sm uppercase'>
                        Welcome to my world
                    </h4>
                    <h1 className='text-5xl font-bold'>
                        Hi, I'm
                        <span className='text-blue-400'> Soliman Alam </span>
                    </h1>
                    <h3 className='text-4xl'> a  <span style={{ color: '#60a5fa', fontWeight: 'bold' }}> 
          {/* Style will be inherited from the parent element */}
           <Typewriter
            words={['private tour guide', 'storyteller', ' interpreter', 'friend']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span> 
                     </h3>
                     <p className='my-8 text-lg text-gray-600'>
                        welcome to my website, myself Soliman Alam, I am profesional privet tour guid.I am also a visual storyteller.  I have been working as a private tourist guide as well as an operator since 2010. If you want to have a nice trip with a friendly and trustworthy guide, feel free to knock me. I am here to welcome you from the bottom of my heart!
                     </p>
                </div>
                <div className='w-4/5'><img src={bio} className='w-full' alt=''/></div>
            </div>

            <div>
                <div className='px-10 pt-10'>
                    <h3 className='text-sm uppercase text-blue-500 font-semibold'>services</h3>
                    <h1 className='text-5xl uppercase'>What are my service</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 mx-2'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
                </div>
            </div>      
            <div className='w-full'>
                <Link to='/services' className='text-blue-500 mx-auto uppercase text-semibold pl-5 pb-5'>Click here for more services...</Link>
            </div>
        </div>
    );
};

export default Home;