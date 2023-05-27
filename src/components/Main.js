import React from 'react'
import img1 from '../photo.jpeg'
import Notes from './Notes';
import Lectures from './Lectures';
import Discussions from './Discussions';
import Opportunities from './Opportunities';

const Main = () => {
    return (
        <>
        <div className='flex mx-8 mt-12 mb-6 justify-between px-4'>
            <section className='w-[60%] py-16 text-lg'>
                <p className='text-[1.75rem] font-medium'>Anxious about your education and resources?</p>
                <p className='mt-4'>We here at provide you with amazing oppurtunities and resources so that you can perform brilliantly in your academics with the help of notes and previous year questions, some lectures to revise the syllabus quickly, reach out to your seniors, asking them for help and guidance.</p>
            </section>
            <section>
                <img className='h-60 rounded-2xl' src={img1} alt="" />
            </section>
        </div>
            <Notes/>
            <Lectures/>
            <Discussions/>
            <Opportunities/>
            </>
    )
}

export default Main