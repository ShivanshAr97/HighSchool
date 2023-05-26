import React from 'react'
import profile from '../photo.jpeg'

const Navbar = () => {
    return (
        <div className='flex justify-between mx-12 my-4 align-middle'>
            <div className='font-bold text-3xl'>
                Logo
            </div>
            <div>
                <ul className='flex'>
                    <li className='mx-4 cursor-pointer'>Notes</li>
                    <li className='mx-4 cursor-pointer'>Lectures</li>
                    <li className='mx-4 cursor-pointer'>Discussions</li>
                    <li className='mx-4 cursor-pointer'>Oppurtunities</li>
                    <img className='mx-4 h-8 w-8 object-fill cursor-pointer rounded-full' src={profile} alt="" />
                </ul>
            </div>
        </div>
    )
}

export default Navbar