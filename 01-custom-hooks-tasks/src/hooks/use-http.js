import { useState } from 'react';

const useHttp = (requestConfig, applyData) => {
  // requestConfig includes the url, passed from the component
  // applyData is how the component will use the data

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: JSON.stringify(requestConfig.body)
      }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      // the component handles how the data is applied
      // just passing the data as a prop
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