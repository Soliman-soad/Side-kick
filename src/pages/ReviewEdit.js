import moment from 'moment';
import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ProfileContext } from '../context/UserContext';
import { useTitle } from '../custom-Hooks/useTitle';

const ReviewEdit = () => {
    useTitle('Review edit')
    const {user} = useContext(ProfileContext)
    const navigate = useNavigate()
    const details = useLoaderData();
    console.log(details)
    const handleSubmit = event =>{
        event.preventDefault()
        const message = event.target.message.value;
        const ratings = event.target.ratings.value;
        const ratingsData = {
            user:user,
            message:message,
            ratings:ratings,
            time:moment().format('MMMM Do YYYY, h:mm:ss a') 
        }
        console.log(message,ratings,ratingsData)
        fetch(`https://sidekick-server-soliman-soad.vercel.app/review/${details[0]._id}`,{
          method:'PATCH',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(ratingsData)
        })
        .then(res => res.json())
        .then(data=>{
        console.log(data)})
        navigate('/myReview')
    }
    return (
        <div className='my-24'>
            <h1 className='text-2xl m-10 text-center'>Edit your review</h1>
		<form onSubmit={handleSubmit} className=" mb-10 mt-5 py-8 flex flex-col justify-evenly items-center  w-10/12 md:w-5/12 m-full mx-auto divide-y rounded-md divide-gray-700 text-white shadow-lg border-2">
			<textarea name='message' rows="2" placeholder="Message..." className="p-5 mb-5 rounded-md w-3/5 resize-none border-2 text-black border-gray-500"></textarea>
            <select name='ratings' className="border-2 mr-5 select p-2 md:py-1 py-10  w-full max-w-xs text-black">
  <option  disabled selected>No ratings</option>
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
<button type="submit" className="py-2 px-2 disabled:opacity-30  my-8 font-semibold rounded-md text-white bg-teal-500">Edit confirm</button>
			
		</form>
        </div>
    );
};

export default ReviewEdit;