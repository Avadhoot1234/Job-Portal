import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({data}) => {
  const {companyName,companyLogo,minPrice,maxPrice,salaryType,jobLocation,employmentType,postingDate,
    description,jobTitle
  }=data

  return (
    <section className='card'>
      <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt=''/>
        <div>
          <h4 className='text-black mb-1'>{companyName}</h4>
          <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
        </div>
      </Link>
    </section>
  )
}

export default Card
