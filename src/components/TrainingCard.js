import '../components/TrainCard.css';

const TrainCard = ({trainImg,TrainTitle,TrainDate}) =>{
    return (
        <div className='training-content'>
        <div className='training-image-sec'>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/007/117/181/small/training-of-office-staff-increase-sales-and-skills-team-thinking-and-brainstorming-analytics-of-company-information-flat-illustration-vector.jpg' className='train-sec-img'/>
        </div>
        <div>
        <div className='training-desc-sec'>
            <h1 className='train-sec-title'>{TrainTitle}</h1>
            <p className='train-sec-date'>Date: {TrainDate}</p>
            <p className='train-sec-short'>Acquiring essential skills and hands-on experience in re...</p>
            <button className='train-details-btn'>Detaiils</button>
        </div>
      </div>
      </div>
    );
}

export default TrainCard;