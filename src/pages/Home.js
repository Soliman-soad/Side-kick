import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Typewriter} from 'react-simple-typewriter'
import { toast, ToastContainer } from 'react-toastify';
import { useTitle } from '../custom-Hooks/useTitle';
import bio from '../image/profile.jpg'
import ServiceCard from './ServiceCard';

const Home = () => {
    const services = useLoaderData();
    useTitle('Home')
    const handleSubmit=event=>{
        event.preventDefault()
        toast.success('Message send!')
    }
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
                <Link to='/services' className='text-blue-700 block text-center uppercase text-semibold pl-5 pb-5'>Click here for more services...</Link>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Let us join
              <br className="hidden md:block" />
              me to your next{" "}
              <span className="inline-block text-deep-purple-accent-400">
                journey
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Have a journey with me and make some memory together 
            </p>
          </div>
          <div>
            <Link
              to="/services"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Fake address, 9999 City</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>123456789</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>contact@business.com</span>
				</p>
			</div>
		</div>
		<form onSubmit={()=>handleSubmit()} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" name='name' placeholder="name" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-3" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" name='email' placeholder="email" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-3" />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3" name='message' className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 p-3 "></textarea>
			</label>
			<button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
		</form>
        <ToastContainer/>
	</div>
</section>


        </div>
    );
};

export default Home;