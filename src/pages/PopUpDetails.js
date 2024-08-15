import React from "react";
import './Home.css';
import './PopUpDetails.css';

const PopUpDetails = ({popState,off,data}) => {
    return (
       <div className={popState?"DetailsdisplayOn":"DetailsdisplayOff"}>
          <div className="popUpContent">
            <div className="popUpHead">
                <h1 className="h1-px" onClick={off}>X</h1>
            </div>
            <div className="popUpMainContainer">
                <div className="popUpMain">
                      <div className="popUpImg">
                      <img src="./assets/python.png" className="popUpContentImg" />
                      <div>
                        <div className="indicator-circle-container">
                            <div className="indicator-circle"></div>
                            <div className="indicator-circle"></div>
                            <div className="indicator-circle"></div>
                        </div>                 
                      </div>
                    </div>
                    <div className="popUpContentDetails">
                        <h1>{data[0].title}</h1>
                        <p>{data[0].institution}</p>
                        <div>
                          <p>{data[0].duration}</p><p>{data[0].location}</p>
                        </div>
                        <p>{data[0].contact.name}</p>
                        <p>{data[0].contact.email}</p>
                        <p>{data[0].description}</p>
                    </div>
                </div>
                <div className="popUpLastRow">
                
                <div className="popUp-skills-container"> 
                          <p>Responsibilities: </p>
                          {
                             data[0].responsibilities.map((skill)=>(
                              <p> - {skill} </p>
                             ))
                          }
                          
                  </div>
                </div>
            </div>
          </div>

       </div>
    );
}

export default PopUpDetails;