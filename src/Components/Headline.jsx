import React, { useEffect, useState } from 'react';
import Graph from './Graph';

function Headline() {
  const [accidentData, setAccidentData] = useState([]);

  useEffect(() => {
    const data = [
      { year: 2020, totalAccidents: 34000 },
      { year: 2021, totalAccidents: 33000 },
      { year: 2022, totalAccidents: 32000 },
      { year: 2023, totalAccidents: 31000 },
      { year: 2024, totalAccidents: 30000 },
      { year: 2025, totalAccidents: 29000 }
    ];
    setAccidentData(data);

  }, []);

  return (
    <div className="intro">
      <div className="intro-text">
        <h1 id="intro-title">Our Mission</h1>
        <h2 id="intro-subtitle">Aftershock empowers car accident survivors to overcome fear and rebuild confidence through compassionate, AI-driven therapeutic support.</h2>
      </div>
      <div className="box2">
                <div className="card">
                    <h1 className="card-title">AI-Powered Therapy</h1>
                    <p className="card-description">Utilizing advanced AI technology to provide personalized therapeutic support for trauma recovery.</p>
                </div>
                <div className="card">
                    <h1 className="card-title">AI-Powered Therapy</h1>
                    <p className="card-description">Utilizing advanced AI technology to provide personalized therapeutic support for trauma recovery.</p>
                </div>
                <div className="card">
                    <h1 className="card-title">AI-Powered Therapy</h1>
                    <p className="card-description">Utilizing advanced AI technology to provide personalized therapeutic support for trauma recovery.</p>
                </div>
            </div>
      {accidentData.length > 0 &&  <div className="graph-wrapper">
          <Graph data={accidentData} />
        </div>}
    </div>
  );
}

export default Headline;