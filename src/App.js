import React from 'react';
import './App.css';

import AppHeader from './AppHeader/AppHeader.js';
import ExerciseCard from './ExerciseCard/ExerciseCard.js';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <div class="cards">
          <ExerciseCard name="Introduction"></ExerciseCard>
          <ExerciseCard name="Exercise 1-1"></ExerciseCard>
          <ExerciseCard name="Exercise 1-2"></ExerciseCard>
      </div>
      </main>
      
      
      
    </div>
  );
}

export default App;
