
import PropTypes from 'prop-types'
const TakenCourse = ({takenCourse}) => {
    // console.log(takenCourse)
    const {name}=takenCourse;
   
    return (
    <div>
        <ol className='list-decimal list-inside'>
        <li className='rounded-lg p-2 text-base font-normal'>{name}</li>
        </ol>
    </div>
      
    );
};
TakenCourse.propTypes={
    takenCourse:PropTypes.object
}
export default TakenCourse;