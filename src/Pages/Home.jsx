import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Jobs from './Jobs';
import Card from '../components/Card';
const Home = () => {
  //Handling the search bar with the usestate

  const[selectedCategory,setSelectedCategory]=useState(null);
  const[jobs,setJobs]=useState([]);

  //Fetching data from the json file
  useEffect(()=>{
    fetch("jobs.json").then(res=>res.json()).then(data=>{
      // console.log(data);
      setJobs(data)
    })
  },[])

  // console.log(jobs);

  
  const [query,setQuery]=useState("");
  const handleInputChange=(e)=>{
    setQuery(e.target.value);
    console.log(e.target.value)
  }

  //Filtering items or array
  const filteredItems=jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase())!=-1);
  console.log(filteredItems)


  //Radio filtering 
  const handleChange=(event)=>{
    setSelectedCategory(event.target.value);
  }


  //button based filtering
  const handleClick=(event)=>{
    setSelectedCategory(event.target.value);
  }

  //main function
  const filteredData=(jobs,selected,query)=>{
    let filteredJobs=jobs;

    //filtering Input items
    if(query){
      filteredJobs=filteredItems;
    }
    
    //category filtering
    if(selected){
      filteredJobs=filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,
        employmentType,postingDate
      })=>(
        jobLocation.toLowerCase()===selected.toLowerCase()|| parseInt(maxPrice)<=parseInt(selected) || 
        salaryType.toLowerCase()===selected.toLowerCase()||
        employmentType.toLowerCase()===selected.toLowerCase()
      ))
      console.log(filteredJobs);
    }

    return filteredJobs.map((data,i)=><Card key={i} data={data}/>)

  }

  const result =filteredData(jobs,selectedCategory,query)

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>

      <div>
        <Jobs result={result}/>
      </div>

    </div>
  )
}

export default Home
