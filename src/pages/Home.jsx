import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Typewriter} from 'react-simple-typewriter'
import { toast, ToastContainer } from 'react-toastify';
import { useTitle } from '../custom-Hooks/useTitle';
import card1 from '../image/card1.jpg'
import card2 from '../image/card2.jpg'
import card3 from '../image/card3.jpg'
import ServiceCard from './ServiceCard';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import Bg from '../image/bg.jpg';
import tour from '../image/tour.jpg'



const Home = () => {
    const services = useLoaderData();
    useTitle('Home')
    const handleSubmit=()=>{        
        toast.success('Message send!')
    }

    return (
        <div className=' space-y-20'>
            <div className='h-screen mx-auto relative z-20'>
			<div className='absolute -z-10 w-full h-full '>
				<img src={Bg} alt="" className='h-full w-full object-cover' />
			</div>
			<div className='flex items-center flex-col justify-center w-full bg-slate-900/20 h-full text-center bg-gradient-to-t from-[#090d29]'>
				<h3 className='text-xl font-semibold'>Welcome to Sidekick</h3>
				<h1 className='lg:text-7xl md:text-5xl text-4xl font-semibold'>We take care your Tour</h1>
				<p className='mt-3'>We believe in travel experience with plan that suit you best.</p>
				<button className='bg-green-500 text-white px-3 py-2 font-semibold mt-5'>Book a Tour {` >`}</button>
			</div>
			</div>

			<div>
				<h1 className='text-2xl lg:text-4xl font-semibold text-center'>What kind of offer we provide you</h1>
				<p className='text-center'>Here you can see and know why what we provide you and what are our services.</p>

				<div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mx-5'>
					
					<div className='relative bg-slate-700 h-96  overflow-hidden hover:bg-green-700 hover:scale-y-110 transition ease-in-out duration-200 group'>
						<div className='absolute -right-5 -top-6'>
							<img src={card1} alt="card" className='rounded-full w-36 h-36' />
						</div>
						<div className='flex flex-col justify-center h-full px-5'>
							<h1 className='text-4xl font-mono font-semibold text-slate-500 group-hover:text-white'>01</h1>
							<h2 className='text-2xl font-semibold mt-4 mb-1'>Various Destination</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam consequuntur eius iste labore adipisci officiis, dolore pariatur cupiditate possimus, optio maiores itaque fuga repellendus laborum. Provident laboriosam repellat quo magnam.</p>
						</div>
					</div>


					
					<div className='relative bg-slate-700 h-96  overflow-hidden hover:bg-green-700 hover:scale-y-110 transition ease-in-out duration-200 group'>
						<div className='absolute -right-5 -top-6'>
							<img src={card2} alt="card" className='rounded-full w-36 h-36' />
						</div>
						<div className='flex flex-col justify-center h-full px-5'>
							<h1 className='text-4xl font-mono font-semibold text-slate-500 group-hover:text-white'>01</h1>
							<h2 className='text-2xl font-semibold mt-4 mb-1'>Various Destination</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam consequuntur eius iste labore adipisci officiis, dolore pariatur cupiditate possimus, optio maiores itaque fuga repellendus laborum. Provident laboriosam repellat quo magnam.</p>
						</div>
					</div>


					<div className='relative bg-slate-700 h-96  overflow-hidden hover:bg-green-700 hover:scale-y-110 transition ease-in-out duration-200 group'>
						<div className='absolute -right-5 -top-6'>
							<img src={card3} alt="card" className='rounded-full w-36 h-36' />
						</div>
						<div className='flex flex-col justify-center h-full px-5'>
							<h1 className='text-4xl font-mono font-semibold text-slate-500 group-hover:text-white'>01</h1>
							<h2 className='text-2xl font-semibold mt-4 mb-1'>Various Destination</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam consequuntur eius iste labore adipisci officiis, dolore pariatur cupiditate possimus, optio maiores itaque fuga repellendus laborum. Provident laboriosam repellat quo magnam.</p>
						</div>
					</div>


				</div>
			</div>

            <div data-aos="fade-up" className='py-24'>
                <div   className='px-10 pt-10'>
                    <h3 className='text-sm uppercase text-teal-500 text-center font-semibold'>services</h3>
                    <h1 className='text-5xl uppercase text-center'>What are my service</h1>
                </div>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-5 mx-2'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
                </div>
                <div className='w-full'>
                <Link to='/services' className='text-blue-700 block mt-10 text-center uppercase text-semibold pl-5 pb-5'>Click here for more services...</Link>
            </div>
            </div>  

				<section className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center px-2 md:px-5'>
					<div>
						<img src={tour} alt="" className='max-w-xl object-cover mx-auto' />
					</div>
					<div>
						<h1 className='text-3xl md:text-5xl font-semibold mb-5'>With Our Experience We Will Serve You</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, vero. Ea maxime rerum dicta illo accusamus architecto sit, molestiae enim aliquam quis accusantium sunt vel sed, alias provident doloribus fugit.</p>
						<div>
						<div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-6 lg:py-10">
						<div className="grid grid-cols-1 row-gap-2 md:grid-cols-3 gap-5">
							<div className="text-center">
							<h6 className="text-2xl font-bold lg:text-3xl">144K</h6>
							<p className="text-sm font-medium tracking-widest uppercase lg:text-base">
								Downloads
							</p>
							</div>
							<div className="text-center">
							<h6 className="text-2xl font-bold lg:text-3xl">12.9K</h6>
							<p className="text-sm font-medium tracking-widest uppercase lg:text-base">
								Subscribers
							</p>
							</div>
							<div className="text-center ">
							<h6 className="text-2xl font-bold lg:text-3xl">48.3K</h6>
							<p className="text-sm font-medium tracking-widest uppercase lg:text-base">
								Users
							</p>
							</div>
						</div>
    </div>
						</div>
					</div>
				</section>


            <section data-aos="fade-up" className="my-20">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
	</div>
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">I have got some great experice with services that they have provide. They give us proper planning which is really good.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-white"></span>
			<p>Ariful hoq</p>
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-lg italic">I would like to take more services form them. Their friendly behivour to the service more comfortable. I would prefer anyone about this company.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-white"></span>
			<p>Tipo sultan</p>
		</div>
	</div>
</section>    
            
    <section data-aos="fade-up" className="py-6 dark:bg-gray-800 dark:text-gray-50 mb-24 mb-10 mt-5 py-8 flex flex-col w-10/12 m-full mx-auto divide-y rounded-md divide-gray-700 text-white shadow-lg border-2">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Sylhet, Bangladesh</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>01515275356</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>solimanalam1999@gmail.com</span>
				</p>
			</div>
		</div>
		<div  className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
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
				<textarea rows="3" name='message' className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-teal-400 p-3 "></textarea>
			</label>
			<button onClick={handleSubmit} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-teal-500 btn text-white">Submit</button>
		</div>
        <ToastContainer/>
	</div>
</section>


        </div>
    );
};

export default Home;