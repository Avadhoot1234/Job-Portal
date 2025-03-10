import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Banner = ({query,handleInputChange}) => { 

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
      <h1 className='text-5xl font-bold text-primary mb-3'>Give your <span className='text-blue-600'>career</span> a boost</h1>
      <p className='text-lg text-black/70 mb-8'>Explore 100+ job opportunities across various fields</p>

        <form>
            <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
                <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300
                focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full'>
                    <input type='text' name='title' id='title' className='block flex-1 border-0 bg-transparent
                    py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 foxus:right-0 sm:text sm:leading-6
                    'placeholder='Search for the jobs title'
                    onChange={handleInputChange} value={query}
                    />
                    <CiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
                </div>
                <div className='flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset ring-gray-300
                focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full'>
                    <input type='text' name='title' id='title' className='block flex-1 border-0 bg-transparent
                    py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 foxus:right-0 sm:text sm:leading-6
                    'placeholder='Enter the location'
                    value={""}
                    />
                    <CiLocationOn className='absolute mt-2.5 ml-2 text-gray-400'/>
                </div>
                <button type='submit' className='bg-blue-600 py-2 px-8 text-white md:rounded-s-none
                rounded
                '>Search</button>
            </div>
        </form>

    </div>
  )
}

export default Banner
