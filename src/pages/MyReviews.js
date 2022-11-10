import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ProfileContext } from '../context/UserContext';

const MyReviews = () => {
    const {user} = useContext(ProfileContext)
    const[delt, setDelt] =useState(true);
    
    console.log(user)
    const[review,setReview]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews`)
        .then(res=>res.json())
        .then(data => setReview(data))
    },[delt])
    const presentReview = review.filter(re => re.user?.uid===user?.uid)
    
    console.log(presentReview)
    console.log(review)
  

  const  handleDelete = id =>{
    fetch(`http://localhost:5000/review/${id}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      toast.error('Review deleted')
      setDelt(!delt)
    })
  }
    return (
        <div>
            <h1 className='text-xl m-10 text-center'>Here your reviews:</h1>
            {
                presentReview.length===0 ? <div className='w-full h-4/5 p-48 font-bold flex justify-center items-center text-5xl text-gray-400'> No review</div> :<></>
            }
            {
                presentReview.map(present => {
                    return <div key={present._id} className=" flex flex-col w-full m-full p-6 mx-auto divide-y rounded-md divide-gray-700 text-gray-900 shadow-lg border-2">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={present?.user?.providerData[0]?.photoURL ? present?.user?.providerData[0]?.photoURL :"https://cdn-icons-png.flaticon.com/512/180/180691.png?w=740&t=st=1667933376~exp=1667933976~hmac=1a461d2424fb0a79589d1208e23741588d5efd0930f0cb299ee072d62c7ca429"} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{present?.user?.providerData[0]?.displayName}</h4>
                        <span className="text-xs dark:text-gray-700">{present.time}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                    </svg>
                    <span className="text-xl font-bold">{present.ratings}</span>
                </div>
                <div>
                    <h1 className='text-xl text-blue-500'>Review of {present?.title}</h1>
                    <div>
                        <button onClick={()=>handleDelete(present._id)} className='text-white bg-red-600 px-3 m-2 py-2 rounded-md'>Delete</button>
                        <Link to={`/review/${present._id}`} className='text-white bg-yellow-500 px-3 m-2 py-2 rounded-md' >Edit</Link>
                    </div>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm dark:text-gray-800">
                <p>{present.message}</p>
                
            </div>
            <ToastContainer/>
        </div>
                    }
                )
            }
        </div>
    );
};

export default MyReviews;