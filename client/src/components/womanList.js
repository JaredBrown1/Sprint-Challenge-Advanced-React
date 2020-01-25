import React from "react";
import WomanCard from "./womanCard";

function WomanList({ women }) {
  return (
    <div>
      {women.map(woman => (
        <WomanCard
          key={woman.id}
          name={woman.name}
          country={woman.country}
          searches={woman.searches}
        />
      ))}
    </div>
  );
}

export default WomanList;
