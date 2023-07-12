import React from "react";

const Card: React.FC = () => {
  return (
    <>
      <div className="painter">
        <div className="card1">
          <div className="face face1">
            <div className="content">
              <img
                src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"
                alt="Design"
              />
              <h3>Mars Mission</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                India's first interplanetary mission to planet Mars was
                launchedonboard PSLV-C25 on November 05,2013. ISRO has become
                the fourth space agency to successfully send a spacecraft to
                Mars orbit.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="face face1">
            <div className="content">
              <img
                src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"
                alt="Code"
              />
              <h3>Gaganyaan </h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Gaganyaan project envisages demonstration of human spaceflight
                capability by launching crew of 3 members to an orbit of 400 km
                for a 3 days mission.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="face face1">
            <div className="content">
              <img
                src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"
                alt="Launch"
              />
              <h3>Chandrayaan-3</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p>
                Chandrayaan-3 is a follow-on mission to Chandrayaan-2 that is
                aimed make a safe and soft landing on the lunar surface.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
