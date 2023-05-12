import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useTitle } from '../custom-Hooks/useTitle';
import card1 from '../image/card1.jpg'
import card2 from '../image/card2.jpg'
import card3 from '../image/card3.jpg'
import ServiceCard from './ServiceCard';
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Bg from '../image/bg.jpg';
import tour from '../image/tour.jpg'
import hill from '../image/hill.jpg'
import { BiTrip } from "react-icons/bi";
import { GiDeer, GiHangGlider, GiSpeedBoat } from "react-icons/gi";
import {Swiper,SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper';
import { FaAmazon, FaMagento, FaMailchimp, FaMastodon } from "react-icons/fa";
import { FaMandalorian } from 'react-icons/fa';
import { FaMaxcdn } from 'react-icons/fa';
import { MdParagliding } from 'react-icons/md';


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
			<div data-aos="zoom-in" className='flex items-center flex-col justify-center w-full bg-slate-900/20 h-full text-center '>
				<h3 className='text-xl font-semibold'>Welcome to Sidekick</h3>
				<h1 className='lg:text-7xl md:text-5xl text-4xl font-semibold'>We take care your Tour</h1>
				<p className='mt-3'>We believe in travel experience with plan that suit you best.</p>
				<Link to='/services' className='bg-green-500 text-white px-3 py-2 font-semibold mt-5'>Book a Tour {` >`}</Link>
			</div>
			</div>

			<div>
				<h3 className='text-sm uppercase text-pink-500 text-center font-semibold font-mono	'>offer</h3>
				<h1 className='text-2xl lg:text-4xl font-semibold text-center'>Offer that we provide</h1>

				<div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mx-5'>
					
					<div data-aos="zoom-in" className='relative bg-slate-700 h-96  overflow-hidden hover:bg-green-700 hover:scale-y-110 transition ease-in-out duration-200 group'>
						<div className='absolute -right-5 -top-6'>
							<img src={card1} alt="card" className='rounded-full w-36 h-36' />
						</div>
						<div className='flex flex-col justify-center h-full px-5'>
							<h1 className='text-4xl font-mono font-semibold text-slate-500 group-hover:text-white'>01</h1>
							<h2 className='text-2xl font-semibold mt-4 mb-1'>Various Destination</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam consequuntur eius iste labore adipisci officiis, dolore pariatur cupiditate possimus, optio maiores itaque fuga repellendus laborum. Provident laboriosam repellat quo magnam.</p>
						</div>
					</div>


					
					<div data-aos="zoom-in" className='relative bg-slate-700 h-96  overflow-hidden hover:bg-green-700 hover:scale-y-110 transition ease-in-out duration-200 group'>
						<div className='absolute -right-5 -top-6'>
							<img src={card2} alt="card" className='rounded-full w-36 h-36' />
						</div>
						<div className='flex flex-col justify-center h-full px-5'>
							<h1 className='text-4xl font-mono font-semibold text-slate-500 group-hover:text-white'>02</h1>
							<h2 className='text-2xl font-semibold mt-4 mb-1'>Various activities</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam consequuntur eius iste labore adipisci officiis, dolore pariatur cupiditate possimus, optio maiores itaque fuga repellendus laborum. Provident laboriosam repellat quo magnam.</p>
						</div>
					</div>


					<div data-aos="zoom-in" className='relative bg-slate-700 h-96  overflow-hidden hover:bg-green-700 hover:scale-y-110 transition ease-in-out duration-200 group'>
						<div className='absolute -right-5 -top-6'>
							<img src={card3} alt="card" className='rounded-full w-36 h-36' />
						</div>
						<div className='flex flex-col justify-center h-full px-5'>
							<h1 className='text-4xl font-mono font-semibold text-slate-500 group-hover:text-white'>03</h1>
							<h2 className='text-2xl font-semibold mt-4 mb-1'>Budget planning</h2>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam consequuntur eius iste labore adipisci officiis, dolore pariatur cupiditate possimus, optio maiores itaque fuga repellendus laborum. Provident laboriosam repellat quo magnam.</p>
						</div>
					</div>


				</div>
			</div>

            <div data-aos="fade-up" className='py-24'>
                <div   className='px-10 pt-10'>
                    <h3 className='text-sm uppercase text-pink-500 text-center font-semibold font-mono	'>services</h3>
                    <h1 className='text-2xl lg:text-4xl font-semibold text-center '>What are our services</h1>
                </div>
                <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 my-5 mx-2'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
                </div>
                <div className='w-full'>
                <Link to='/services' className='text-pink-500 block mt-10 text-center uppercase text-xs text-semibold pl-5 pb-5'>Click here for more services...</Link>
            </div>
            </div>  

				<section className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center px-2 md:px-5'>
					<div className='max-w-xl'>
						<img src={tour} alt="" className='object-cover mx-auto rounded-md' />
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


			<section  className='relative z-20'>
				<img src={hill} alt="" className='h-full w-full absolute object-cover -z-10' />
				<div className='grid grid-cols-1 md:grid-cols-2 bg-gray-700/70  py-10 items-center'>
					<div className='px-10'>
						<div className='text-white rounded-full w-14 h-14 object-cover bg-pink-600 flex justify-center items-center relative'>
							<div className='h-full w-full rounded-full bg-pink-600 animate-ping absolute z-0'></div>
					<BiTrip className=' text-4xl '/>
						</div>
					<h3 className='text-2xl text-green-400 my-3'>Are you ready for travel</h3>
					<h2 className='text-5xl'>We are one of the trusted company in this field.</h2>
					</div>


					<div className='grid grid-cols-1 mt-5 md:mt-0 mx-auto  md:grid-cols-2 gap-4'>
						<div data-aos="flip-right" className='flex justify-center items-center flex-col w-64 h-52 border group rounded-md cursor-pointer group-hover:border-green-600'>
							<GiDeer className='text-6xl text-pink-600 group-hover:-scale-x-100 transform transition duration-200'/>
							<h2 className='font-semibold text-lg group-hover:text-pink-600'>Wildlife Tour</h2>
						</div>
						<div data-aos="flip-right" className='flex justify-center items-center flex-col w-64 h-52 border group rounded-md cursor-pointer group-hover:border-green-600'>
							<MdParagliding className='text-6xl text-pink-600 group-hover:-scale-x-100 transform transition duration-200'/>
							<h2 className='font-semibold text-lg group-hover:text-pink-600'>Paragliding Tour</h2>
						</div>
						<div data-aos="flip-right" className='flex justify-center items-center flex-col w-64 h-52 border group rounded-md cursor-pointer group-hover:border-green-600'>
							<GiSpeedBoat className='text-6xl text-pink-600 group-hover:-scale-x-100 transform transition duration-200'/>
							<h2 className='font-semibold text-lg group-hover:text-pink-600'>Adventure Tour</h2>
						</div>
						<div data-aos="flip-right" className='flex justify-center items-center flex-col w-64 h-52 border group rounded-md cursor-pointer group-hover:border-green-600'>
							<GiHangGlider className='text-6xl text-pink-600 group-hover:-scale-x-100 transform transition duration-200'/>
							<h2 className='font-semibold text-lg group-hover:text-pink-600'>Hang Glide Tour</h2>
						</div>
					</div>
				</div>

				<div className='grid grid-cols-4 hidden md:block bg-pink-600 text-4xl text-white py-14 px-8'>
					<h1 className='font-mono'>Our Partner</h1>
					<div className='col-span-3'>
					<Swiper
					modules={[Autoplay]}
					 spaceBetween={50}
      				slidesPerView={3}
					  autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					  }}
					>
						<SwiperSlide><FaAmazon className='mx-auto text-6xl'/></SwiperSlide>
						<SwiperSlide><FaMailchimp className='mx-auto text-6xl'/></SwiperSlide>
						<SwiperSlide><FaMagento className='mx-auto text-6xl'/></SwiperSlide>
						<SwiperSlide><FaMastodon className='mx-auto text-6xl'/></SwiperSlide>
						<SwiperSlide><FaMandalorian className='mx-auto text-6xl'/></SwiperSlide>
						<SwiperSlide><FaMaxcdn className='mx-auto text-6xl'/></SwiperSlide>
					</Swiper>
					</div>
				</div>
			</section>



			<div  className="py-16">
            <div className="container mx-auto px-4 flex flex-col lg:items-center justify-between lg:flex-row">
                <div className="mb-14 xl:mb-0">
                    <h1 className="text-2xl leading-tight md:text-4xl xl:text-5xl font-semibold leading-10 xl:w-2/3 pr-16 lg:pr-0">Our customers love what we do</h1>
                    <p className="mt-4 text-base leading-normal md:w-2/3 lg:w-3/4 pr-16 lg:pr-0 text-gray-200">We have gain our customers and they always incourege our work.</p>
                    
                </div>
                <div role="list" aria-label="Testimonials" className="xl:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start text-white">
                    <div data-aos="zoom-in-up"  className="bg-pink-600 hover:bg-green-600 transition ease-in-out duration-150 cursor-pointer shadow rounded p-4 xl:p-8">
                        <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                        <div className="pl-4 pt-4 flex items-start justify-between">
                            <div className="mr-6">
                                <p className="xl:text-xl xl:leading-loose font-serif">This website has a bunch of plans to make my weekend</p>
                                <p className="mt-4 text-sm font-semibold leading-none ">Anna Smith</p>
                            </div>
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-1.png" alt="Display Avatar of Anna Smith" role="img" />
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="bg-pink-600 hover:bg-green-600 transition ease-in-out duration-150 cursor-pointer shadow rounded p-4 xl:p-8">
                        <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                        <div className="pl-4 pt-4 flex items-start justify-between">
                            <div className="mr-6">
                                <p className="xl:text-xl xl:leading-loose font-serif">This website has a great plan</p>
                                <p className="mt-4 text-sm font-semibold leading-none ">Dany John</p>
                            </div>
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-2.png" alt="Display avatar of Dany John" role="img" />
                        </div>
                    </div>
                    <div data-aos="zoom-in-up"  className="bg-pink-600 hover:bg-green-600 transition ease-in-out duration-150 cursor-pointer shadow rounded p-4 xl:p-8">
                        <img src="https://cdn.tuk.dev/assets/components/26May-update/quote.png" aria-hidden="true" />
                        <div className="pl-4 pt-4 flex items-start justify-between">
                            <div className="mr-6">
                                <p className="xl:text-xl xl:leading-loose font-serif">Always keen to look for tour they gave they give perfect service anytime</p>
                                <p className="mt-4 text-sm font-semibold leading-none ">Mike Blake</p>
                            </div>
                            <img src="https://cdn.tuk.dev/assets/components/26May-update/avatar-3.png" alt="Display Avatar of Mike Blake" role="img" />
                        </div>
                    </div>
                    <button className="md:hidden w-full sm:w-auto mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">Read success stories</button>
                </div>
            </div>
        </div>  
            
    <section data-aos="fade-up" className=" dark:bg-gray-800 dark:text-gray-50 mb-10 mt-5 py-8 flex flex-col w-10/12 m-full mx-auto divide-y rounded-md divide-gray-700 text-white shadow-lg border-2">
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
				<textarea rows="3" name='message' className="block w-full rounded-md focus:ring focus:ring-opacity-75 p-3 "></textarea>
			</label>
			<button onClick={handleSubmit} className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-pink-500 btn text-white">Submit</button>
		</div>
        <ToastContainer/>
	</div>
</section>


        </div>
    );
};

export default Home;