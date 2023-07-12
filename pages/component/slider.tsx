import React from "react";

const Slider: React.FC = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
      rel="stylesheet"
    />
    <section className="hero-section">
      <div className="card-grid">
        <a className="card">
          <div
            className="card__background"
            style={{
              backgroundImage:
                "url(https://images.hdqwalls.com/download/earth-space-digital-art-qhd-3840x2400.jpg)",
            }}
          ></div>
          <div className="card__content">
            <p className="card__category">Prithvi</p>
            <h3 className="card__heading">Tellus Mater or Terra Mater</h3>
          </div>
        </a>
        <a className="card">
          <div
            className="card__background"
            style={{
              backgroundImage:
                "url(https://images.hdqwalls.com/download/earth-planet-4k-tc-1366x768.jpg)",
            }}
          ></div>
          <div className="card__content">
            <p className="card__category">MotherLand</p>
            <h3 className="card__heading">Sixth planet from the Sun</h3>
          </div>
        </a>
        <a className="card">
          <div
            className="card__background"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1546979348-7a211780ad7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVsbCUyMG1vb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)",
            }}
          ></div>
          <div className="card__content">
            <p className="card__category">Moon</p>
            <h3 className="card__heading">
              The Moon is Earth's only natural satellite
            </h3>
          </div>
        </a>
        <a className="card">
          <div
            className="card__background"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1481819613568-3701cbc70156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80)",
            }}
          ></div>
          <div className="card__content">
            <p className="card__category">Wolf Moon</p>
            <h3 className="card__heading">
              subconscious world, our emotions, heart, and the love
            </h3>
          </div>
        </a>
      </div>
    </section>
  </>
);

export default Slider;
