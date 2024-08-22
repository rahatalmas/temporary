import IndexHeader from '../components/IndexHeader';
import '../pages/Home.css';
import CourseCard from '../components/CourseCard.js';
import EducationCard from '../components/EducationCard.js';
import { useState } from 'react';
import PopUpDetails from './PopUpDetails.js';
const Home = () => {
    
  let dataArr = [
    {
      title: "Data Collector - Climate Change and Maternal Health Research Project",
      institution: "Faculty of Graduate Studies (FGS), Daffodil International University",
      location: "Ashuliya, Dhaka, Bangladesh",
      duration: "10/08/2023 - 20/08/2023",
      description: "Contributed to a multi-faceted research project funded by ARA and UKAID, conducted by the Faculty of Graduate Studies at Daffodil International University. The research aimed to understand the impact of climate change on maternal health.",
      
      
      skills: [
        "Data Collection",
        "Research Ethics",
        "Community Engagement",
        "Collaboration with NGOs",
        "Understanding of Climate Change Impacts"
      ],
      responsibilities: [
        "Collected and recorded height, weight, and blood pressure data from expectant mothers.",
        "Engaged with local NGOs to gather qualitative insights.",
        "Collaborated closely with team members to ensure the accuracy and integrity of collected data.",
        "Demonstrated commitment to research ethics and community engagement."
      ],
      contact: {
        name: "Khalid (Faculty of Graduate Studies)",
        email: "khalid.fgs@diu.edu.bd"
      }
    }
  ];
  
  const [pop,setPop] = useState(false);
  const popUp = () =>{
     if(pop){
        document.body.style.overflow="scroll"
        setPop(!pop)
     }else{
        document.body.style.overflow="hidden"
        setPop(!pop)
     }
  }

    return(
       <div className='home-container'>
          <PopUpDetails popState={pop} off={popUp} data={dataArr} />
          <IndexHeader title1="About" title2="Me"/>
          <p className='h-p'>
            <span className='h-s'>Aspiring Scientist Aspiring Scientist | AI & Data Enthusiast | Computer Science GraduateAspiring Scientist </span>
          </p>
          <p className='h-p'>
          I am Tariqul Islam, a passionate and driven individual from Narayanganj, Bangladesh, with a deep-rooted love for science and technology. My journey in the world of computer science began with a Bachelor’s degree in Computer Science and Engineering from Daffodil International University, where I immersed myself in the captivating field of machine learning. From a young age, I've been fascinated by how machines can learn and evolve, and this curiosity has shaped my academic and professional pursuits.
          Throughout my academic career, I've been fortunate to work on some truly exciting projects. One that stands out is my thesis on "Salinity-Resilient Crop Health Monitoring," where I explored the application of machine learning to agriculture, particularly focusing on disease detection in Luffa Aegyptiaca leaves. It was a project that combined my love for technology with a desire to make a tangible difference in people's lives, especially in regions like ours that are often hit hard by climate change. My work experience has been equally fulfilling. At HyperTag Solution Ltd., I had the opportunity to dive deep into practical machine learning applications, developing predictive models and handling real-world datasets. This hands-on experience has not only solidified my technical skills but also fueled my enthusiasm for applying machine learning to solve real-world problems. 
          </p>
          <p>
            <span className='research-interest'>Research Interest: </span>
            <span className='r-i-keys'>Casual Learning, </span>
            <span className='r-i-keys'>Deep Learning, </span>
            <span className='r-i-keys'>Health Learning in AI, </span>
            <span className='r-i-keys'>Supervised Learning</span>
          </p>
          { 
            /*
             education
           */
          }
          <IndexHeader title1={"Eduction"}/>
          <EducationCard 
            institute="Daffodil International University"
            degree="Bachelor in Computer Science and Engineering"
            result="3.50"
            totalcredit="148"
            position="N out of T"
          />
          
          <IndexHeader title1={"Online"} title2={"Courses"}/>
          <div className='course-sec'>
              <CourseCard
                courseImage="./assets/html.png"
                courseTitle="Introduction to HTML5"
                hide ={popUp}
              />
              <CourseCard
                courseImage="./assets/python.png"
                courseTitle="Basic Python"
                hide={popUp}
              />
          </div>
       </div>
    );
} 

export default Home;