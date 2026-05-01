// 'use client';
// import React from 'react';

// export default function Post({ id }) {
//   const [loading, setLoading] = React.useState(true);
//   const [content, setContent] = React.useState('');

//   React.useEffect(() => {
//     const timer = setTimeout(() => {
//       setContent(`Post #${id}`);
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [id]);

//   if (loading) return <li className="h-5 w-full bg-gray-300 rounded mb-2 animate-pulse"></li>;
//   return <li>{content}</li>;
// }

// components/Post.jsx
export default async function Post({ id }) {
  // Simulate server-side data fetch (e.g., from DB or API)
  await new Promise((res) => setTimeout(res, 1000)); // 1 sec delay to simulate fetch

  // Server-side rendering, return directly
  return <li>Post #{id}</li>;
}