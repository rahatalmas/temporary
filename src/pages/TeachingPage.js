import IndexHeader from '../components/IndexHeader';
import TeachingCard from '../components/TeachingCard';
import './TeachingPage.css';

const TeachingPage = () =>{
    return(
        <div className='page-container'>
           <IndexHeader title1="Teaching" title2={"Experience"}/>
           <ul>
             <li>
             <TeachingCard
                 courseName={"Software Project"}
                 position={"Prefect"}
                 organization={"Daffodil International University"}
                 date={"2020-2021"}
             />
             </li>
             <li>
             <TeachingCard
                 courseName={"Software Project"}
                 position={"Prefect"}
                 organization={"Daffodil International University"}
                 date={"2020-2021"}
               />
             </li>
           </ul>
        </div>
    );
}

export default TeachingPage;