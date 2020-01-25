import React from "react";

const WomanCard = ({ name, country, searches }) => {
  return (
    <div>
      <div className="women-card">
        <h2>Name: {name}</h2>
        <h3>Country: {country}</h3>
        <h3>Searches: {searches}</h3>
      </div>
    </div>
  );
};

export default WomanCard;
