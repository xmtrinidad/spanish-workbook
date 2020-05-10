import React from 'react';
import classes from './ExerciseCard.module.css';
import IconButton from '@material-ui/core/Button';
import { Notes, HomeWork } from '@material-ui/icons';

const exerciseCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <h2>{props.name}</h2>
      </div>
      <div className={classes.cardBody}>
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