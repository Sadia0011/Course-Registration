import PropTypes from 'prop-types'
import { FaDollarSign,FaBookOpen } from 'react-icons/fa';
const Course = ({course}) => {
    const {name,img,description,price,credit}=course;
    return (
        <div>
            <img src={img} alt="" />
            <h1 className='font-semibold text-lg'>{name}</h1>
            <p className='font-normal text-sm'>{description}</p>
            <div className='flex justify-between text-base font-medium'>
                <h5 className='flex item-center justify-center'><button className='mt-1 mr-2'><FaDollarSign/></button> Price:{price}</h5>
                <h5 className='flex item-center justify-center'><button className='mt-1 mr-2'><FaBookOpen></FaBookOpen></button>Credit:{credit}hr</h5>
            </div>
        </div>
    );
};
Course.propTypes={
    course:PropTypes.objects
}
export default Course;