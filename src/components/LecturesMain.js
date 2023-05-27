import React from 'react'

const LecturesMain = () => {
  return (
    <>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/list=PLVLoWQFkZbhU5r5DlfxPc3gKw-QLLAvLn" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/23a3rrNWmJ8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
      <div className='border w-[40%] px-4'>
        <iframe className='flex mx-auto' width="450" height="250" src="https://www.youtube.com/embed/videoseries?list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <h1>Title</h1>
        <div className='flex justify-between'>
          <p>Course</p>
          <p>Likes</p>
        </div>
      </div>
    </>
  )
}

export default LecturesMain