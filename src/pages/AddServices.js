import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddServices = () => {
    const handleRegister = event =>{
        event.preventDefault();
        const details = event.target.details.value;
        const price = event.target.price.value;
        const name = event.target.name.value;
        const img = event.target.img.value;
        const time = event.target.time.value;
        console.log(details,price,name,img,time);
        const data = {
            name:name,
            img:img,
            description:details,
            price:price,
            time:time
        }
        
        fetch(`https://sidekick-server-soliman-soad.vercel.app/services`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data) 
        }
        )
        .then(res=>res.json())
        .then(data => {
            toast.success('Service added!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });    
            console.log(data)})
            
    }        

    return (
        <div data-aos="zoom-in" className='mb-10 mt-5 py-8 flex flex-col w-10/12 md:w-5/12 m-full mx-auto divide-y rounded-md divide-gray-700 text-black shadow-lg border-2'>
            <h1 className='text-2xl text-center mt-5 mb-3 text-white'>Add a service</h1>
            <form onSubmit={handleRegister} className="space-y-6 p-10 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			
			<input type="text" name="name" id="username" placeholder="Service name" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 " />
		</div>
		<div className="space-y-1 text-sm">
			
			<input type="text" name="img" id="img" placeholder="Img url" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200  " />
		</div>
		<div className="space-y-1 text-sm">
			
			<input type="text" name="details" id="Email" placeholder="Service details" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200  " />
		</div>
		<div className="space-y-1 text-sm">
			
			<input type="text" name="time" id="Email" placeholder="time" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200  " />
		</div>
		<div className="space-y-1 text-sm">
			
			<input type="text" name="price" id="password" placeholder="Price" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-200   " />
			<div className="flex justify-end text-xs text-white">

			</div>
		</div>
		<button type='submit' className="block w-full p-3 text-center rounded-sm  bg-teal-500 text-white font-bold">Add item</button>
	</form>
    <ToastContainer/>
        </div>
    );
};

export default AddServices;