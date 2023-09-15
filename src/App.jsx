/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import TakenCourses from './components/TakenCourses/TakenCourses'
import swal from 'sweetalert'

function App() {
const [takenCourses,setTakenCourses]=useState([])
const [creditHr,setCreditHr]=useState(20) //remaining credit
const [totalCredit,setTotalCredit]=useState(0)
const [totalPrice,setTotalPrice]=useState(0)

const handleTakenCourses=(course)=>{

  const isExist=takenCourses.find((item)=>item.id==course.id)
  let creditPerCourse=course.credit;
  let pricePerCourse=course.price;
  if(isExist){
  //  return swal();
  return swal("Oops!", "This course is already taken!")
  }
  else{
    takenCourses.forEach(element => {
    creditPerCourse =creditPerCourse +element.credit
   });   
     takenCourses.forEach((item) => {
      pricePerCourse += item.price
     });
     
  }
  const remainingCredits = 20 - creditPerCourse;

if(creditPerCourse > 20 ){
  swal("Oops!", "20 credits already taken")
 
}
else{
  setTotalCredit(creditPerCourse)
  setTotalPrice(pricePerCourse)
  setTakenCourses([...takenCourses,course])
  setCreditHr(remainingCredits)
}  


}
  return (
    <>
      <div className='font container mx-auto'>
        <h1 className='font-bold text-3xl text-center my-10'>Course Registration</h1>
     <div className='flex flex-col md:flex-row justify-between gap-4'>
     
      <Courses
      handleTakenCourses={handleTakenCourses}></Courses>
    
      <TakenCourses 
      takenCourses={takenCourses} 
      creditHr={creditHr} 
      totalCredit={totalCredit}
      totalPrice={totalPrice}></TakenCourses>
     
     </div>
      </div>
     
      
    </>
  )
}

export default App
