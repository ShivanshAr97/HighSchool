import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

    return (
        <div className='flex justify-between mx-12 my-4 align-middle'>
            <div className='font-bold text-3xl'>
                Logo
            </div>
            <div>
                <ul className='flex items-center'>
                    <li className='mx-4 cursor-pointer'>Notes</li>
                    <li className='mx-4 cursor-pointer'>Lectures</li>
                    <li className='mx-4 cursor-pointer'>Discussions</li>
                    <li className='mx-4 cursor-pointer'>Oppurtunities</li>
                    {isAuthenticated && <img className='rounded-full w-8 h-8 mr-2' src={user.picture} alt="" />}
                    {isAuthenticated ? (
                        (<button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>)
                    ) : (<button onClick={() => loginWithRedirect()}>Log In</button>)}


                </ul>
                {/* isAuthenticated && (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div> */}
            </div>

        </div>
    )
}

export default Navbar