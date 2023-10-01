import React from 'react'

function Contactwithme() {
  return (
    <>
    <div className='grid grid-cols-2 '>
        <div className='flex flex-col bg-blue-950 '>
            <h1 className='text-green-500 m-10 text-3xl'>Connect with me</h1>
            <span className='text-white m-10 mt-0 mb-3'>Planet earth</span>
            <span className='text-white m-10 mt-0 mb-0'>Yaseen00khan0007@gmail.com</span>
        </div>


        <div className='flex flex-col  bg-blue-950'>
            <h1 className='text-green-500   text-2xl m-10 '>---Contact with me </h1>
            <input className='m-10 mb-0 w-[25rem] rounded' type="text" name="Enter your name" id="" />
            <input className='m-10 mb-0 w-[25rem] rounded mt-5' type="email" name="Enter your email" id="" />
            <input className='m-10 mb-0 w-[25rem] rounded-lg h-40 bg-blue-800 mt-5' type="text" name="Enter your message" id="" />
            <button className='bg-red-500  h-10 pl-40 pr-[14rem] rounded-lg ml-[3rem] mt-5 w-12 text-white '>Button</button>
            
        </div>
    </div>

    <div className='flex flex-col justify-center items-center bg-blue-950 h-[15rem]'>
        <span className='text-white text-2xl '>@ copyrigth-2023 Developed by Yaseen khan All right reserved</span>
    </div>
    </>
  )
}

export default Contactwithme
