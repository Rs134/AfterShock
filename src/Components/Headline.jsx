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
        <h1 className="title intro-title">Our Mission</h1>
        <h2 id="intro-subtitle">Aftershock empowers car accident survivors to overcome fear and rebuild confidence through compassionate, AI-driven therapeutic support.</h2>
      </div>
      <div className="box2">
                <div className="card">
                    <h1 className="card-title">Guided Conversations</h1>
                    <p className="card-description">Aftershock’s chatbot offers empathetic, judgment-free dialogue designed to ease anxiety, reduce fear, and help survivors process their emotions at their own pace.</p>
                </div>
                <div className="card">
                    <h1 className="card-title">Driving Anxiety</h1>
                    <p className="card-description">Through step-by-step strategies, coping techniques, and positive reinforcement, Aftershock helps users rebuild confidence behind the wheel and gradually overcome accident-related fears.</p>
                </div>
                <div className="card">
                    <h1 className="card-title">Tailored Guidance</h1>
                    <p className="card-description">Every survivor’s journey is unique. Aftershock adapts its therapeutic responses to individual needs, providing practical tips, mindfulness exercises, and personalized resources to support long-term healing.</p>
                </div>
            </div>
      {accidentData.length > 0 &&  <div className="graph-wrapper">
          <Graph data={accidentData} />
        </div>}
    </div>
  );
}

export default Headline;