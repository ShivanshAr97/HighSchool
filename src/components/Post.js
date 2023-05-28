import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from 'react-router-dom';

const Post = () => {
  const { user } = useAuth0();

  const submitr=()=>{
    alert(`Thanks ${user.name} for posting. It will be displayed after confirming with the admin`)
  }

  return (
    <div className='flex flex-col w-[70%] mx-auto my-8'>
      <input className='border outline-none px-4 py-2 my-2 rounded-md' required type="text" placeholder='Type of Post' />
      <input className='border outline-none px-4 py-2 my-2 rounded-md' required type="text" placeholder='Title'/>
      <input className='border outline-none px-4 py-2 my-2 rounded-md' required type="text" placeholder='Description'/>
      <input className='border outline-none px-4 py-2 my-2 rounded-md' required type="text" placeholder='Link' />

      <Link to="/"><button className='text-center border bg-blue-400 text-white border-none py-1 px-4 
                        rounded-lg flex mx-auto my-4 font-medium' onClick={submitr}>Submit</button></Link>
      
    </div>
  )
}

export default Post