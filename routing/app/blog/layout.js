export default function BlogLayout({ children }) {
    return (
        <div style={{ border: "2px solid #ccc", padding: "1rem" }}>
            <header>
                <h2>My Blog</h2>
            </header>
            <main>{children}</main>
            <footer style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
                Footer content here
            </footer>
        </div>
    );
}