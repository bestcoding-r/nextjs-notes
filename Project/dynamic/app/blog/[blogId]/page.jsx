export default function Page({ params }) {
  const blogId = params.blogId || 'No ID';
  console.log(params); // Should log { blogId: 'gfd' }
  return <h1>Dynamic Page ID: {blogId}</h1>;
}