import ReactMarkdown from 'react-markdown';

export default function Post({ title, author, markdown}) {
  return(
    <article className='post'>
      <h1>{title}</h1>
      <p>By {author}</p>
      <div>
        <ReactMarkdown children={markdown} />
      </div>
    </article>
  );
}
