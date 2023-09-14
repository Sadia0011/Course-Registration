import PropTypes from 'prop-types'
import { FaDollarSign,FaBookOpen } from 'react-icons/fa';
const Course = ({course,handleTakenCourses}) => {
    const {name,img,description,price,credit}=course;
    return (
        <div className='drop-shadow-xl bg-slate-100 p-2 border-none'>
            <img className='h-36 w-72' src={img} alt="" />
            <h1 className='font-semibold text-lg'>{name}</h1>
            <p className='font-normal text-sm'>{description}</p>
            <div className='flex justify-between text-base font-medium'>
                <h5 className='flex item-center justify-center'><span className='mt-1 mr-2'><FaDollarSign/></span> Price:{price}</h5>
                <h5 className='flex item-center justify-center'><span className='mt-1 mr-2'><FaBookOpen></FaBookOpen></span>Credit:{credit}hr</h5>
            </div>
            <button onClick={()=>handleTakenCourses(course,credit)} className='w-full bg-blue-600 text-white rounded-lg p-2 mt-2'>Select</button>
        </div>
    );
};
Course.propTypes={
    course:PropTypes.object,
    handleTakenCourses:PropTypes.func
}
export default Course;