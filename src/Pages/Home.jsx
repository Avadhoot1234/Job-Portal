import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Jobs from './Jobs';
import Card from '../components/Card';
import Sidebar from '../sidebar/Sidebar';
const Home = () => {
  //Handling the search bar with the usestate

  const[selectedCategory,setSelectedCategory]=useState(null);
  const[jobs,setJobs]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [currentPage,setCurrentPage]=useState(1);
  const itemsPerPage=6;

  //Fetching data from the json file
  useEffect(()=>{
    fetch("jobs.json").then(res=>res.json()).then(data=>{
      // console.log(data);
      setJobs(data);
      setIsLoading(false);
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

  //calculate the index range
  const calculatePageRange=()=>{
    const startIndex=(currentPage-1)*itemsPerPage;
    const endIndex=startIndex+itemsPerPage;
    return {startIndex,endIndex};
  }

  //function for the next page
  const nextPage=()=>{
    if(currentPage<Math.ceil(filteredItems.length/itemsPerPage)){
      setCurrentPage(currentPage+1);
    }
  }

  const prevPage=()=>{
    if(currentPage<Math.ceil(filteredItems.length/itemsPerPage)){
      setCurrentPage(currentPage-1);
    }
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
      })=>
        // jobLocation.toLowerCase()===selected.toLowerCase()|| parseInt(maxPrice)<=parseInt(selected) || 
        // salaryType.toLowerCase()===selected.toLowerCase()||
        // employmentType.toLowerCase()===selected.toLowerCase()
        postingDate>=selected
      )
      // console.log(filteredJobs);
    }

    const{startIndex,endIndex}=calculatePageRange();
    filteredJobs=filteredJobs.slice(startIndex,endIndex)
    return filteredJobs.map((data,i)=><Card key={i} data={data}/>)

  }

  const result =filteredData(jobs,selectedCategory,query)

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>

      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick}/>
        </div>

        {/* Main Job Cards */}
        <div className='col-span-2 bg-white p-4 rounded-sm'>
          
          {
            isLoading ? (<p className='font-medium'>Loading...</p>): result.length>0?<Jobs result={result}/>:<>
            <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
            <p>No Job Posting</p>
            </>
          }
          

          {/* Pagination */}
          {
            result.length> 0 ?(
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage}>Previous</button>
                <span>Page {currentPage} of {Math.ceil(filteredItems.length/itemsPerPage)}</span>
                <button onClick={nextPage}>Next</button>
              </div>
            ):""
          }
        
        </div>

        {/* Right side of the content */}
        <div className='bg-white p-4 rounded'>Right</div>
      </div>

    </div>
  )
}

export default Home
