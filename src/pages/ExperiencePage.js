import IndexHeader from '../components/IndexHeader';
import '../pages/ExperiencePage.css';
import TrainCard from '../components/TrainingCard.js';
import InternshipCard from '../components/InternShipCard.js';

const ExperiencePage = () =>{

  const internShip = [
    {
        name:"DIU Belt & Road Research Centre (DIUBRACk)",
        position:"Member",
        date:"July 2022 - Present"
    },
    {
        name:"NLP & ML Research Lab",
        position:"Member",
        date:"September 2021 - Present"
    }
]

    return (
        <div className='page-container'>
          <IndexHeader title1={"Internships"}/>
          <div className='internship-container'>
             <ul>
              {
                internShip.map(int=>(
                  <li>
                    <InternshipCard
                      name={int.name}
                      position={int.position}
                      date={int.date}
                      location={"Diu"}
                    />
                  </li>
                ))
              }
             </ul>
             
             <InternshipCard
             
             />
          </div>
          <IndexHeader title1={"Training"}/>
          <div className='train-sec'>
            <TrainCard
              TrainTitle="Big Data Analysis"
              TrainDate="10-05-23 - 10-05-24"
            />
            <TrainCard
              TrainTitle="Big Data Analysis"
              TrainDate="10-05-23 - 10-05-24"
            />
            <TrainCard
              TrainTitle="Big Data Analysis"
              TrainDate="10-05-23 - 10-05-24"
            />
          </div>
          <IndexHeader title1={"Event Coordination and"} title2={"Leadership"}/>
          <IndexHeader title1={"Clubbing"}/>
        </div>
    );
}

export default ExperiencePage;