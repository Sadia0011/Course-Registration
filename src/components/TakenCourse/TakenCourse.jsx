
import PropTypes from 'prop-types'
const TakenCourse = ({takenCourse}) => {
    // console.log(takenCourse)
    const {name}=takenCourse;
   
    return (
        <div >
         
    <ol className='mb-2 rounded-lg p-2'>{name}</ol>
        </div>
    );
};
TakenCourse.propTypes={
    takenCourse:PropTypes.object
}
export default TakenCourse;