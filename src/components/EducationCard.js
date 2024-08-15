import '../components/EducationCard.css';

const EducationCard = ({institute,degree,result,totalcredit,position}) =>{
    return(
        <div className='education-card'>
            <h1 className='e-c-h'>{institute}</h1>
            <p className='e-c-p'>{degree}</p>
            <p className='e-c-p'><span>Cgpa: {result} </span> <span> Total Credit: {totalcredit}</span></p>
            <p className='e-c-p'><span>{position} </span><span className='education-c-moreInfo'> More Info</span></p>
        </div>
    );
}

export default EducationCard;