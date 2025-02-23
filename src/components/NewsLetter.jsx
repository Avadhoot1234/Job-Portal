import React from 'react'
import { FaEnvelopeOpen } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div>
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaEnvelopeOpen/>
            Email me 
        </h3>
        <p className='text-primary/75 text-basemb-4'>Lorem ipsum, dolor sit amet consectetur 
        adipisicing elit. Expedita sint incidunt nostrum. Laudantium voluptatibus tempora harum quam sapiente tenetur corrupti nesciunt ab, aspernatur, consequuntur ad repudiandae excepturi ducimus, 
        debitis quos?</p>
        <div className=''>
            <input type='email' name='email' id='email' placeholder='name#email.com' className='w-full block py-2
            pl-3 border focus:outline-none'/>
            <input type='submit' value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none
            bg-blue-500 rounded-sm text-white cursor-pointer font-semibold'/>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
