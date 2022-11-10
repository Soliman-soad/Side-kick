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
        
        fetch(`http://localhost:5000/services`,{
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
        <div>
            <h1 className='text-2xl text-center mt-5 mb-3'>Add a service</h1>
            <form onSubmit={handleRegister} className="space-y-6 p-10 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			
			<input type="text" name="name" id="username" placeholder="Service name" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			
			<input type="text" name="img" id="img" placeholder="Img url" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			
			<input type="text" name="details" id="Email" placeholder="Service details" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			
			<input type="text" name="time" id="Email" placeholder="time" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			
			<input type="text" name="price" id="password" placeholder="Price" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-200 text-gray-900  " />
			<div className="flex justify-end text-xs text-gray-900">

			</div>
		</div>
		<button type='submit' className="block w-full p-3 text-center rounded-sm  bg-blue-500 text-white font-bold">Register</button>
	</form>
    <ToastContainer/>
        </div>
    );
};

export default AddServices;