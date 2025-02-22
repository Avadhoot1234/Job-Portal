import React from 'react'
import localname from './Locution'
import Locution from './Locution'
import Salary from './Salary'
import JobPostingDate from './JobPostingDate'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <Locution handleChange={handleChange}/>
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        <JobPostingDate handleChange={handleChange} handleClick={handleClick}/>
    </div>
  )
}

export default Sidebar
