import React from "react";
import bioimage from "../Assets/images/IMG_6974p.png"
function About() {
  return (
    
    
    <div className="body_container">

    <h3> About Me</h3>
    

    <div className="row">


        <div className="col-sm-12">
        
            <img id="bio-image" className="img-fluid" src={bioimage} alt="blank" align="left"/>
         


            <p>
                Hello, I'm currently enroll in a web development course in Houston,TX. So far I have learned about 
                front-end web development using HTML,JavaScript, and CSS.
            </p>

            <p>
                Most of my career is in the oil field industry with Halliburton. I spent 12 years as a Measuring While
                Drilling engineer (MWD) in the oil field. They nick named some of us MWD
                as "movie watching dude" because some would watch movie while monitoring the drilling. In reality , it
                is a physically and mentally challenging job. You have deal with the enviroment because most of time you
                will be working outside. Also you have to be prepare for incase something goes wrong. For example, one
                time when we had to abandon ship because of a well blow out.
            </p>

            <p>
                After 12 years in the oil field , I got the opportunity to work in the office as a software tester.
                There I tested a software that we used in the oil field with our drilling tool.
                I also get to test new and enhanced features that add to the software. We tested the software according
                to Agile methology where you would break down the new features to smaller user stories. With smaller
                user stories, the task is easier to manage.
            </p>
            
            <p>
                In my spare time, I like to upgrade my PC or build a new one and benchmark it. My last project was
                adding water cooling with clear water tubing. Also I play Diablo 3 from time to time.
            </p>

        
            </div>
       
        </div>
    
    </div>
    
  );
}

export default About;
