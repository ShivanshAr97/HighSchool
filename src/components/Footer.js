import React from 'react'
import Logo from '../logo.png'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <div className='flex mx-12 my-6 items-center'>
                <div className='w-1/3 mx-auto'>
                    <img className='w-32 mx-auto' src={Logo} alt="" />
                    <h1 className='text-3xl flex w-fit mx-auto font-bold'>LearningSphere</h1>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, quasi!</p> */}
                </div>
                <div className='w-1/3 text-center'>
                    <ul>
                        <span className='text-blue-500'><Link to="/notes"><li>Notes</li></Link></span>
                        <span className='text-blue-500'><Link to="/lectures"><li>Lectures</li></Link></span>
                        <span className='text-blue-500'><Link to="/practice"><li>Practice</li></Link></span>
                        <span className='text-blue-500'><Link to="/opportunities"><li>Opportunities</li></Link></span>
                    </ul>
                </div>
                <div className='w-1/3 px-8'>
                    <ul className='flex text-center'>
                        <li className='w-1/4 cursor-pointer text-red-600'><AiFillYoutube size={36}/></li>
                        <li className='w-1/4 cursor-pointer text-blue-800'><AiFillLinkedin size={36}/></li>
                        <li className='w-1/4 cursor-pointer text-green-900'><AiFillGithub size={36}/></li>
                        <li className='w-1/4 cursor-pointer text-blue-500'><AiFillFacebook size={36}/></li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <p className='bg-blue-800 text-center py-1 text-white mt-2'>&copy; LearningSphere || All rights reserved 2023</p>
            </div>
        </>
    )
}

export default Footer