import moment from 'moment';
import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ProfileContext } from '../context/UserContext';

const ReviewEdit = () => {
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
        fetch(`http://localhost:5000/review/${details[0]._id}`,{
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
        <div>
            <h1 className='text-2xl m-10 text-center'>Edit your review</h1>
		<form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-evenly items-center w-full mb-10">
			<textarea name='message' rows="2" placeholder="Message..." className="p-5 mr-10 rounded-md w-3/5 resize-none dark:text-gray-900 border-2 border-gray-500"></textarea>
            <select name='ratings' className="border-2 mr-5 select p-2 md:py-1 py-10  w-full max-w-xs">
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
<button type="submit" className="py-2 px-2 disabled:opacity-30  my-8 font-semibold rounded-md text-white bg-blue-500">Edit confirm</button>
			
		</form>
        </div>
    );
};

export default ReviewEdit;