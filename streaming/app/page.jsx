// import React from 'react';
// import Post from './components/Post';

// export default function Page() {
//   const posts = [1, 2, 3, 4, 5];

//   return (
//     <ul>
//       {posts.map((id) => (
//         <Post id={id} key={id} />
//       ))}
//     </ul>
//   );
// }

// app/page.jsx
import Post from './components/Post';
import React, { Suspense } from 'react';

export default function Page() {
  const posts = [1, 2, 3, 4, 5];

  return (
    <ul>
      {posts.map((id) => (
        <Suspense fallback={<li className="h-5 w-full bg-gray-300 rounded mb-2 animate-pulse" />} key={id}>
          <Post id={id} />
        </Suspense>
      ))}
    </ul>
  );
}