import React from "react";
// import worldMap from "../assets/world-map.jpg";

const countryDots = [
  { name: "India", top: "51%", left: "68%", color: "#4834D4" },
  { name: "USA", top: "38%", left: "22%", color: "#BD5302" },
  { name: "Canada", top: "25%", left: "20%", color: "#E9C16B" },
  { name: "UAE", top: "52%", left: "59%", color: "#579560" },
];

const WorldMap = () => {
  return (
    <div className="relative inline-block rounded-md overflow-hidden  ">

<img 
// src={worldMap} 
alt="World Map" className="block" />
      {countryDots.map((dot, idx) => (
        <div
          key={idx}
          title={dot.name}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: dot.color,
            top: dot.top,
            left: dot.left,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default WorldMap;
