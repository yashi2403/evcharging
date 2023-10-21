import React from 'react';
import './map.css'; // Updated the import path

const Map = () => {
  return (
    <section   id="mission">
      <h1 style={{color:'#062a3c'}}>Our Missions</h1>
      <div className="infoCard">
        <div className="card">
          <img
            src="/electric_vehicle1.jpg"
            alt="Electric Vehicle 1"
            style={{ width: "102%", height: "80%" }}
          />
          <h2>Reduced Emissions</h2>
          <p>Electric vehicles produce zero tailpipe emissions, reducing air pollution and greenhouse gas emissions.</p>
        </div>
        <div className="card">
          <img
            src="/electric_vehicle2.jpg"
            alt="Electric Vehicle 2"
            style={{ width: "102%", height: "80%" }}
          />
          <h2>Energy Efficiency</h2>
          <p>Electric vehicles are highly energy-efficient, making the most of the energy stored in their batteries.</p>
        </div>
        <div className="card">
          <img
            src="/electric_vehicle3.jpg"
            alt="Electric Vehicle 3"
            style={{ width: "102%", height: "80%" }}
          />
          <h2>Cost Savings</h2>
          <p>Electric vehicles are often cheaper to operate and maintain than traditional gasoline-powered cars.</p>
        </div>
      </div>
    </section>
  );
}

export default Map;
