import React from "react";

function Portfolio() {
  return (
    <div className="container">

      <h3>Portfolio</h3>
      <hr />
      <div className="row">
        <div className="col-sm-3">

          <div className="card text-center">

            <a href="https://morning-fjord-37921.herokuapp.com/">
              <img className="card-img" src="Assets/images/lovequest.PNG" alt="blank"/></a>

          </div>
        </div>
    

        <div className="col-sm-3">

            <div className="card text-center">

              <a href="https://ctunnell.github.io/project-i/">
                <img className="card-img" src="Assets/images/get_media.PNG" alt="blank"/></a>

                </div>
            </div>

            <div className="col-sm-3">

              <div className="card text-center">

                <a href="https://stark-caverns-10185.herokuapp.com/">
                  <img className="card-img" src="Assets/images/notetaker.PNG" alt="blank"/></a>


              </div>
            </div>

              <div className="col-sm-3">

                <div className="card text-center">

                  <a href="https://kmai01.github.io/Homework-6">
                    <img className="card-img" src="Assets/images/weather.PNG" alt="blank"/></a>


                </div>
              </div>
         </div>


              <div className="row">

                <div className="col-sm-3">

                  <div className="card text-center">

                    <a href="https://kmai01.github.io/Homework-5">
                      <img className="card-img" src="Assets/images/Work_day.PNG" alt="blank"/></a>


                </div>
                  </div>

                  <div className="col-sm-3">

                    <div className="card text-center">

                      <img className="card-img" src="Assets/images/Visual_Studio_Code_logo.png" alt="blank"/>

                        <div className="card-img-overlay">
                          <h3 class="card-title">VS Code</h3>
                        </div>

                </div>
                    </div>

                    <div className="col-sm-3">

                      <div className="card text-center">


                        <img className="card-img" src="Assets/images/software_development_lifecycle.png" alt="blank"/>

                          <div className="card-img-overlay">
                            <h3 className="card-title">SDLC</h3>
                          </div>
                      </div>
                      </div>

                      <div className="col-sm-3">

                        <div className="card text-center">
                          <img className="card-img" src="Assets/images/PCbuilding.png" alt="blank"/>

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
