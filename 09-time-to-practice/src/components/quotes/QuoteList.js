import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {

  const history = useHistory();
  const location = useLocation();

  console.log(location.pathname);

  // default JavaScript constructor class the browser can use
  const queryParams = new URLSearchParams(location.search);

  // boolean value
  const isSortingAscending = queryParams.get('sort') === 'asc';

  // returns list of quotes, sorted by id either ascending or descending
  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  // toggles the sort query parameter in the URL in unison with the button onClick function hander
  // updates the page whenever the query parameters change
  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>

    </Fragment>
  );
};

export default QuoteList;
