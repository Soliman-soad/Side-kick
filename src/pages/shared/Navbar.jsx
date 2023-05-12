import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ProfileContext } from '../../context/UserContext';
import navImg from '../../image/12796-removebg-preview.png'
import { BsPersonFillAdd } from "react-icons/bs";
import { MdModeOfTravel } from "react-icons/md";

const Navbar = () => {
    const{user,logOut} = useContext(ProfileContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const signOut =()=>{
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }
    let activeStyle = {
      textDecoration: "underline",
    };
  return (
    <div className='absolute top-2 z-30 w-full px-4 '>
      <div className='mx-auto'>
        <div className='flex justify-between mx-auto' >
          <h1 className='text-2xl lg:hidden'>SideKick</h1>
          <div className="hidden lg:flex justify-evenly items-center w-2/3 mx-auto">
          <h1 className='text-2xl lg:block hidden'><MdModeOfTravel className='text-3xl inline'/> SideKick</h1>
          <ul className=" px-3 justify-evenly items-center space-x-8 lg:flex mx-auto">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
              end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blog
              </NavLink>
            </li>
            
            {
                user?
                <>
                <li>
              <NavLink
                to="/addService"
                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
              >
                Add service
              </NavLink>
            </li>
                            <li>
              <NavLink
                to="myReview"
                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
              >
                My Reviews
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                aria-label="About us"
                title="About us"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400"
              >
                Profile
              </NavLink>
            </li>
               
                </>
                 :
                <>
                
                </>
            }
          </ul>
          {
              user
              ?
              <ul className='flex items-center justify-around list-none'>
                 <li className='flex items-center'>
                    <div className="relative flex-shrink-0">
			<span onClick={signOut} title='sign out' className="absolute bottom-0 right-0 w-4 h-4 flex justify-center items-center font-semibold text-2xl bg-green-600 cursor-pointer hover:bg-red-600 border rounded-full dark:text-gray-100 transition ease-out duration-200">-</span>
			<img src={user.photoURL ? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/180/180691.png?w=740&t=st=1667933376~exp=1667933976~hmac=1a461d2424fb0a79589d1208e23741588d5efd0930f0cb299ee072d62c7ca429'} alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
		</div>      

                </li>
              </ul>
              :
              <ul className='list-none flex items-center justify-around'>
              <li className='flex items-center'>
              <NavLink
                to="/register"
                style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
                className="inline-flex items-center justify-center h-12 px-6 text-2xl  hover:text-green-500 text-white transition duration-200 "
                aria-label="Register"
                title="Register"
              >
                <BsPersonFillAdd/>
              </NavLink>
            </li>
            
              </ul>
            }
          <div>
            
          </div>
          </div>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                    <div className='flex items-center'>
                    <h1 className='text-xl lg:hidden text-black'><MdModeOfTravel className='text-2xl inline'/> SideKick</h1>
        </div>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-black" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="profile"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="services"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="blog"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="myReview"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          My Review
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="addService"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Add Service
                        </Link>
                      </li>
                     {
                        user ? <li>
                        <button
                       onClick={signOut}    
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-blue-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Register"
                          title="Sign out"
                        >
                          sign out
                        </button>
                      </li>:
                        <>
                         <li>
                        <Link
                          to="/login"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium text-white tracking-wide bg-blue-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Register"
                          title="Sign in"
                        >
                          Sign in
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/register"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-blue-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Register"
                          title="Register"
                        >
                          Register
                        </Link>
                      </li>
                        </>
                     }
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;