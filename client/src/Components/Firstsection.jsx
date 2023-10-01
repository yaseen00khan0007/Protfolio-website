import React from 'react'

function Firstsection() {
  return (
    <>
        <div className='grid grid-cols-2 bg-red-500 h-[33rem]'>
            <div className='flex flex-col text-white bg-blue-950 p-20'>
                <span className='text-green-500  text-4xl'>---Hello</span>
                <h1 className='text-white text-7xl '>I'm Yaseen khan</h1>
                <span className='text-white mt-5'>Full Stack Developer & Freelancer</span>
                <p className='text-white mt-10'>Hi there! My name is Yaseen khan  and I’m a software engineer with over 2 years of experience in the industry. I love all things tech and coding, and on my channel, I share my knowledge and experience with others</p>
                
            </div>

            <div className='flex flex-col bg-blue-950'>
                <img className='h-[22rem] w-[25rem] rounded-full ml-60 mt-[4rem] ' src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/285ce8115100471.6047eaa30896a.jpg" alt="this is an image" />
            </div>
        </div>
    
    </>
  )
}

export default Firstsection
