import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import './App.css';

import AppHeader from './AppHeader/AppHeader.js';
import ExerciseCard from './ExerciseCard/ExerciseCard.js';

import { md } from './workbook-data/ch-1/ch-1';

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
        <div class="activity">
          <ReactMarkdown source={md} escapeHtml={false} />
        </div>
      </main>
      
      
      
    </div>
  );
}

export default App;
