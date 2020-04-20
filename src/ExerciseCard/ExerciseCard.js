import React from 'react';
import './ExerciseCard.css';
import IconButton from '@material-ui/core/Button';
import { Notes, HomeWork } from '@material-ui/icons';

const exerciseCard = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{props.name}</h2>
      </div>
      <div className="card-body">
        <IconButton color="primary" aria-label="Exercise Notes">
          <Notes />
        </IconButton>
        <IconButton color="primary" aria-label="Start Exercise">
          <HomeWork />
        </IconButton>
      </div>
    </div>
  )
};

export default exerciseCard;