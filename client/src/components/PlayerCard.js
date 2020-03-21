import React from "react";

const PlayerCard = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.country}</h3>
    </div>
  );
};

export default PlayerCard;
