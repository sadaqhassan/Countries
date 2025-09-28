import React, { useState } from 'react'

const Navbar = () => {
    const [menu ,setMenu]= useState(false)
    const HandleMenu = ()=>{
        setMenu(!menu)
    }
  return (
    <div className='mx-10'>

    
    <div className='hidden mt-5 md:flex justify-between items-center'>
        <h1 className='text-2xl font-bold '>Samo</h1>
        <div className='flex space-x-2 rounded font-semi-bold'>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Service</a>
    <a href="#">Contact</a>
        </div>
        <div>
        <div className='bg-gray-200 px-2 py-1 flex items-center rounded'>
    <input type="text" placeholder='Search' className='focus:outline-0 rounded' />
    <p>🔍</p>
    </div>
    </div>
        <button className='bg-blue-600 px-2 rounded py-1 text-white'>Connect</button>
    </div>


    {/* mobile view */}
    <div className='flex md:hidden justify-between mt-5'>
    <h1 className='text-2xl font-bold '>Samo</h1>
    <div className='bg-gray-200 px-2 py-1 flex items-center rounded'>
    <input type="text" placeholder='Search' className='focus:outline-0 rounded' />
    <p>🔍</p>
    </div>
    <button onClick={HandleMenu} className='bg-gray-700 px-2 rounded py-2  text-white'>Menu</button> 
    </div>


    {
        menu &&
        <div className='flex flex-col space-y-2 rounded'>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Service</a>
    <a href="#">Contact</a>
        </div>
    }
    </div>
  )
}

export default Navbar