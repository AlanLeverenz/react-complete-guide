import { useState, useCallback } from 'react';

const useHttp = () => {
  // applyData is how the component will use (transform) the data
  // refactored to remove applyData as a parameter (not needed in App.js)

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useCallback creates a memoization that only runs if things change
  // to prevent infinite loop with useEffect in App.js
  // requestConfig includes the url, passed from the component
  // applyData is no longer a dependency to this overall function
  // ...because it is received as a parameter (no external dependencies)
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url, {
        // no method, header, and body needed for App.js GET 
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
      }
      );

      // console.log(requestConfig.url);

      // throwing an Error ends the function
      if (!response.ok) {
        throw new Error('Request failed!');
      }

      // converts data to json format
      const data = await response.json();
      // the component handles how the data is applied
      // passing the data transform function pointer to the component
      applyData(data);

    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
    // requestConfig is now a parameter, not a dependency
  }, []);

  // giving objects for the component to use
  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp;