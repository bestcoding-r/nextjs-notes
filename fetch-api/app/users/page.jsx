'use client'

import useSWR from "swr"

const fetcher = async(url) => {
    const res = await fetch(url);
    if (!res.ok)
        throw new Error("Network response was not ok")
    return res.json();
}
export default function StaticAPI() {
    const { data, error, isLoading } = useSWR(
        'https://jsonplaceholder.typicode.com/posts',
        fetcher
    )

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    return (
        <div>
            <ul>
                {data.map((res) => {
                    return <li key={res.id}>{res.title}</li>
                })}
            </ul>
        </div>
    )
}