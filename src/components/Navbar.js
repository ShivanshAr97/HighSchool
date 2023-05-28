import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import Logo from '../logo.png'

const Navbar = () => {
    const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

    return (
        <div className='flex items-center justify-between px-12 shadow-md'>
            <Link to="/"><div className='flex items-center'>
                <img className='w-32' src={Logo} alt="" />
                <h1 className='text-3xl font-bold'>LearningSphere</h1>
            </div>
            </Link>
            <div>
                <ul className='flex items-center text-lg'>
                    <Link to="/notes"><li className='mx-4 cursor-pointer'>Notes</li></Link>
                    <Link to="/lectures"><li className='mx-4 cursor-pointer'>Lectures</li></Link>
                    <Link to="/practice"><li className='mx-4 cursor-pointer'>Practice</li></Link>
                    <Link to="/opportunities"><li className='mx-4 cursor-pointer'>Oppurtunities</li></Link>
                    {isAuthenticated && <img className='rounded-full w-8 h-8 mr-2' src={user.picture} alt="" />}
                    {isAuthenticated ? (
                        (<button className='text-center border bg-blue-400 text-white border-none py-1 px-4 
                        rounded-lg flex mx-auto my-4' onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>)
                    ) : (<button className='text-center border bg-blue-400 text-white border-none py-1 px-4 
                    rounded-lg flex mx-auto my-4' onClick={() => loginWithRedirect()}>Log In</button>)}
                </ul>
            </div>

        </div>
    )
}

export default Navbar