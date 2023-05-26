import React from 'react'

const Discussions = ({heading, content, button}) => {
    return (
        <div className='mx-12 text-lg'>
            <h1 className='text-[1.75rem] font-medium'>{heading}</h1>
            <p className='mt-4'>{content}</p>
            <button className='text-center border bg-blue-400 text-white border-none font-bold py-1 px-4 rounded-lg flex mx-auto my-4'>{button}</button>

        </div>
    )
}

export default Discussions