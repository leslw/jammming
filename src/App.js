import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { useState } from 'react';

const dummyTracks = [
  {
    artist: "Akon",
    title: "Locked Up (feat. Styles P)",
    album: "Trouble",
    id: 1
  },
  {
    artist: "Jamie Ray",
    title: "COUNTRY TO THE CITY",
    album: "COUNTRY TRAP",
    id: 2
  },
  {
    artist: "LUDMILLA",
    title: "Cheguei",
    album: "Cheguei - Single",
    id: 3
  }
];

function App() {
  const [added, setAdded] = useState([]);

  // Function to add a track to the playlist
  const addTrackToPlaylist = (trackId) => {
    if (added.includes(trackId)) {
      // Track is already in the playlist, so remove it
      setAdded((prevAdded) => prevAdded.filter(id => id !== trackId));
    } else {
      // Track is not in the playlist, so add it
      setAdded((prevAdded) => [...prevAdded, trackId]);
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        <SearchBar />
      </header>
      <main>
        <SearchResults tracks={dummyTracks} onAddTrack={addTrackToPlaylist} />
        <Playlist tracks={dummyTracks} added={added} onAddTrack={addTrackToPlaylist} />
      </main>
    </div>
  );
}

export default App;
