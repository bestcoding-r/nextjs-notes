import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Page Content */}
        <main className="flex-1 p-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 p-4 text-center">
          Footer
        </footer>

      </body>
    </html>
  );
}