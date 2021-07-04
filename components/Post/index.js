import Link from 'next/link';

import ReactMarkdown from 'react-markdown';

export default function Post({ title, author, date, markdown}) {
  return(
    <article className='post'>
      <h1>{title}</h1>
      <div className='markdown'>
        <ReactMarkdown children={markdown} />
      </div>
      <p className='subtitle'><span><b>Published on:</b> {date}</span><span><b>Written by:</b> {author}</span></p>
      <Link href='/blog'><a className='return-link'>Back to posts</a></Link>
    </article>
  );
}
