import React, { CSSProperties } from "react";

const Wave: React.FC = () => {
  return (
    <>
      <div className="header">
        <footer>
          <div className="row">
            <div className="column">
              <h4>About Us</h4>

              <p>
                Discover the universe's mesmerizing beauty and unravel its
                mysteries with Planet.io. Explore our captivating planet image
                collection and delve into a wealth of space information. Join
                our passionate community of space enthusiasts and embark on a
                cosmic journey of curiosity and inspiration. Immerse yourself in
                the wonders of space with Planet.io - your gateway to the
                infinite expanse above.
              </p>
            </div>

            <div className="column">
              <h4>Quick Links</h4>

              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Scientific Details
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Contact us
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Bug report
                  </a>
                </li>
              </ul>
            </div>

            <div className="column">
              <h4>Connect with Us</h4>

              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <p className="copyright">
          © 2023 All Rights Reserved | Designed by Shubham Tribhuvan
          <i className="fa fa-heart" aria-hidden="true"></i>
        </p>
      </div>
    </>
  );
};

export default Wave;
