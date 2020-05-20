import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import './App.css';

import AppHeader from './AppHeader/AppHeader.js';
import ExerciseCard from './ExerciseCard/ExerciseCard.js';

import { md } from './workbook-data/ch-1/ch-1';

function App() {
  const [active, setActive] = useState("false");

  const onNotesClick = () => {
    setActive("true");
  }
  
  return (
    <div className="App">
      <AppHeader />
      <main>
        <div className="cards">
          <ExerciseCard 
            name="Introduction" 
            click={() => onNotesClick()}>
          </ExerciseCard>
          <ExerciseCard name="Exercise 1-1"></ExerciseCard>
          <ExerciseCard name="Exercise 1-2"></ExerciseCard>
        </div>
        <div className="activity" active={active}>
          <ReactMarkdown source={md} escapeHtml={false} />
        </div>
      </main>
      
      
      
    </div>
  );
}

export default App;
