import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'


const Courses = ({handleTakenCourses}) => {
    const [courses,setcourses]=useState([])
    useEffect(()=>{
        fetch('../../../public/course.json')
        .then(res=>res.json())
        .then(data=>setcourses(data))
    },[])
    return (
        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                courses.map(course=><Course key={course.id} course={course}
                    handleTakenCourses={handleTakenCourses}></Course>)
                }
        </div>
    );
};
Courses.propTypes={
    courses:PropTypes.array,handleTakenCourses:PropTypes.func
}
export default Courses;