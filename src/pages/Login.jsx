import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ProfileContext } from '../context/UserContext';
import { useTitle } from '../custom-Hooks/useTitle';
import { MdOutlineAlternateEmail, MdOutlinePassword } from 'react-icons/md';

const Login = () => {
	useTitle('Login')
    const {logIn,popUpSignIn}=useContext(ProfileContext)
    const navigate = useNavigate()
	const location = useLocation()
  const from = location.state?.from?.pathname || '/';
    const [errorMessage, setErrorMessage] =useState(null)
    const handleLogIn = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;        
		
        logIn(email,password)
        .then(result => {
            const user = result.user;
			const currentUser ={
				user: user.email
			}
            fetch('https://sidekick-server-soliman-soad.vercel.app/jwt',{
				method:'POST',
				headers:{
					'content-type':'application/json'
				},
				body: JSON.stringify(currentUser)
			})
			.then(res=> res.json())
			.then(data => {
				
				localStorage.setItem('token',data.token)
				navigate(from,{replace:true})
			})
        })
        .catch(error => {
            setErrorMessage(error.message);
        })
    }

	const handleGoogleLogIn = () =>{
		popUpSignIn()
		.then(result =>{
			const user =result.user;
			const currentUser ={
				user: user.email
			}
			fetch('https://sidekick-server-soliman-soad.vercel.app/jwt',{
				method:'POST',
				headers:{
					'content-type':'application/json'
				},
				body: JSON.stringify(currentUser)
			})
			.then(res=> res.json())
			.then(data => {
				
				localStorage.setItem('token',data.token)
				navigate(from,{replace:true})
			})
		})
		.catch(error => console.log(error))
	}
    return (
        <div>
			<div className='h-20 bg-pink-600'></div>
			<div className='mb-10 mt-5 py-8 flex flex-col w-10/12 md:w-5/12 m-full mx-auto divide-y rounded-md divide-gray-700 text-white shadow-lg border-2 pt-10 '>
      <div className='flex w-full mx-auto items-center rounded-md' >
      <div className="w-full max-w-md space-y-3 rounded-xl  mx-auto my-auto text-white">
	<h1 className="text-2xl font-bold text-center text-white">Login</h1>
	<form onSubmit={handleLogIn} className="space-y-6  ng-untouched ng-pristine ng-valid">
		
	<div className="space-y-1 text-sm flex items-center rounded-full px-4 bg-white">
			<MdOutlineAlternateEmail className='text-3xl text-black mr-2'/>
			<input type="email" name="email" id="Email" placeholder="Email" className="w-full px-4 py-3 rounded-md text-black" />
		</div>
		<div className="space-y-1 text-sm flex items-center rounded-full px-4 bg-white">
			<MdOutlinePassword className='text-3xl text-black mr-2'/>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md text-black" />
			<div className="flex justify-end text-xs text-white">
                <p>{errorMessage}</p>
			</div>
		</div>
		<button type='submit' className="block w-full p-3 text-center rounded-sm  bg-green-600 text-white font-bold">Sign in</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
		<p className="px-3 text-sm text-white">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogleLogIn} aria-label="Log in with Google" className="p-3 rounded-md text-white bg-red-600 flex">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current mr-2">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
            Log in with Google
		</button>
	</div>
	<p className="text-sm text-center sm:px-6 text-white">Don't have an account?
		<Link  to="/register" className="underline dark:text-blue-900">Sign up</Link>
	</p>
</div>
      </div>
        </div>
		</div>
    );
};

export default Login;