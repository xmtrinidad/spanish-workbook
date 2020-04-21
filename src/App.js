import React from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

import AppHeader from './AppHeader/AppHeader.js';
import ExerciseCard from './ExerciseCard/ExerciseCard.js';

function App() {
  const input = `# Subject Pronouns

  *Function* - To replace a noun that names the subject (the actor) in a clause or sentence
  
  | yo            | /                   | nosotros nosotras   | we we                  |
  |---------------|---------------------|---------------------|------------------------|
  | tu            | you (informal)      | vosotros vosotras   | you you                |
  | el ella usted | he she you (formal) | ellos ellas ustedes | they they you (formal) |`;
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
