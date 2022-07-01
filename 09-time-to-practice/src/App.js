import { Route, Switch } from 'react-router-dom';

import NewQuote from './pages/NewQuote';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';


function App() {
  return (
    <Switch>
      <Route path="/quotes:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/quotes">
        <AllQuotes />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;
