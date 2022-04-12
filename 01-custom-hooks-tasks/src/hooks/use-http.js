import { useState } from 'react';

const useHttp = (requestConfig, applyData) => {
  // requestConfig includes the url, passed from the component
  // applyData is how the component will use (transform) the data

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (taskText) => {
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
  };
  // giving objects for the component to use
  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp;