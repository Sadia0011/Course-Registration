
import './App.css'
import Courses from './components/Courses/Courses'
import TakenCourses from './components/TakenCourses/TakenCourses'

function App() {

  return (
    <>
      <div className='font container mx-auto'>
        <h1 className='font-bold text-3xl text-center my-10'>Course Registration</h1>
     <div className='flex justify-between gap-4'>
     
      <Courses></Courses>
    
      <TakenCourses></TakenCourses>
     
     </div>
      </div>
     
      
    </>
  )
}

export default App
