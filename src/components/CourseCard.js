import '../components/CourseCard.css';

const CourseCard = ({courseImage,courseTitle,hide}) =>{
    return(
               <div className='course-card'>
                  <div className='course-card-img-con'>
                     <img src={courseImage} className='course-card-img'/>
                  </div>
                   <div className='course-card-desc'>
                     <h1 className='course-sec-title'>{courseTitle}</h1>
                     <p className='course-sec-short'>University of Michigan</p>
                     <p className='course-sec-grade'>Final Grade: 89%</p>
                     <button className='course-btn' onClick={hide} >Details</button>
                   </div>
               </div>
    );
}

export default CourseCard;