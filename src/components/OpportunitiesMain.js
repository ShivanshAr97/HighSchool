import React from 'react'
import Webinars from './Webinars'
import Courses from './Courses'
import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const OpportunitiesMain = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className='flex'>
      <div className='w-[60%] mx-12 my-8'>
        <div className='flex items-center justify-between'>
          <p className='text-4xl font-bold mb-4'>Internships</p>
          {isAuthenticated ?
            <span className='text-blue-500 cursor-pointer'><Link to='/post'><AiOutlinePlusCircle size="18px" /></Link></span>
            :
            <span className='text-blue-500 cursor-pointer'></span>}
        </div>
        <div>
          <img className=' object-cover rounded-lg' src="https://source.unsplash.com/random/768x180/?job" alt="crypto" />
          <h1 className='text-2xl font-bold my-2'>TwiLearn Edutech</h1>
          <div className='flex text-center align-middle justify-between'>
            <h4>Web Development Intern</h4>
            <span className='text-sm'>100 applicants</span>
          </div>
          <p>The candidate will be trained on the chosen technology for the first month of the internship. In the second month projects will be assigned. The training provided during the internship will be project oriented training.</p>
          <a href="https://www.linkedin.com/jobs/view/3613647847/" target='_blank' rel='noreferrer'><button className='bg-blue-400 px-4 py-1 my-2 rounded-lg text-white font-medium mb-6'>Apply now</button></a>
        </div>

        <div>
          <img className='object-cover rounded-lg' src="https://source.unsplash.com/random/768x180/?intern" alt="crypto" />
          <h1 className='text-2xl font-bold my-2'>Sago</h1>
          <div className='flex text-center align-middle justify-between'>
            <h4>Software Intern</h4>
            <span className='text-sm'>100 applicants</span>
          </div>
          <p>Sago, a global research and data partner in the market research industry, is seeking a motivated Software Intern to join their team. This internship provides a unique opportunity to gain valuable experience and contribute to a company with a legacy of impact, global reach, and innovative spirit. </p>
          <a href="https://www.linkedin.com/jobs/view/3611326928/" target='_blank'><button className='bg-blue-400 px-4 py-1 my-2 rounded-lg text-white font-medium mb-6'>Apply now</button></a>
        </div>

        <div>
          <img className='object-cover rounded-lg' src="https://source.unsplash.com/random/768x180/?working" alt="crypto" />
          <h1 className='text-2xl font-bold my-2'>Listed</h1>
          <div className='flex text-center align-middle justify-between'>
            <h4>Android App Developer - Intern</h4>
            <span className='text-sm'>100 applicants</span>
          </div>
          <p>We are a lab building products for the creator economy. Why so, because we are on a mission to empower the individual to realise/unleash their full potential. Following are some of our flagship products:</p>
          <a href="https://listed.freshteam.com/jobs/uQRcKTABc7WR/android-app-developer-intern?ft_source=6000312750&ft_medium=6000257244" target='_blank'><button className='bg-blue-400 px-4 py-1 my-2 rounded-lg text-white font-medium mb-6'>Apply now</button></a>
        </div>

        <div>
          <img className='object-cover rounded-lg' src="https://source.unsplash.com/random/768x180/?work" alt="crypto" />
          <h1 className='text-2xl font-bold my-2'>Appinventiv </h1>
          <div className='flex text-center align-middle justify-between'>
            <h4>Software Intern</h4>
            <span className='text-sm'>100 applicants</span>
          </div>
          <p>The candidate is passionate Trainee Software Engineer Appian to design, develop and install software solutions. The successful candidate will be able to build high-quality, innovative and fully performing software in compliance with coding standards and technical design.</p>
          <a href="https://www.linkedin.com/jobs/view/3617882252/" target='_blank'><button className='bg-blue-400 px-4 py-1 my-2 rounded-lg text-white font-medium mb-6'>Apply now</button></a>
        </div>

        <div>
          <img className='object-cover rounded-lg' src="https://source.unsplash.com/random/768x180/?office" alt="crypto" />
          <h1 className='text-2xl font-bold my-2'>itection</h1>
          <div className='flex text-center align-middle justify-between'>
            <h4>Frontend Application Developer</h4>
            <span className='text-sm'>100 applicants</span>
          </div>
          <p>Developing and implementing highly responsive user interface components using React concepts. Writing application interface codes using JavaScript following React.js workflows. Debug and troubleshoot frontend issues, ensuring optimal performance and user experience</p>
          <a href="https://www.linkedin.com/jobs/view/3618109890" target='_blank'><button className='bg-blue-400 px-4 py-1 my-2 rounded-lg text-white font-medium mb-6'>Apply now</button></a>
        </div>

        <div>
          <img className='object-cover rounded-lg' src="https://source.unsplash.com/random/768x180/?work" alt="crypto" />
          <h1 className='text-2xl font-bold my-2'>Appinventiv </h1>
          <div className='flex text-center align-middle justify-between'>
            <h4>Software Intern</h4>
            <span className='text-sm'>100 applicants</span>
          </div>
          <p>The candidate is passionate Trainee Software Engineer Appian to design, develop and install software solutions. The successful candidate will be able to build high-quality, innovative and fully performing software in compliance with coding standards and technical design.</p>
          <a href="https://www.linkedin.com/jobs/view/3617882252/" target='_blank'><button className='bg-blue-400 px-4 py-1 my-2 rounded-lg text-white font-medium mb-6'>Apply now</button></a>
        </div>
      </div>

      <div className='w-[35%]'>
        <div className='flex items-center justify-between mx-4 mt-8'>
          <p className='text-4xl font-bold'>Webinars</p>
          {isAuthenticated ?
            <span className='text-blue-500 cursor-pointer'><Link to='/post'><AiOutlinePlusCircle size="18px" /></Link></span>
            :
            <span className='text-blue-500 cursor-pointer'></span>}
        </div>
        <Webinars />
        <div className='flex justify-between items-center mx-4'>
          <p className='text-4xl font-bold '>Courses</p>
          {isAuthenticated ?
            <span className='text-blue-500 cursor-pointer'><Link to='/post'><AiOutlinePlusCircle size="18px" /></Link></span>
            :
            <span className='text-blue-500 cursor-pointer'></span>}
        </div>
        <Courses />
      </div>
    </div>
  )
}

export default OpportunitiesMain