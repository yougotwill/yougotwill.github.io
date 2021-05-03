import Link from 'next/link';

import ReactMarkdown from 'react-markdown';

export default function Post({ title, author, date, markdown}) {
  return(
    <article className='post'>
      <h1>{title}</h1>
      <p>By {author} on {date}</p>
      <div className='markdown'>
        <ReactMarkdown children={markdown} />
      </div>
      <Link href='/blog'><a className='return-link'>Back to posts</a></Link>
    </article>
  );
}
