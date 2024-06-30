import React from 'react';

const Card = ({ name, spending, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>ID: {id}</p> {/* Add ID display */}
        <p>Amount: ${spending}</p>
      </div>
    </div>
  );
}

export default Card;
