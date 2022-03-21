import React, { useState, useCallback } from 'react';
import DemoOutput from './components/UI/Button/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
    // overrides useCallBack using a dependency
    // when it changes, the function is created again
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  // empty array dependencies. always the same 

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
// useCallback stores the function so it is not re-rendered...
// unless the inputs change (memoization)
// <DemoOutput show={showParagraph} />