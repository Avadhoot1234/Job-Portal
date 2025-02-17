import React from 'react'
import localname from './Locution'
import Locution from './Locution'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>

        <Locution handleChange={handleChange}/>

    </div>
  )
}

export default Sidebar
