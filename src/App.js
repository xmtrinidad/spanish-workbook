import React from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

import AppHeader from './AppHeader/AppHeader.js';
import ExerciseCard from './ExerciseCard/ExerciseCard.js';

function App() {
  const input = ``;
  return (
    <div className="App">
      <AppHeader />
      <main>
        <div class="cards">
          <ExerciseCard name="Introduction"></ExerciseCard>
          <ExerciseCard name="Exercise 1-1"></ExerciseCard>
          <ExerciseCard name="Exercise 1-2"></ExerciseCard>
        </div>
        <ReactMarkdown source={input} />
      </main>
      
      
      
    </div>
  );
}

export default App;
