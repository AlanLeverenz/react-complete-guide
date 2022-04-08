import { useState, useEffect } from 'react';

// must start a custom hook with "use"
// the logic of an imported custom hook is shared, but not the state

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
    // forwards is parameter that is a dependency 
    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
};

export default useCounter;