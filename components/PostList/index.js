import Link from 'next/link';

export default function PostList({ posts, ...props }) {
  if (posts === 'undefined') return null;
  return (
    <section className="blog-posts">
      <div className="posts">
        <h2 className="heading">Blog Posts</h2>
        {!posts && <section>Hang tight. The posts are being updated.</section>}
        {posts &&
          posts.map((post) => {
            return (
              <div key={post.slug} className="post-card">
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <h3>{post.frontMatter.title}</h3>
                    <p>{post.frontMatter.abstract}</p>
                    <p className="read-more">Read More</p>
                  </a>
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
}
