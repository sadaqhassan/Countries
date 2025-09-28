import React, { useEffect, useState } from 'react'
import countries from '../../Data'

const Main = () => {
    const [Data , setData] = useState([])
    const fetchData = ()=>{
        setData(countries)
    } 
    useEffect(()=>{
        fetchData()
    },[Data])
  return (
    <div className='mt-10 '>
        <div className='grid grid-cols-2 md:grid-cols-4 rounded gap-4 text-gray-900'>
            { 
            Data.map((country,index)=>(
            <div key={index} className='py-2 px-2 rounded'>
            <p>{index+1}</p>    
            <p className='text-center py-2 text-xl font-medium'>{country.name}</p>
            <img className='h-56 w-56 rounded-2xl hover:scale-108 shadow-2xl' src={country.flag} alt="" />
            <div className='flex justify-between items-center '>
            <p className='text-sm p-2'>Continent:{country.continent}</p>
            <p className='text-sm p-2 bg-green-600 px-2 text-white font-sm rounded'>Currency:{country.currency.slice(0,6)} 💵</p>

            </div>
            <p className='text-sm'>{country.description}</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Main