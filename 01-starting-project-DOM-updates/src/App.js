import React, { useState, useCallback } from 'react';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  }, []);

  // empty array dependencies. always the same 

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
// useCallback stores the function so it is not re-rendered
// unless the inputs change (memoization)
// <DemoOutput show={showParagraph} />