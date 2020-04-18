import React from 'react';
import './ExerciseCard.css';

const exerciseCard = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{props.name}</h2>
      </div>
      <div className="card-body">
        <button>Read Info</button>
        <button>Start Exercise</button>
      </div>
    </div>
  )
};

export default exerciseCard;