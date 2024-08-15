import './InternShipCard.css'

const InternshipCard = ({name,position,date,location}) =>{
    return (
        <div className='internship-card'>
          <h1 className='int-title'>{name}</h1>
          <p className='int-pos'>{position}</p>
          <p className='int-location'>{location}</p>
          <p className='int-para'>{date}</p>
        </div>
    );
}

export default InternshipCard;