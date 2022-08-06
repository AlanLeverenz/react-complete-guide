import { Fragment } from 'react';

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <a href='/news/nextjs-is-a-great-framework'>NextJs Is a Great Framework
          </a>
        </li>
        <li>Something Else Is Too</li>
      </ul>
    </Fragment>
  )

}

export default NewsPage;