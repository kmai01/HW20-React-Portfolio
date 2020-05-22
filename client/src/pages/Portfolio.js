import React from "react";
import lovequest from "../Assets/images/lovequest.PNG";
import get_media from "../Assets/images/get_media.PNG";
import notetaker from "../Assets/images/notetaker.PNG";
import weather from "../Assets/images/weather.PNG";
import work_day from "../Assets/images/Work_day.PNG";
import visual from "../Assets/images/Visual_Studio_Code_logo.png";
import lifecycle from "../Assets/images/software_development_lifecycle.png";
import pcbuilding from "../Assets/images/PCbuilding.png";



function Portfolio() {
  return (
    <div className="container">

      <h3>Portfolio</h3>
      <hr />
      <div className="row">
        <div className="col-sm-3">

          <div className="card text-center">

            <a href="https://morning-fjord-37921.herokuapp.com/">
              <img className="card-img" src={lovequest} alt="blank"/></a>

          </div>
        </div>
    

        <div className="col-sm-3">

            <div className="card text-center">

              <a href="https://ctunnell.github.io/project-i/">
                <img className="card-img" src={get_media} alt="blank"/></a>

                </div>
            </div>

            <div className="col-sm-3">

              <div className="card text-center">

                <a href="https://stark-caverns-10185.herokuapp.com/">
                  <img className="card-img" src={notetaker} alt="blank"/></a>


              </div>
            </div>

              <div className="col-sm-3">

                <div className="card text-center">

                  <a href="https://kmai01.github.io/Homework-6">
                    <img className="card-img" src={weather} alt="blank"/></a>


                </div>
              </div>
         </div>


              <div className="row">

                <div className="col-sm-3">

                  <div className="card text-center">

                    <a href="https://kmai01.github.io/Homework-5">
                      <img className="card-img" src={work_day} alt="blank"/></a>


                </div>
                  </div>

                  <div className="col-sm-3">

                    <div className="card text-center">

                      <img className="card-img" src={visual} alt="blank"/>

                        <div className="card-img-overlay">
                          <h3 className="card-title">VS Code</h3>
                        </div>

                </div>
                    </div>

                    <div className="col-sm-3">

                      <div className="card text-center">


                        <img className="card-img" src={lifecycle} alt="blank"/>

                          <div className="card-img-overlay">
                            <h3 className="card-title">SDLC</h3>
                          </div>
                      </div>
                      </div>

                      <div className="col-sm-3">

                        <div className="card text-center">
                          <img className="card-img" src={pcbuilding} alt="blank"/>

                            <div className="card-img-overlay">
                              <h3 className="card-title">PC Building</h3>
                            </div>
              
                        </div>

                        </div>

                      </div>

    </div>              
  );
}

export default Portfolio;
