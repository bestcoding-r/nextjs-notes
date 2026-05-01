'use client'

import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    if (!res.ok) throw new Error('Network response was not ok')
    return res.json()
}

export default function BlogPage() {
    const { data, error, isLoading } = useSWR(
        'https://jsonplaceholder.typicode.com/posts', // Public API for testing
        fetcher
    )

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <ul>
            {data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}