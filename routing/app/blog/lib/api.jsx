export async function getPosts() {
  return [
    { slug: 'post-1', title: 'First Post' },
    { slug: 'post-2', title: 'Second Post' },
  ];
}

export async function getPost(slug) {
  const posts = await getPosts();
  return posts.find(p => p.slug === slug);
}