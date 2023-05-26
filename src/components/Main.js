import React from 'react'
import img1 from '../photo.jpeg'

const Main = () => {
    return (
        <div className='flex mx-8 my-12 justify-between px-4'>
            <section className='w-[60%] py-16 text-lg'>
                <span className='text-[1.75rem] text-extrabold'>Anxious about your educational program and resources?</span><br />We here at provide you with amazing oppurtunities and resources so that you can perform brilliantly in your academics with the help of notes and previous year questions, some lectures to revise the syllabus quickly, reach out to your seniors, asking them for help and guidance.
            </section>
            <section>
                <img className='h-60 rounded-2xl' src={img1} alt="" />
            </section>
        </div>
    )
}

export default Main