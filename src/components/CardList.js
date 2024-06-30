import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((robot, i) => {
          return (
            <Card
              key={i}
              id={robot.id}      // Correctly passing id
              name={robot.name}   // Correctly passing name
              spending={robot.spending}  // Correctly passing spending
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
