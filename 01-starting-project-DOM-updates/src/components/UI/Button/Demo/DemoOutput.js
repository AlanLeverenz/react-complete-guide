import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DemoOuput RUNNING');
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>
}

// for functional components
// tells React to check for new values. 
// if not new, the component will not re-render (be created again)
export default React.memo(DemoOutput);