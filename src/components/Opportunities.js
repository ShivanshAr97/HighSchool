import React from 'react'
import { Link } from 'react-router-dom'

const Opportunities = () => {
    return (
        <div className='mx-12 text-lg'>
            <h1 className='text-[1.75rem] font-medium'>Get Amazing Opportunities</h1>
            <p className='mt-4'>Read from the best in field notes written by the top scorers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem possimus molestias minima facilis ratione, quod, commodi labore assumenda, harum iusto saepe sed corrupti quibusdam quas provident optio suscipit quo! Similique aperiam ut corrupti accusantium, deleniti dolore libero. Accusantium, 
        sapiente.</p>
            <Link to="/opportunities"><button className='text-center border bg-blue-400 text-white border-none font-bold py-1 px-4 rounded-lg flex mx-auto my-4'>View Opportunities</button></Link>

        </div>
    )
}

export default Opportunities