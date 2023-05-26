import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='flex mx-12'>
                <div className='w-1/3'>
                    Logo
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quasi!</p>
                </div>
                <div className='w-1/3 text-center'>
                    <ul>
                        <li>Notes</li>
                        <li>Lectures</li>
                        <li>Discussions</li>
                        <li>Opportunities</li>
                    </ul>
                </div>
                <div className='w-1/3'>
                    <ul className='flex text-center'>
                        <li className='mx-4'>Yt</li>
                        <li className='mx-4'>Li</li>
                        <li className='mx-4'>Gh</li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <p className='bg-blue-800 text-center py-1 text-white mt-2'>All rights reserved 2023</p> 
            </div>
        </>
    )
}

export default Footer