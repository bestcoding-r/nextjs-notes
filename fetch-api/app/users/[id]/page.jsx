export default async function Page({params}) {
    const { id } = await params

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json()
    return (
        <div>
            <h1>Dynamic User API Routing</h1>
            <h1>{user.name}</h1>
            <p>Email {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}