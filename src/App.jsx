/* eslint-disable no-unused-vars */

import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import TakenCourses from './components/TakenCourses/TakenCourses'

function App() {
  const CreditCanTake=20;
const [takenCourses,setTakenCourses]=useState([])
const [creditHr,setCreditHr]=useState(0)
const [totalCredit,setTotalCredit]=useState(0)
const [totalPrice,setTotalPrice]=useState(0)
// let creditPer=0;
// let price=0;
const handleTakenCourses=(course,credit,pricePer)=>{
  const newTakenCourses=[...takenCourses,course];
  let creditPer=0;
   let price=course.price;
  const remainingCredits=CreditCanTake-credit;
  creditPer= creditPer + credit;
  price=price+pricePer;
  setTotalPrice(price)
  setTakenCourses(newTakenCourses)
  setTotalCredit(creditPer)
  setCreditHr(remainingCredits)

}
  return (
    <>
      <div className='font container mx-auto'>
        <h1 className='font-bold text-3xl text-center my-10'>Course Registration</h1>
     <div className='flex justify-between gap-4'>
     
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
