import React, { useEffect, useState } from 'react';
import Graph from './Graph';

function Headline() {
  const [accidentData, setAccidentData] = useState([]);

  useEffect(() => {
    const data = [
      { year: 2020, totalAccidents: 88323 },
      { year: 2021, totalAccidents: 97059 },
      { year: 2022, totalAccidents: 100508 },
      { year: 2023, totalAccidents: 96567 },
      { year: 2024, totalAccidents: 98000 }
    ];
    setAccidentData(data);

  }, []);

  return (
      <div className="intro">
        <div className="intro-text">
          <h1 className="title intro-title">Our Mission</h1>
          <h2 id="intro-subtitle">Aftershock empowers car accident survivors to overcome fear and rebuild confidence through compassionate, AI-driven therapeutic support.</h2>
        </div>
        <div className="box2">
                  <div className="card">
                      <h1 className="card-title">Our Purpose</h1>
                      <p className="card-description">At Aftershock, we are dedicated to supporting individuals who have experienced car accidents. We believe recovery goes beyond physical healing—it’s about addressing emotional scars and restoring peace of mind.</p>
                  </div>
                  <div className="card">
                      <h1 className="card-title">Our Approach</h1>
                      <p className="card-description">We focus on making mental health support more accessible, compassionate, and tailored to each survivor’s unique journey. Our goal is to empower individuals to process their fears and build resilience at their own pace.</p>
                  </div>
                  <div className="card">
                      <h1 className="card-title">Our Vision</h1>
                      <p className="card-description">We envision a future where every survivor feels understood, supported, and equipped to turn trauma into strength. Aftershock is committed to being a trusted companion on the road to emotional and mental recovery.</p>
                  </div>
              </div>
              
        {accidentData.length > 0 &&  <div className="graph-wrapper">
            <Graph data={accidentData} />
          </div>}
      </div>
  );
}

export default Headline;