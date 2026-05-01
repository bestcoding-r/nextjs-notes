"use client"; // Client-side component
import { useEffect, useState } from "react";

export default function SequentialFetchExample() {
  const [artist, setArtist] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Step 1: Artist fetch karo
        const artistRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const artistData = await artistRes.json();
        setArtist(artistData);

        // Step 2: Playlists fetch karo using artistID
        const playlistsRes = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${artistData.id}`
        );
        const playlistsData = await playlistsRes.json();
        setPlaylists(playlistsData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Artist: {artist?.name}</h1>
      <h2>Playlists:</h2>
      <ul>
        {playlists.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}