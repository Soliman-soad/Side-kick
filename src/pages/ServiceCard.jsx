import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {
	const[review,setReview]=useState([]);
    useEffect(()=>{
        fetch(`https://sidekick-server-soliman-soad.vercel.app/reviews`)
        .then(res=>res.json())
        .then(data => setReview(data))
    },[])
    const presentReview=(id) => review.filter(re => re.id===id)
    return (
        <div>


			{/* big screen view */}
			<Link to={`/service/${service._id}`} aria-label="Share this post" className='hidden md:block'>
            <div className="flex flex-col max-w-md space-y-6 overflow-hidden rounded-sm  relative h-[380px] mx-auto group">
	<div className='w-full h-full absolute'>
	  <img src={service.img} alt="" className="object-cover w-full h-full grayscale group-hover:grayscale-0" />
	</div>
	<div className='z-10 bg-gradient-to-t from-gray-800 h-full w-full flex items-end px-10 pb-8'>
	<div >
	<h3 className='text-sm py-2 font-semibold group-hover:bg-green-500 transition ease-linear duration-150 group-hover:text-white text-gray-800 inline-block bg-white rounded-md px-2 '>${service.price}</h3>
		<h2 className="mb-1 uppercase my-4 text-xl font-semibold">{service.name}</h2>
		<p className="text-sm opacity-0 group-hover:opacity-100 transition ease-linear duration-150">{(service.description).slice(0,100) + '...'}</p>        
		<p className='mt-5 text-green-500 opacity-0 group-hover:opacity-100 transition ease-linear duration-150'>See details</p>
	</div>
	</div>
</div>
		</Link>


		{/* mobile view */}
			<Link to={`/service/${service._id}`} aria-label="Share this post" className='md:hidden'>
            <div className="flex flex-col max-w-md space-y-6 overflow-hidden rounded-lg shadow-md   relative h-[380px] mx-auto group">
	<div className='w-full h-full absolute'>
	  <img src={service.img} alt="" className="object-cover w-full h-full" />
	</div>
	<div className='z-10 bg-gradient-to-t from-gray-800 h-full w-full flex items-end px-10 pb-8'>
	<div >
	<h3 className='text-sm py-2 font-semibold bg-green-500 text-white  inline-block rounded-md px-2 '>${service.price}</h3>
		<h2 className="mb-1 uppercase my-4 text-xl font-semibold">{service.name}</h2>
		<p className="text-sm">{(service.description).slice(0,100) + '...'}</p>
        
			
	</div>
		
	</div>
</div>
		</Link>



        </div>
    );
};

export default ServiceCard;