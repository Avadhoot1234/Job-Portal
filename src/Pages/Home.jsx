import React, { useState } from 'react'
import Banner from '../components/Banner'

const Home = () => {
  //Handling the search bar with the usestate
      const [query,setQuery]=useState("");
      const handleInputChange=(e)=>{
          setQuery(e.target.value);
          console.log(e.target.value)
      }  
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>
    </div>
  )
}

export default Home
