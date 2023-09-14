import TakenCourse from "../TakenCourse/TakenCourse";
import PropTypes from 'prop-types'

const TakenCourses = ({takenCourses,creditHr,totalCredit,totalPrice}) => {
    console.log(takenCourses)
    return (
        <div className="md:w-1/4 bg-slate-100 rounded-lg">
            
            <h2 className=' text-blue-700 border-b-2 p-3'>Credit Hour Remaining{creditHr} hr</h2>
            <h1 className="mb-3">Taken Courses:{takenCourses.length}</h1>
           {
            takenCourses.map(takenCourse=> <TakenCourse key={takenCourse.id} takenCourse={takenCourse}></TakenCourse>)
           }
           <hr />
           <h1 className="mb-3 border-b-2">Total Credit Hour : {totalCredit}</h1>
           <h1 className="mb-3 border-b-2">Total Price : {totalPrice}</h1>
        </div>
    );
};
TakenCourses.propTypes={
    takenCourses:PropTypes.array,
    creditHr:PropTypes.number,
    totalCredit:PropTypes.number,
    totalPrice:PropTypes.number
}
export default TakenCourses;