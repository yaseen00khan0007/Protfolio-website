import React from 'react'

function Navbar() {
  return (
    <>



    <div className='flex flex-row w-full  bg-blue-950'>
        <li className='list-none p-8'><a className='text-green-500 text-4xl' href="">Yaseen Khan</a></li>
        <li className=' list-none p-10'><a className='text-white' href="/">Home</a></li>
        <li className=' list-none p-10'><a className='text-white' href="/">About</a></li>
        <li className=' list-none p-10'><a className='text-white' href="/">Courses</a></li>
        <li className=' list-none p-10'><a className='text-white' href="/">Blogs</a></li>
        <li className=' list-none p-10'><a className='text-white' href="/">Login</a></li>
    </div>
    </>
  )
}

export default Navbar
