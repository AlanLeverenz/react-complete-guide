import Link from 'next/link';
import { Fragment } from 'react';

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-is-a-great-framework'>NextJs Is a Great Framework
          </Link>
        </li>
        <li>Something Else Is Too</li>
      </ul>
    </Fragment>
  )
}

export default NewsPage;