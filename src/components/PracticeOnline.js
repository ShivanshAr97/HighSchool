import React from 'react'
import { Link } from 'react-router-dom'

const PracticeOnline = () => {
    return (
        <div className='px-12 py-8 text-lg flex border-b shadow'>
            <div className='w-[70%]'>
                <h1 className='text-[1.75rem] font-medium'>Practice Online</h1>
                <p className='mt-4'>Read from the best in field notes written by the top scorers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem possimus molestias minima facilis ratione, quod, commodi labore assumenda, harum iusto saepe sed corrupti quibusdam quas provident optio suscipit quo! Similique aperiam ut corrupti accusantium, deleniti dolore libero. Accusantium,
                    sapiente.</p>
                <Link to="/practice"><button className='text-center border bg-blue-400 text-white border-none font-bold py-1 px-4 rounded-lg flex mx-auto my-4'>Begin Practice</button></Link>
            </div>

            <div className='w-[30%] px-10'>
            <img className=' h-60 object-cover rounded-lg mx-8' src="https://images.pexels.com/photos/3825461/pexels-photo-3825461.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
    )
}

export default PracticeOnline