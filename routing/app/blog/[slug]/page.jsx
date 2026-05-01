import { getPost } from '../lib/api';

export default async function Post({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Content for {post.slug}</p>
    </div>
  );
}