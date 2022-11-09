import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {

    const details = useLoaderData();
    const handleSubmit = event =>{
        event.preventDefault()
        const message = event.target.message.value;
        const ratings = event.target.ratings.value;
        console.log(message,ratings)
    }
    return (
        <div>
            <img src={details[0].img} alt='' className='mx-auto w-8/12 h-96' />
            <div className='px-24 py-10'>
            <h1 className='text-2xl py-2 font-bold text-gray-800'>{details[0].name}</h1>
                <div className='flex items-center py-5'>
                <h1 className='text-lg'>Price: ${details[0].price}</h1>
                <button className='text-white rounded-md font-bold ml-5 hover:bg-white hover:border hover:border-blue-500 hover:text-blue-600 ease-linear duration-75 bg-blue-500 px-4 py-2'>Buy this Package</button>
                </div>
                <div>
                    <p>{details[0].description}</p>
                </div>
            </div>
            <div className='px-24 py-10'>
                <h1 className='uppercase text-xl text-gray-700 font-bold'>Reviews:</h1>
                <div>
                <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12  dark:text-gray-900">
	<div className="flex flex-col items-center w-full">
		
		<form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-evenly items-center w-full">
			<textarea name='message' rows="2" placeholder="Message..." className="p-5 mr-10 rounded-md w-3/5 resize-none dark:text-gray-900 border-2 border-gray-500"></textarea>
            <select name='ratings' className="select p-2 md:py-1 py-10  w-full max-w-xs">
  <option  disabled selected>Pick your ratings</option>
  <option value='1'>1</option>
  <option value='1.5'>1.5</option>
  <option value='2'>2</option>
  <option value='2.5'>2.5</option>
  <option value='3'>3</option>
  <option value='3.5'>3.5</option>
  <option value='4'>4</option>
  <option value='4.5'>4.5</option>
  <option value='5'>5</option>
</select>
			<button type="submit" className="py-2 px-2 my-8 font-semibold rounded-md text-white bg-blue-500">Leave feedback</button>
		</form>
        <div>
        <div className="container flex flex-col w-full m-full p-6 mx-auto divide-y rounded-md divide-gray-700 text-gray-900 shadow-lg border-2">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">Leroy Jenkins</h4>
				<span className="text-xs dark:text-gray-700">2 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
				<path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
			</svg>
			<span className="text-xl font-bold">4.5</span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-800">
		<p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
		<p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
	</div>
</div>
        </div>
	</div>
</div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;