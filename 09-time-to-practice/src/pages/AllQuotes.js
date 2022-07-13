import { useEffect } from 'react';

import QuoteList from '../components/quotes/QuoteList';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Max',
    text: 'Learning React is fun!'
  },
  {
    id: 'q2',
    author: 'Maxine',
    text: 'Learning React is great!'
  },
]

const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes,
    true
  );

  // sendRequest is a dependency and runs when the component renders
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
};
export default AllQuotes;
