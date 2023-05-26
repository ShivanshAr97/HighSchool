import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between mx-12 my-4'>
    <div className='text-bold text-3xl'>
    Logo
    </div>
    <div>
        <ul className='flex'>
            <li className='mx-4 cursor-pointer'>Notes</li>
            <li className='mx-4 cursor-pointer'>Lectures</li>
            <li className='mx-4 cursor-pointer'>Discussions</li>
            <li className='mx-4 cursor-pointer'>Oppurtunities</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar