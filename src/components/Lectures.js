import React from 'react'
import { Link } from 'react-router-dom'

const Lectures = () => {
    return (
        <div className='px-12 py-8 text-lg flex shadow'>
            <div className='w-[30%] flex px-8'>
                <img className='h-60 w-60 object-cover rounded-lg' src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb" alt="" />
            </div>
            <div className='w-[70%]'>
                <h1 className='text-[1.75rem] font-medium'>Need to Study a Topic or Revise the Syllabus?</h1>
                <p className='mt-4'>Read from the best in field notes written by the top scorers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem possimus molestias minima facilis ratione, quod, commodi labore assumenda, harum iusto saepe sed corrupti quibusdam quas provident optio suscipit quo! Similique aperiam ut corrupti accusantium, deleniti dolore libero. Accusantium, sapiente.</p>
                <Link to="/lectures"><button className='text-center border bg-blue-400 text-white border-none font-bold py-1 px-4 rounded-lg flex mx-auto my-4'>Browse  Playlists</button></Link>
            </div>

        </div>
    )
}

export default Lectures