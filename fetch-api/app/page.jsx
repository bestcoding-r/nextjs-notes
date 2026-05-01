export default async function Page() {
    const res = await fetch('https://api.vercel.app/blog');
    const post = await res.json();
    return (
        <div>
            <h1>Fetch API Data</h1>
            {post.map((posts) => (
                <li key={posts.id}>
                    {posts.title}
                    <p>{posts.content}</p>
                </li>
            ))}
        </div>
    )
}