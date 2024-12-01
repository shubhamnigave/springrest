import React, { useState } from 'react'
import Course from './Course'


const Allcourses=()=>{
    const [courses,setCourses]=useState([
    {title:"CPP Course",description:"This is for Beginners"},
    {title:"Java Course",description:"Java for Beginners"},
    {title:"MySQL Course",description:"MySQL for Beginners"},
])

return(
    <div>
      <h1>All Courses</h1> 
      <p> List of Courses are as Follows</p>
      {
        courses.length>0
        ? courses.map((item)=>
        <Course course={item}/>)
        :"No Courses Available"
    
        } 
    </div>

    
)
        
    

}
export default Allcourses;