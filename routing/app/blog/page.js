import Link from 'next/link';
import { getPosts } from './lib/api';

export default async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}